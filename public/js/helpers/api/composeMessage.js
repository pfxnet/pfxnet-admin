
const sendMsgBtn = document.querySelector('#sendMsgBtn') || false;

console.log('Compose Message')

function composeMsgFunc(e){
    e.preventDefault();

     sendMsgBtn.innerHTML = `Sending...`;

     const to = document.querySelector('#userIdToMsg').value;
     const subject = document.querySelector('#subjectToMsg').value
     const message = document.querySelector('#messageToMsg').value


     const data = {subject, message, to}

     http.post('admin/api/composeMessage',data)
     .then((response)=>{
      console.log(response)
        if (!response.status) {
                    alertify.set('notifier', 'position', 'top-center');
                    return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">${response.message}</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
     })
     .catch((e)=>{
        console.log(e.message)
       sendMsgBtn.innerHTML = `Sending Message`;
        alertify.set('notifier','position', 'top-center');
        return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10) 
    })
}


sendMsgBtn.addEventListener('click', composeMsgFunc)

document.querySelector('#sendToAllCheck').addEventListener('change', (e)  => {
    if(document.querySelector('#sendToAllCheck').checked) {
        console.log('hhe')
        document.querySelector('#userIdToMsg').value = '';
        document.querySelector('#userIdBox').style.display = 'none';
        return;
    }

    document.querySelector('#userIdBox').style.display = 'block';
    
})

 