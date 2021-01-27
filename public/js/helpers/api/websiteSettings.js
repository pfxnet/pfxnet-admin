console.log("websiteSettings")


const generalBtn = document.querySelector("#generalBtn");

const generalSend = (e) => {
    e.preventDefault();

    const data = {
        companyName: document.querySelector("#company-name").value,
        companyEmail: document.querySelector("#company-email").value,
        companyPhone: document.querySelector("#company-phone").value,
        companyAddress: document.querySelector("#company-address").value
    }

    console.log(data)

    generalBtn.textContent = 'Updating...'

    http.put('admin/api/updateGeneralInfo', data)
    .then(response => {
        generalBtn.textContent = 'Update'
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
        generalBtn.textContent = 'Update'
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


generalBtn.addEventListener('click', (e) => generalSend(e))