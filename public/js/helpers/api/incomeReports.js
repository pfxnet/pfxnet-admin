
    //Get the Direct Refereal Link 
    const domInput = document.querySelector("#incomeReportDom");
    console.log(domInput)
    const pagination = document.querySelector("#pagination");
    const next = document.getElementById("next-page");
    const prev = document.getElementById("prev-page");
    const nextA = document.getElementById("next-page-a");
    const prevA = document.getElementById("prev-page-a");
    const tabItem = Array.from(document.querySelectorAll(".page-item"))

    let nextPayLoad = 0;
    let tab1 = 0;
    let tab2 = 0;
    let tab3 = 0;

    const getCashOutRequestApi = (url) => {
        console.log(url)
        //Call The Api
        http.get(url)//perPage=20&jump=20
            .then(response => {
                console.log(response)
                               
                nextA.innerHTML = `Next`;
                prevA.innerHTML = `Prev`;
                
                if(response.allIncomeReports.pagingCounter != 1 && response.allIncomeReports.pagingCounter >= response.allIncomeReports.totalDocs) {
                    nextPayLoad = nextPayLoad - 20;
                    console.log('close work')
                    return false
                }

                if(response.allIncomeReports.docs.length > 0){
                    domInput.innerHTML = "";
                    response.allIncomeReports.docs.map((x, i) => {
                        const { _id, createdAt, debit, senderUsername, remark, transactionId, owner } = x;
                        //Insert in to the Dom
                        domInput.innerHTML += `
                            <tr>
                                <td>${response.allIncomeReports.pagingCounter + i}</td>
                                <td>${owner}</td>
                                <td>${debit}</td>
                                <td>${remark}</td>
                                <td>${senderUsername}</td>
                                <td>${transactionId}</td>
                                <td style="width: 250px">${new Date(createdAt).toDateString()}</td>
                            </tr>`
                    })
                    pagination.style.display = 'block';
                    return true
                }
         
                if (response.allIncomeReports.docs.length == 0)  {
                    domInput.innerHTML = `
                    <tr> 
                        <td style="text-align: center; position: absolute; left: 40%;"> No Cashout Request Found</td>
                    </tr>`
                } 

            }).catch(err => {
                console.log(err.message)
                alertify.set('notifier', 'position', 'top-center');
                return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10)
            })
    }

    getCashOutRequestApi("api/incomeReports");//Load first

    next.addEventListener('click', (e) => {
        console.log("next accepted")
        nextPayLoad = nextPayLoad + 20;
        nextA.innerHTML = `<img style="width: 15px;" src="img/logo/preloader.gif"  alt="" />`;
        //Call the API Function
        getCashOutRequestApi(`api/incomeReports?perPage=20&jump=${nextPayLoad}`)
    })

    prev.addEventListener('click', (e) => {
        console.log(nextPayLoad)
        if(nextPayLoad > 0) {
            nextPayLoad = nextPayLoad - 20;
            prevA.innerHTML = `<img style="width: 15px;" src="img/logo/preloader.gif"  alt="" />`;
            getCashOutRequestApi(`api/incomeReports?perPage=20&jump=${nextPayLoad}`)
        }
    })



