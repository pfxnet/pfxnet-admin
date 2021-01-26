


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
        userId: document.querySelector("#userId@2").value,
        newusername: document.querySelector("#username@2").value
    }

    console.log(data)

    console.log("Password")
    passBtn.textContent = 'Processing...'
    http.post('admin/api/passwordChange', data)
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









