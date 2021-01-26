
const addFund = document.querySelector("#addFund");
const addFundFunc = (e) => {
    e.preventDefault()
    console.log(e)

    var formData = new FormData(addFund)
    const userId =  formData.get('userID')
    const amount = Number(formData.get('amount'))
    const reason = formData.get('reason')
    const btn = document.querySelector('#addFundBtn')
    btn.value = "Processing...";

    const data = {
        userId, amount, reason
    }

    http.post('admin/api/addFunds',data)
        .then((response)=>{
        btn.value = "Add Fund";
        console.log(response)
        if(!response.success){
            alertify.set('notifier','position', 'top-center');
            return alertify.notify(`<p style="color: white;">${response}</p>`, 'error', 10) 
        }
        alertify.set('notifier', 'position', 'top-center');
        alertify.notify(`<span style="color: white; font-weight: bold;">Fund Added to User Successfully!</span>`, 'success', 10)     
        })
        .catch((e)=>{
        console.log(e.message)
        btn.value = "Add Fund";
        alertify.set('notifier','position', 'top-center');
        return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10) 
    })

}


addFund.addEventListener("submit", (e) => addFundFunc(e))













const deductFund = document.querySelector("#deductFund");

const deductFundFunc = (e) => {
    e.preventDefault()
    console.log(e)

    var formData = new FormData(deductFund)
    const userId =  formData.get('userID')
    const amount = Number(formData.get('amount'))
    const reason = formData.get('reason')
    const btn = document.querySelector('#deductFundBtn')
    btn.value = "Processing...";

    const data = {
        userId, amount, reason
    }

    http.post('admin/api/deductFunds', data)
        .then((response)=>{
        btn.value = "Deduct Fund";
        console.log(response)
        if(!response.success){
            alertify.set('notifier','position', 'top-center');
            return alertify.notify(`<p style="color: white;">${response}</p>`, 'error', 10) 
        }
        alertify.set('notifier', 'position', 'top-center');
        alertify.notify(`<span style="color: white; font-weight: bold;">Fund Deducted From User Successfully!</span>`, 'success', 10)     
        })
        .catch((e)=>{
        console.log(e.message)
        btn.value = "Deduct Fund";
        alertify.set('notifier','position', 'top-center');
        return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10) 
    })

}


deductFund.addEventListener("submit", (e) => deductFundFunc(e))










const transferFund = document.querySelector("#transferFund");

const transferFundFunc = (e) => {
    e.preventDefault()
    console.log(e)

    var formData = new FormData(transferFund)
    const from =  formData.get('userIdFrom')
    const to =  formData.get('userIdTo')
    console.log(from, to)
    const amount = Number(formData.get('amount'))
    const reason = formData.get('reason')
    const btn = document.querySelector('#transferFundBtn')
    btn.value = "Processing...";

    const data = {
       from, to, amount, reason
    }

    http.post('admin/api/transferFunds', data)
        .then((response)=>{
        btn.value = "Transfer Fund";
        console.log(response)
        if(!response.success){
            alertify.set('notifier','position', 'top-center');
            return alertify.notify(`<p style="color: white;">${response.error}</p>`, 'error', 10) 
        }
        alertify.set('notifier', 'position', 'top-center');
        alertify.notify(`<span style="color: white; font-weight: bold;">${response.success}</span>`, 'success', 10)     
        })
        .catch((e)=>{
        console.log(e.message)
        btn.value = "Transfer Fund";
        alertify.set('notifier','position', 'top-center');
        return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10) 
    })

}


transferFund.addEventListener("submit", (e) => transferFundFunc(e))