
const addBtn = document.querySelector("#addBtn");
let file = null;
const uploadSelfieInput = document.querySelector("#uploadSelfieInput")
const imgPreview = document.querySelector("#imgPreview")

const addAnnouncementForm = document.querySelector("#addAnnouncement");

console.log(addAnnouncementForm)

function readFile(e) {
    console.log('read')
    file = e.currentTarget.files[0];
    console.log(file)
  
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onload = function () {
      imgPreview.src = reader.result
    };
  
    reader.onerror = function () {
      console.log(reader.error);
    };
  
  }

const addAnnouncementFunc = (e) => {
  e.preventDefault()

  var data = new FormData(addAnnouncementForm)
                 data.append('uuploadAnnouncementImage', file)
    console.log(data)

  addBtn.textContent = "Processing..."

  fetch('https://api.pfxnet.com/admin/api/uploadAnnouncement', {
    method: 'POST',
    headers: {
      'Authorization':`Bearer ${token}`
    },
    body: data
  }).then(
    response => response.json()
  ).then(
    result => {
        console.log(result)
        addBtn.textContent = "Add Announcement"
        if (result.error) {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${result.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">Announcement added successfully!</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }
  ).catch(     
    error => {
      addBtn.textContent = "Add Announcement"
      alertify.set('notifier', 'position', 'top-center');
      return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    }
  );
}


uploadSelfieInput.addEventListener("change", (e) => readFile(e));
addAnnouncementForm.addEventListener("submit", (e) => addAnnouncementFunc(e));