


//Trigger disbusrt btn from the cashOut api
const passBtn = document.querySelector("#passChangeBtn");
console.log("open")
const passwordChange = (e) => {
    e.preventDefault();

    const data = {
        userId: document.querySelector("#userId").value,
        newPassword: document.querySelector("#newPassword").value
    }

    console.log(data)

    console.log("Password")
    passBtn.textContent = 'Updating...'
    http.post('admin/api/passwordChange', data)
    .then(response => {
        passBtn.textContent = 'Update'
        console.log(response)
        if (response.error) {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">Password Changed Successfully!</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }).catch(err => {
        passBtn.textContent = 'Update'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


passBtn.addEventListener('click', (e) => passwordChange(e))






//Trigger disbusrt btn from the cashOut api
const userChangeBtn = document.querySelector("#changeUsernameBtn");

const userNameChange = (e) => {
    e.preventDefault();

    const data = {
        userId: document.querySelector("#userId_two").value,
        newUsername: document.querySelector("#username_two").value
    }

    console.log(data)

    passBtn.textContent = 'Processing...'
    http.post('admin/api/usernameChange', data)
    .then(response => {
        passBtn.textContent = 'Change Username'
        console.log(response)
        if (response.error) {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">Username Changed Successfully!</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }).catch(err => {
        passBtn.textContent = 'Change Username'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


userChangeBtn.addEventListener('click', (e) => userNameChange(e))









//Trigger disbusrt btn from the cashOut api
const changeEmailBtn = document.querySelector("#changeEmailBtn");

const userEmailChange = (e) => {
    e.preventDefault();

    const data = {
        userId: document.querySelector("#userId_three").value,
        mail: document.querySelector("#newEmail").value
    }

    console.log(data)

    changeEmailBtn.textContent = 'Processing...'
    http.post('admin/api/emailChange', data)
    .then(response => {
        changeEmailBtn.textContent = 'Change Email'
        console.log(response)
        if (response.error) {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">Email Changed Successfully!</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }).catch(err => {
        changeEmailBtn.textContent = 'Change Email'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


changeEmailBtn.addEventListener('click', (e) => userEmailChange(e))




//Trigger disbusrt btn from the cashOut api
const changePassNewBtn = document.querySelector("#passNewBtn");

const userPasswordChange = (e) => {
    e.preventDefault();

    const data = {
        userId: document.querySelector("#userId_four").value,
        newTransactionPassword: document.querySelector("#passwordNew").value
    }

    console.log(data)

    changePassNewBtn.textContent = 'Processing...'
    http.post('admin/api/transactionPasswordChange', data)
    .then(response => {
        changePassNewBtn.textContent = 'Change Password'
        console.log(response)
        if (response.error) {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">transaction Password Changed Successfully!</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }).catch(err => {
        changePassNewBtn.textContent = 'Change Password'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


changePassNewBtn.addEventListener('click', (e) => userPasswordChange(e))



//enableDisableUserBtn



//Trigger enableDisableUserBtn
const enableDisableUserBtn = document.querySelector("#enableDisableUserBtn");

const enableDisableUser = (e) => {
    e.preventDefault();

    const data = {
        userId: document.querySelector("#userId_for_disable").value
       
    }

    console.log(data)

    enableDisableUserBtn.textContent = 'Processing...'
    http.post('admin/api/enableDisableUser', data)
    .then(response => {
        // enableDisableUserBtn.textContent = 'Change Password'
        // console.log(response)
        if (response.error) {
             enableDisableUserBtn.textContent = 'Enable/Disable User'
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            enableDisableUserBtn.textContent = 'Done'
             document.querySelector("#userId_for_disable").value = ''
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">${response.success}</span>`, 'success', 10)     
            // setTimeout(() => {
            //     location.reload()
            // }, 2000);
        }
    }).catch(err => {
        enableDisableUserBtn.textContent = 'Enable/Disable User'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


enableDisableUserBtn.addEventListener('click', (e) => enableDisableUser(e))





