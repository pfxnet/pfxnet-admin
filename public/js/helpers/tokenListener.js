let token = null, user = null;

//Declare Api Instance for Fetch Api
let http = new EasyHTTP;

const getAdmin = JSON.parse(localStorage.getItem('@pfxnet-admin-token'))

if(getAdmin) {
    token = JSON.parse(localStorage.getItem('@pfxnet-admin-token'))
    user =  JSON.parse(localStorage.getItem('@pfxnet-admin-user'))
}else {
    location.replace(`http://localhost:7003`);
    // location.replace(`https://pfxnet-admin.herokuapp.com`);
    // location.replace(`https://admin.pfxnet.com`);
}
