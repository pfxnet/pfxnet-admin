
//Get the DOM
const totalMembers = document.querySelector("#totalMembers");
const totalRevenueReceived = document.querySelector("#totalRevenueReceived");
const totalCashPayout = document.querySelector("#totalCashPayout");
const affiliateCashoutRequest = document.querySelector("#affiliateCashoutRequest")
const commisionPayout = document.querySelector("#commisionPayout")
const totalUpgradeWallet = document.querySelector("#totalUpgradeWallet");
const totalIncentiveWallet = document.querySelector("#totalIncentiveWallet");
const totalLandPurchaseWallet = document.querySelector("#totalLandPurchaseWallet");
const totalPropertyPoolWallet = document.querySelector("#totalPropertyPoolWallet");

const insertCountToDOM = (data) => {
    totalMembers.textContent = data.totalMembers
    totalRevenueReceived.textContent = data.totalRevenueReceived;
    totalCashPayout.textContent = data.totalCashPayout;
    affiliateCashoutRequest.textContent = data.affiliateCashoutRequest;
    commisionPayout.textContent = data.affiliateCashoutRequest;
    totalUpgradeWallet.textContent = data.totalUpgradeWallet;
    totalIncentiveWallet.textContent = data.totalIncentiveWallet;
    totalLandPurchaseWallet.textContent = data.totalLandPurchaseWallet;
    totalPropertyPoolWallet.textContent = data.totalPropertyPoolWallet;
    insertNwReg(data.newRegistrations)
}

const topStat = () => {
    console.log('appStat')

    http.get(`api/allAdminCounts`)
       .then((data) => {
           console.log(data)
           insertCountToDOM(data)
       }).catch((err) => {
          alertify.set('notifier', 'position', 'top-center');
          return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
       })
}


topStat()