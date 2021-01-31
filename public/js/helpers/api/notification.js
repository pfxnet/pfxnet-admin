
const addBtn = document.querySelector("#addBtn");
const addNotificationForm = document.querySelector("#addNotification");

console.log(addNotificationForm)

const addNotificationFunc = (e) => {
  e.preventDefault()

  var data = new FormData(addNotificationForm)

  addBtn.textContent = "Processing..."

  fetch('https://api.pfxnet.com/admin/api/uploadNotification', {
    method: 'POST',
    headers: {
      'Authorization':`Bearer ${token}`
    },
    body: data
  }).then(
    response => response.json()
  ).then(
    result => {
        addBtn.textContent = "Add Notification"
        if (response.error) {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">Notification added successfully!</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }
  ).catch(     
    error => {
      addBtn.textContent = "Add Notification"
      alertify.set('notifier', 'position', 'top-center');
      return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    }
  );
}

addNotificationForm.addEventListener("submit", (e) => addNotificationFunc(e));