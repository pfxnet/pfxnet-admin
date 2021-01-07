


//Trigger disbusrt btn from the cashOut api

const disBurstApi = (e, x) => {
    console.log(e, x)
    console.log('party world')
    const transactionReference = e.target.dataset.transactionRef;

    console.log(transactionReference)
    const data = {transactionReference}

    http.post('api/disburseCashout', data)
    .then(response => {
        console.log(response)
        if (response.error) {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">Disburse done successfully!</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    })
    .catch(err => {
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}
