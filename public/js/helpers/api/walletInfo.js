
const totalCredit = document.querySelector("#total-credit");
const totalDebit = document.querySelector("#total-debit");
const balanceAmount = document.querySelector("#balance-account");
const allTransactions = document.querySelector("#allTransactions");
const allCredits = document.querySelector("#allCredits");
const allDebit = document.querySelector("#allDebit");

const getWalletInfo = () => {
    console.log(('wellet boy'))
    http.get('admin/api/walletInfo')
        .then(response => {
            if(response) {
                totalCredit.textContent = response.allCredits;
                totalDebit.textContent = response.totalDebit
                balanceAmount.textContent = response.balanceAmount
                allTransactions.textContent = response.allTransactions
                allCredits.textContent = response.allCredits
                allDebit.textContent = response.allDebit || '0.00'
            }
        }).catch(err => {
            console.log(err.message)
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10)
        })
}


getWalletInfo();


console.log('hello')


    //Get the Direct Refereal Link 
    const domInput = document.querySelector("#allTransactionDom");
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
                
                if(response.allTransactionDetails.pagingCounter != 1 && response.allTransactionDetails.pagingCounter >= response.allTransactionDetails.totalDocs) {
                    nextPayLoad = nextPayLoad - 20;
                    console.log('close work')
                    return false
                }

                if(response.allTransactionDetails.docs.length > 0){
                    domInput.innerHTML = "";
                    response.allTransactionDetails.docs.map((x, i) => {
                        console.log(x)

                        const { createdAt, credit, owner, receiverUsername, remark, senderUsername, status, _id  } = x;
                      
                        //Insert in to the Dom
                        console.log(response.allTransactionDetails.pagingCounter)
                        domInput.innerHTML += `
                            <tr>
                                <td>${response.allTransactionDetails.pagingCounter + i}</td>
                                <td>${owner}</td>
                                <td>${remark}</td>
                                <td>${senderUsername}</td>
                                <td>${receiverUsername}</td>
                                <td>${credit}</td>
                                <td>${status}</td>
                                <td style="width: 250px">${new Date(createdAt).toDateString()}</td>
                            </tr>`
                    })

                    pagination.style.display = 'block';
                    return true
                }
                console.log(response.allTransactionDetails.docs.length)
                if (response.allTransactionDetails.docs.length == 0)  {
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

    getCashOutRequestApi("admin/api/walletInfo");//Load first

    next.addEventListener('click', (e) => {
        console.log("next accepted")
        nextPayLoad = nextPayLoad + 20;
        nextA.innerHTML = `<img style="width: 15px;" src="img/logo/preloader.gif"  alt="" />`;
        //Call the API Function
        getCashOutRequestApi(`admin/api/walletInfo?perPage=20&jump=${nextPayLoad}`)
    })

    prev.addEventListener('click', (e) => {
        console.log(nextPayLoad)
        if(nextPayLoad > 0) {
            nextPayLoad = nextPayLoad - 20;
            prevA.innerHTML = `<img style="width: 15px;" src="img/logo/preloader.gif"  alt="" />`;
            getCashOutRequestApi(`admin/api/walletInfo?perPage=20&jump=${nextPayLoad}`)
        }
    })



