const http = new EasyHTTP


document.querySelector('#p35').addEventListener('click',monoPro)
function monoPro(e){
   // const origin = window.location.origin
    e.preventDefault();
   // document.querySelector('#payNow').textContent = 'MonoPro' 
   // window.location.href =origin+"/pay"

     http.get('https://api.flutterwave.com/v3/payments')
     .then((response)=>{
     window.location.href = response
     })
     .catch((err)=>{
     console.log(err)
    })
   
   
}

