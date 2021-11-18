const compensationBtn = document.querySelector("#compensationBtn");

const compensationSend = (e) => {
    e.preventDefault();

    const data = {
        referralPercentage: Number(document.querySelector("#newReferral").value)
    }

    console.log(data)

    compensationBtn.textContent = 'Updating...'

    http.put('admin/api/referralPercentage', data)
    .then(response => {
        compensationBtn.textContent = 'Updating'
        console.log(response)
        if (response.error) {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">${response.success}</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }).catch(err => {
        compensationBtn.textContent = 'Updating'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


compensationBtn.addEventListener('click', (e) => compensationSend(e))









const payoutSetBtn = document.querySelector("#payoutSetBtn");

const payoutSetSend = (e) => {
    e.preventDefault();

    const data = {
        userId: document.querySelector("#payoutSetUserId").value,
        amount: document.querySelector("#payoutSetAmount").value,
        reason: document.querySelector("#payoutSetReason").value
    }

    console.log(data);

    payoutSetBtn.textContent = 'Updating...'

    http.put('admin/api/payoutSetting', data)
    .then(response => {
        payoutSetBtn.textContent = 'Updating'
        console.log(response)
        if (response.error) {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">${response.success}</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }).catch(err => {
        payoutSetBtn.textContent = 'Updating'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


payoutSetBtn.addEventListener('click', (e) => payoutSetSend(e))