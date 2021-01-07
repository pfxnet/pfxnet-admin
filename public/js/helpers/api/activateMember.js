
const activateMemberBtn = document.querySelector("#activateMemberBtn");

console.log(activateMemberBtn)

const activateMember = (e) => {
    e.preventDefault();
    const userID = document.getElementById('userID')
    const packageID = document.getElementById('packageID')

    console.log(e)
    if (userID.value == "") {
        alertify.set('notifier','position', 'top-center');
        return alertify.notify('<span style="color: white;">The user Id is needed to continue!</span>', 'error', 10) 
    }
    if (packageID.value == "#") {
        alertify.set('notifier','position', 'top-center');
        return alertify.notify('<span style="color: white;">Please select a package to continue!</span>', 'error', 10) 
    }

    const data = {pId: packageID.value, userId: userID.value}

    console.log(data)
    activateMemberBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...`;

    console.log(http)
    http.post('api/activateUser', data)
        .then(response => {
            userID.value = '';
            packageID.value = '#';
            activateMemberBtn.innerHTML = 'Activate';

            console.log(response)
            if (response.error) {
                activateMemberBtn.innerHTML = `Activate`
                alertify.set('notifier', 'position', 'top-center');
                return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
            } else {        
                alertify.alert(`<span style="text-align: center;font-weight: bold;">Successfull</span>', '<span style="text-align: center;font-weight: bold;">User is Activate.</span>`);
            }
        })
        .catch(err => {
            activateMemberBtn.innerHTML = 'Activate';
            console.log(err)
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
        })
}


activateMemberBtn.addEventListener("click", activateMember)