
// ================== Logout User ==============================
const logOutAll = Array.from(document.querySelectorAll('.logoutAdminBtn')) || false;

function logOut(e) {
   e.preventDefault()
   http.get(`api/logOut`)
      .then((data) => {
         window.location.href = "https://localhost:8003"
         //window.location.href = "https://admin.pfxnet.com"
      }).catch((err) => {
         console.log(err)
      })
}

if(logOutAll) {
   logOutAll.map(x => {
      x.addEventListener('click', logOut)
   }) 
}


