

console.log('page middleware')


console.log(priviledges)


const getUrlPath = window.location.pathname.split("/")[1];

console.log(getUrlPath)

Object.keys(priviledges).map((key, index) => {
    console.log(key, priviledges[key])
    if(getUrlPath === key && priviledges[key] === false) {
        alert("Ooops you are not permiited to access this page, please contact super admin.")
        location.replace('home');
        return false;
    } 
    console.log('permitted')
});