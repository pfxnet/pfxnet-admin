
const loginBtn = document.querySelector('#loginbtn') || false;
console.log('open for business')

function loginUser(e){
    e.preventDefault();

    if(document.querySelector("#myEmailLogin").value === "") {
      alertify.set('notifier','position', 'top-center');
      return alertify.notify('Email field is required', 'error', 10) 
    }
    if(document.querySelector("#myPassLogin").value === "") {
      alertify.set('notifier','position', 'top-center');
      return alertify.notify('Passwor field is required', 'error', 10) 
    }
     loginBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...`
     const mail =  document.querySelector('#myEmailLogin').value
     const password = document.querySelector('#myPassLogin').value
     const data = {mail, password}

     http.postLogin('api/loginAdmin',data)
     .then((response)=>{
      console.log(response)
        if(response.error){
          loginBtn.innerHTML = `Login`
          alertify.set('notifier','position', 'top-center');
          return alertify.notify(`<p style="color: white;">${response.error}</p>`, 'error', 10) 
        }else{
          if(response.token){
            console.log(response)
            localStorage.setItem('@pfxnet-admin-token', JSON.stringify(response.token))
            localStorage.setItem('@pfxnet-admin-user', JSON.stringify(response.user))
            //location.replace(`http://localhost:7003/home`);
            // location.replace(`https://pfxnet-admin.herokuapp.com/home`);
            location.replace(`https://admin.pfxnet.com/home`);
          }
        } 
     })
     .catch((e)=>{
        console.log(e.message)
        loginBtn.innerHTML = `Login`
        alertify.set('notifier','position', 'top-center');
        return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10) 
    })
}

if(loginBtn) {
  loginBtn.addEventListener('click',loginUser)
}
 