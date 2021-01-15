
const settingSearchInput = document.querySelector('#settingSearchInput');
const copyRefLink = document.querySelector('#copyRefLink');

//Show Query
const settingNameShow = document.querySelector("#settingNameShow")
const settingEmailShow = document.querySelector("#settingEmailShow")
const settingPhoneShow= document.querySelector("#settingPhoneShow")
const settingJoined = document.querySelector("#settingJoined")
const settingReferralTitle = document.querySelector("#settingReferralTitle")
const settingReferralLink = document.querySelector("#settingReferralLink")

console.log(copyRefLink)

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


const findToEditUser = (e) => {
    e.preventDefault();
    console.log(e)
    const userInfo = e.currentTarget.value;
    console.log(userInfo)

    http.get(`api/searchUserProfile?search=${userInfo}`)
    .then((data) => {
        console.log(data)
        if(data) {
            //Show the User
            inputForUpdate(data)
            displayUserData(data)
            copyRefLink.style.display = 'block';
            
        }

    }).catch((err) => {
       alertify.set('notifier', 'position', 'top-center');
       return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })
}

settingSearchInput.addEventListener('keyup', (e) => findToEditUser(e))



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

//   function myFunction(e) {
//       e.preventDefault()
//     var copyText = document.getElementById("myInput");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
//   }

copyRefLink.addEventListener('click', (e) => copyReferralLink(e))