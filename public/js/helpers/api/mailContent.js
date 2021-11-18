


//Trigger disbusrt btn from the cashOut api
const welcomeMailBtn = document.querySelector("#welcomeMailBtn");

const welcomeMailSend = (e) => {
    e.preventDefault();

    const data = {
        welcomeMail: document.querySelector("#welcome-mail").value
    }

    console.log(data)

    welcomeMailBtn.textContent = 'Sending...'
    http.put('admin/api/updateWelcomeMailTemplate', data)
    .then(response => {
        welcomeMailBtn.textContent = 'Send'
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
        welcomeMailBtn.textContent = 'Send'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


welcomeMailBtn.addEventListener('click', (e) => welcomeMailSend(e))





//Trigger disbusrt btn from the cashOut api
const incentiveMailBtn = document.querySelector("#incentiveMailBtn");

const incentiveMailSend = (e) => {
    e.preventDefault();

    const data = {
        incentiveMail: document.querySelector("#incentive-mail").value
    }

    console.log(data)

    incentiveMailBtn.textContent = 'Sending...'
    http.put('admin/api/updateincentiveMailTemplate', data)
    .then(response => {
        incentiveMailBtn.textContent = 'Send'
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
        incentiveMailBtn.textContent = 'Send'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


incentiveMailBtn.addEventListener('click', (e) => incentiveMailSend(e))



//Trigger disbusrt btn from the cashOut api
const cashOutRequestMailBtn = document.querySelector("#cashOutRequestMailBtn");

const cashOutRequestMailSend = (e) => {
    e.preventDefault();

    const data = {
        cashoutRequestMail: document.querySelector("#cashOutRequest-mail").value
    }

    console.log(data)

    cashOutRequestMailBtn.textContent = 'Sending...'
    http.put('admin/api/updateCashoutMailTemplate', data)
    .then(response => {
        cashOutRequestMailBtn.textContent = 'Send'
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
        cashOutRequestMailBtn.textContent = 'Send'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


cashOutRequestMailBtn.addEventListener('click', (e) => cashOutRequestMailSend(e))



//Trigger disbusrt btn from the cashOut api
const cashoutDisburstmentMailBtn = document.querySelector("#cashoutDisburstmentMailBtn");

const cashoutDisburstmentMailSend = (e) => {
    e.preventDefault();

    const data = {
        cashoutDisbursementMail: document.querySelector("#cashoutDisburstment-mail").value
    }

    console.log(data)

    cashoutDisburstmentMailBtn.textContent = 'Sending...'
    http.put('admin/api/updateCashoutDisbursementTemplate', data)
    .then(response => {
        cashoutDisburstmentMailBtn.textContent = 'Send'
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
        cashoutDisburstmentMailBtn.textContent = 'Send'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


cashoutDisburstmentMailBtn.addEventListener('click', (e) => cashoutDisburstmentMailSend(e))





