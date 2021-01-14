
//Show Query
const settingShowInput = document.querySelector('#settingShowIn');
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

//Edit Query 
const settingSearchInput = document.querySelector('#settingSearchInput');
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


const findToEditUser = (e) => {
    e.preventDefault();
    console.log(e)
    const userInfo = e.currentTarget.value;
    console.log(userInfo)

    http.get(`api/searchUserProfile?search=${userInfo}`)
    .then((data) => {
        console.log(data)
    
        if(data) {
            const {firstname, lastname, phone, gender, address, country, state, city} = data;
            
            
        }

    }).catch((err) => {
       alertify.set('notifier', 'position', 'top-center');
       return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })
}

settingSearchInput.addEventListener('keyup', (e) => findToEditUser(e))