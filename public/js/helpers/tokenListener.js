let token = null, user = null, priviledges = null;

//Declare Api Instance for Fetch Api
let http = new EasyHTTP;

const getAdmin = JSON.parse(localStorage.getItem('@pfxnet-admin-token')) || false;

if(getAdmin === false && window.location.pathname !== '/') {
    //location.replace(`http://localhost:8003`);
    // location.replace(`https://pfxnet-admin.herokuapp.com`);
   location.replace(`https://admin.pfxnet.com`);
}

if(getAdmin) {
	   
    token = JSON.parse(localStorage.getItem('@pfxnet-admin-token'))
    user =  JSON.parse(localStorage.getItem('@pfxnet-admin-user'))
    priviledges =   JSON.parse(localStorage.getItem('@pfxnet-admin-priviledges'))
    adminNotification =   JSON.parse(localStorage.getItem('@pfxnet-admin-notification'))
    
     document.querySelector("#notification").style.background = 'skyblue';
     document.querySelector("#notification").innerHTML = adminNotification;
     
   
}


