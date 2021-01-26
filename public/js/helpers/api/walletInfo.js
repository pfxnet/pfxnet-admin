

// allCredits: 1247
// allTransactionDetails: {docs: Array(20), totalDocs: 1257, offset: 0, limit: 20, totalPages: 63, …}
// allTransactions: 1257
// balanceAmount: "NGN 3,125,760.00"
// totalCredit: "NGN 3,685,200.00"
// totalDebit: "NGN 559,440.00"

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
                console.log(response)
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