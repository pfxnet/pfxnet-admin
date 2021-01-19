const adminRegMemberBtn = document.querySelector("#adminRegMemberBtn")

const regUserPackage = document.querySelector("#regUserPackage")
const referralUserId = document.querySelector("#referralUserId")
const regFirstName = document.querySelector("#regFirstName")
const regLastName = document.querySelector("#regLastName")
const regUserName = document.querySelector("#regUserName")
const regUserEmail = document.querySelector("#regUserEmail")
const regUserPhone = document.querySelector("#regUserPhone")
const regUserPassword = document.querySelector("#regUserPassword")
const regUserConfirmPassword = document.querySelector("#regUserConfirmPassword")


const registerNewMemeber = (e) => {
    e.preventDefault();

    console.log('register Memebr');
    //confirm password check 
    if(regUserPassword.value !== regUserConfirmPassword.value) {
        alertify.set('notifier','position', 'top-center');
        return alertify.notify(`<p style="color: white;">Password does not match</p>`, 'error', 10) 
    }
    adminRegMemberBtn.innerHTML = `Processing...`
    const data = {   
        regUserPackage: regUserPackage.value,
        referrer : referralUserId.value,
        username: regUserName.value,
        firstname: regFirstName.value,
        lastname: regLastName.value,
        mail: regUserEmail.value,
        phone: regUserPhone.value,
        password: regUserPassword.value
    }
    console.log(data)

     http.post('api/registerUser',data)
     .then((response)=>{
      console.log(response)
        if(!response.success){
          adminRegMemberBtn.innerHTML = `Register User`
          alertify.set('notifier','position', 'top-center');
          return alertify.notify(`<p style="color: white;">${response}</p>`, 'error', 10) 
        }else{
          if(response.token){
            console.log(response)
          }
        } 
     })
     .catch((e)=>{
        console.log(e.message)
        adminRegMemberBtn.innerHTML = `Register User`
        alertify.set('notifier','position', 'top-center');
        return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10) 
    })


}


adminRegMemberBtn.addEventListener('click', (e) => registerNewMemeber(e))

