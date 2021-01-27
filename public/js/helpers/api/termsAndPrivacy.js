//Trigger disbusrt btn from the cashOut api
const termsBtn = document.querySelector("#termsBtn");

const termsSend = (e) => {
    e.preventDefault();

    const data = {
        termsAndCondition: document.querySelector("#termsText").value
    }

    console.log(data)

    termsBtn.textContent = 'Sending...'
    http.put('admin/api/updateTermsAndCondition', data)
    .then(response => {
        termsBtn.textContent = 'Send'
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
        termsBtn.textContent = 'Send'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


termsBtn.addEventListener('click', (e) => termsSend(e))


















const privacyBtn = document.querySelector("#privacyBtn");

const privacySend = (e) => {
    e.preventDefault();

    const data = {
        privacyPolicy: document.querySelector("#privacyText").value
    }

    console.log(data)

    privacyBtn.textContent = 'Sending...'

    http.put('admin/api/PrivacyPolicy', data)
    .then(response => {
        privacyBtn.textContent = 'Send'
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
        privacyBtn.textContent = 'Send'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


privacyBtn.addEventListener('click', (e) => privacySend(e))