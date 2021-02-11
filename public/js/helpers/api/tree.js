

console.log('hello')


    //Get the Direct Refereal Link 

    const searchDownlinerInput = document.querySelector("#searchDownlinerInput");
    const domInput = document.querySelector("#downlinerBlock");
    const pagination = document.querySelector("#pagination");
    const next = document.getElementById("next-page");
    const prev = document.getElementById("prev-page");
    const nextA = document.getElementById("next-page-a");
    const prevA = document.getElementById("prev-page-a");

    let nextPayLoad = 0;
    let tab1 = 0;
    let tab2 = 0;
    let tab3 = 0;

    const treeDownliner = (url) => {

        const data = {
            theUserId: searchDownlinerInput.value
        }


        http.post(url, data)
            .then(response => {
                console.log(response)
                               
                nextA.innerHTML = `Next`;
                prevA.innerHTML = `Prev`;
                
                
                if(response.myDirect.pagingCounter != 1 && response.myDirect.pagingCounter >= response.myDirect.totalDocs) {
                    nextPayLoad = nextPayLoad - 20;
                    console.log('close work')
                    return false
                }

                console.log(response.myDirect.theUserObj)

                if(!response.theUserObj) {
                    return downlinerBlock.innerHTML = `
                        <td style="text-align: center; margin-top: 15px;">
                            No User Found
                        </td>
                    `;
                }

                console.log(document.querySelector("#downliner"))

                document.querySelector("#downliner").innerHTML = `
                    <img src="${response.theUserObj.avatar ? response.theUserObj.avatar : 'https://www.csklegal.com/wp-content/uploads/2014/07/no-image.png'}" class="img-fluid img-rounded m" alt="" /><br>
                    <p style="color: white;">${response.theUserObj.firstname} ${response.theUserObj.lastname}</p>
                    <p style="color: white;">${response.theUserObj.mail}</p>
                    <p style="color: white;">${response.theUserObj.phone}</p>
                `;

                //Downliner

               if(response.myDirect.docs.length > 0){

                    domInput.innerHTML = "";

                    response.myDirect.docs.map(x => {
                        domInput.innerHTML += `
                        <td style="text-align: center; margin-top: 15px;">
                            <img src="${x.avatar ? x.avatar : 'https://www.csklegal.com/wp-content/uploads/2014/07/no-image.png'}" class="img-fluid img-rounded" alt="" />
                            <p style="color: white;">
                                ${x.firstname} ${x.lastname}<br>
                                ${x.mail}<br>
                                ${x.phone}
                            </p>
                        </td>`;
                    }) 
                    pagination.style.display = 'block';
                    return true
                }

                if (response.myDirect.docs.length == 0)  {
                    domInput.innerHTML = `
                    <tr> 
                        <td style="text-align: center; position: absolute; left: 40%;">No downliner Found/td>
                    </tr>`
                }

            }).catch(err => {
                console.log(err.message)
                alertify.set('notifier', 'position', 'top-center');
                return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10)
            })
    }

    if(searchDownlinerInput) {
        searchDownlinerInput.addEventListener('keyup', (e) => treeDownliner("admin/api/findGeneology"))
    }
    
    next.addEventListener('click', (e) => {
        console.log("next accepted")
        nextPayLoad = nextPayLoad + 20;
        nextA.innerHTML = `Loading...`;
        //Call the API Function
        treeDownliner(`admin/api/findGeneology?perPage=20&jump=${nextPayLoad}`)
    })

    prev.addEventListener('click', (e) => {
        if(nextPayLoad > 0) {
            nextPayLoad = nextPayLoad - 20;
            prevA.innerHTML = `Loading...`;
            treeDownliner(`admin/api/findGeneology?perPage=20&jump=${nextPayLoad}`)
        }
    })



