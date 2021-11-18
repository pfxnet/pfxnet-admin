const sendMsgBtn = document.querySelector('#sendMsgBtn') || false;
const priviInput = Array.from(document.querySelectorAll('.privi')) || false;
const priviInputCheck = Array.from(document.querySelectorAll('.adminCheck')) || false;
const allBtn = document.querySelector('#all') || false;

allBtn.addEventListener('change', (e) => {
    console.log(e, e.currentTarget.checked)
    if(e.currentTarget.checked) {
        priviInputCheck.map((x,i) =>  {
            x.style.display = 'none';
            priviInput[i].checked = true;
        });
        return;
    }
    priviInputCheck.map((x,i) => {
        x.style.display = 'block';
        priviInput[i].checked = false;
    });
})

function composeMsgFunc(e){
    e.preventDefault();

     sendMsgBtn.innerHTML = `Sending...`;
    
     const useremail = document.querySelector('#emailAdminAdd').value;

     const data = {useremail}

     priviInput.map(x => {
         const form = x.dataset.privi;
         console.log(form)
         
         Object.assign(data, {[form]: x.checked});
     })


     http.post('admin/api/makeAdmin',data)
     .then((response)=>{
      console.log(response)
        if (!response.success) {
                    alertify.set('notifier', 'position', 'top-center');
                    return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">Admin Privilege added successfully</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
     })
     .catch((e)=>{
       sendMsgBtn.innerHTML = `Update`;
        alertify.set('notifier','position', 'top-center');
        return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10) 
    })
}


sendMsgBtn.addEventListener('click', composeMsgFunc)