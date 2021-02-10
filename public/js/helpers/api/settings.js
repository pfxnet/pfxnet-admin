
const settingSearchInput = document.querySelector('#settingSearchInput');
const copyRefLink = document.querySelector('#copyRefLink');
const updateUsrBtn = document.querySelector("#update-user")

//Show Query
const settingNameShow = document.querySelector("#settingNameShow")
const settingEmailShow = document.querySelector("#settingEmailShow")
const settingPhoneShow = document.querySelector("#settingPhoneShow")
const settingJoined = document.querySelector("#settingJoined")
const settingReferralPackage = document.querySelector("#settingReferralPackage")
const settingReferralLink = document.querySelector("#settingReferralLink")

//Edit Query 
const settingFirstnameEdit = document.querySelector("#settingFirstnameEdit")
const settingLastnameEdit = document.querySelector("#settingLastnameEdit")
const settingPhoneEdit = document.querySelector("#settingPhoneEdit")
const settingDOBEdit = document.querySelector("#settingDOBEdit")
const settingGenderEdit = document.querySelector("#settingGenderEdit")
const settingAddressEdit = document.querySelector("#settingAddressEdit")
const settingCountryEdit = document.querySelector("#settingCountryEdit")
const settingStateEdit = document.querySelector("#settingStateEdit")
const settingCityEdit = document.querySelector("#settingCityEdit")
const settingUserIDEdit = document.querySelector("#settingUserIDEdit")
const settingBankEdit = document.querySelector("#settingBankEdit")
const settingAccountNumberEdit = document.querySelector("#settingAccountNumberEdit")

const findToEditUser = (e) => {
    e.preventDefault();
    console.log(e)
    const userInfo = e.currentTarget.value;
    console.log(userInfo)

    http.get(`api/searchUserProfile?search=${userInfo}`)
        .then((data) => {
            console.log(data)
            if (data) {
                //Show the User
                inputForUpdate(data)
                displayUserData(data)
                copyRefLink.style.display = 'block';
                updateUsrBtn.style.display = "block";
            }

        }).catch((err) => {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
        })
}

if (settingSearchInput) {
    settingSearchInput.addEventListener('keyup', (e) => findToEditUser(e))
}




const copyReferralLink = (e) => {
    e.preventDefault()
    var copyText = document.getElementById("settingReferralLink");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
    copyRefLink.textContent = 'Copied';
    copyRefLink.style.background = 'black';
}

if (copyRefLink) {
    copyRefLink.addEventListener('click', (e) => copyReferralLink(e))
}


const updateUsr = (e) => {
    console.log(e)
    console.log("open to play")
    const data = {
        firstname: settingFirstnameEdit.value, 
        lastname: settingLastnameEdit.value,
        phone: settingPhoneEdit.value,
        gender: settingGenderEdit.value, 
        address: settingAddressEdit.value,
        country: settingCountryEdit.value, 
        state: settingStateEdit.value,
        city: settingCityEdit.value
    }
    http.post('admin/api/updateUserProfile', data)
        .then(response => {
            console.log(response)
            if (response.error) {
                alertify.set('notifier', 'position', 'top-center');
                return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
            } else {
                alertify.set('notifier', 'position', 'top-center');
                alertify.notify(`<span style="color: white; font-weight: bold;">Disburse done successfully!</span>`, 'success', 10)
            }
        })
        .catch(err => {
            console.log(err)
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
        })
}

if(updateUsrBtn) {
    updateUsrBtn.addEventListener('click', (e) => updateUsr(e))
}

