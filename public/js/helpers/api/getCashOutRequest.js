console.log('hello')


    //Get the Direct Refereal Link 
    const domInput = document.querySelector("#CashOutRequestDom");
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
                
                if(response.unPaidCashoutRequest.pagingCounter != 1 && response.unPaidCashoutRequest.pagingCounter >= response.unPaidCashoutRequest.totalDocs) {
                    nextPayLoad = nextPayLoad - 20;
                    console.log('close work')
                    return false
                }

                if(response.unPaidCashoutRequest.docs.length > 0){
                    domInput.innerHTML = "";
                    response.unPaidCashoutRequest.docs.map((cashout, i) => {
                        console.log(cashout)
                        const { _id, createdAt, credit, debit, debitNaira, owner, receiverUsername, remark, senderUsername, status, transactionReference, updatedAt,  ownersDetails } = cashout;
                        console.log(ownersDetails)
                        const {accountName, accountNumber, bankName, mail, username, _id: ownerId} = ownersDetails[0];
                        //Insert in to the Dom
                        console.log(response.unPaidCashoutRequest.pagingCounter)
                        domInput.innerHTML += `
                            <tr>
                                <td>${response.unPaidCashoutRequest.pagingCounter + i}</td>
                                <td><p class="disburstBtn" data-transaction-ref="${transactionReference}" style="border: 1px solid white; border-radius: 5px; padding: 6px; cursor: pointer;">Disburst</p></td>
                                <td>${username}</td>
                                <td>${accountName}</td>
                                <td>${accountNumber}</td>
                                <td>${bankName}</td>
                                <td>${mail}</td>
                                <td>${credit}</td>
                                <td>${debit}</td>
                                <td>${transactionReference}</td>
                                <td>${status}</td>
                                <td style="width: 250px">${new Date(createdAt).toDateString()}</td>
                            </tr>`
                    })

                    const disburstBtnAll = Array.from(document.querySelectorAll('.disburstBtn'))

                    disburstBtnAll.map(x => {
                        console.log(x)
                        x.addEventListener('click', (e) => disBurstApi(e, x))
                    })

                    pagination.style.display = 'block';
                    return true
                }
                console.log(response.unPaidCashoutRequest.docs.length)
                if (response.unPaidCashoutRequest.docs.length == 0)  {
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

    getCashOutRequestApi("api/getCashOutRequests");//Load first

    next.addEventListener('click', (e) => {
        console.log("next accepted")
        nextPayLoad = nextPayLoad + 20;
        nextA.innerHTML = `Loading...`;
        //Call the API Function
        getCashOutRequestApi(`api/getCashOutRequests?perPage=20&jump=${nextPayLoad}`)
    })

    prev.addEventListener('click', (e) => {
        if(nextPayLoad > 0) {
            nextPayLoad = nextPayLoad - 20;
            prevA.innerHTML = `Loading...`;
            getCashOutRequestApi(`api/getCashOutRequests?perPage=20&jump=${nextPayLoad}`)
        }
    })



