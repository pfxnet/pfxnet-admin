

// ================== Logout User ==============================
const logOutAll = document.querySelector('.logoutAdminBtn') || false;



function logOut(e) {
   e.preventDefault()
   http.get(`${api_origin}/api/logOut`)
      .then((data) => {
         window.location.href = "https://localhost:8003"
         // window.location.href = "https://admin.pfxnet.com"
      })
      .catch((err) => {
         console.log(err)
      })
}

logOutAll.map(x => {
   x.addEventListener('click', logOut)
})



