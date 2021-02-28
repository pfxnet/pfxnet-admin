
const imgPreviewDoc = document.querySelector("#imgPreviewUser")
console.log(imgPreviewDoc)

const addBtnDoc = Array.from(document.querySelectorAll(".addBtnDoc"));
const uploadSelfieInputDoc = document.querySelector("#uploadSelfieInputDoc")
const titleDoc = document.querySelector("#titleDoc")

const uploadSelfieInputUser = document.querySelector("#uploadSelfieInputUser")
const titleUser = document.querySelector("#titleUser")

const domInput = document.querySelector("#dom-input-doc")

let file = null;

function readFile(e) {
  console.log('read')
  file = e.currentTarget.files[0];
  console.log(file)

  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    imgPreviewDoc.src = reader.result
  };

  reader.onerror = function () {
    console.log(reader.error);
  };

}

const uploadCartFunc = (e, btn, title, url, fileInput) => {
  e.preventDefault()

  console.log(e.currentTarget)

  var data = new FormData()
      data.append('title', title)
      data.append(fileInput, file)

      for (var value of data.values()) {
        console.log(value);
     }

      btn.textContent = "Processing Upload..."

  fetch(url, {
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
        btn.textContent = "Upload"
      if (result.error) {
          alertify.set('notifier', 'position', 'top-center');
          return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
      } else {   
          alertify.set('notifier', 'position', 'top-center');
          alertify.notify(`<span style="color: white; font-weight: bold;">Document added successfully!</span>`, 'success', 10)     
          setTimeout(() => {
              location.reload()
          }, 2000);
      }
    }
  ).catch(error => {
    btn.textContent = "Upload"
      alertify.set('notifier', 'position', 'top-center');
      return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    }
  );
}


uploadSelfieInputDoc.addEventListener("change", (e) => readFile(e));
addBtnDoc[0].addEventListener("click", (e) => uploadCartFunc(e, addBtnDoc[0], titleDoc.value, 'https://api.pfxnet.com/admin/api/uploadDocument', 'uploadDocument'));


uploadSelfieInputUser.addEventListener("change", (e) => readFile(e));
addBtnDoc[1].addEventListener("click", (e) => uploadCartFunc(e, addBtnDoc[1], titleUser.value, 'https://api.pfxnet.com/admin/api/uploadDocumentImage', 'uploadDocumentImage'));






//Upload Videooo Url to server

const uploadVidBtn = document.querySelector('#uploadVidBtn')

const uploadVidApi = (e) => {
  console.log('party world')

  const data = {
    link: document.querySelector("#vidUrl").value,
    title: document.querySelector("#vidTitle").value
  }

  console.log("great work")
  http.post('admin/api/uploadMarketingVideo', data)
  .then(response => {
      console.log(response)
      if (response.error) {
          alertify.set('notifier', 'position', 'top-center');
          return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
      } else {   
          alertify.set('notifier', 'position', 'top-center');
          alertify.notify(`<span style="color: white; font-weight: bold;">Video url uploaded successfully!</span>`, 'success', 10)     
          setTimeout(() => {
              location.reload()
          }, 2000);
      }
  })
  .catch(err => {
      console.log(err)
      alertify.set('notifier', 'position', 'top-center');
      return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
  })

}

uploadVidBtn.addEventListener('click', (e) => uploadVidApi(e))








const getAllDoc = (url) => {
  domInput.innerHTML = '';
  domInput.innerHTML += `
    <tr>
        <th>#</th>
        <th>Owner</th>
        <th>Category</th>
        <th>Size</th>
        <th>View</th>
        <th>Upload Date</th>
        <th>Action</th>
    </tr>`;

        http.get(url)//perPage=20&jump=20
        .then(response => {
          console.log(response)

      
  
      if(response) {
        response.map((x,i) => {

        domInput.innerHTML += `
          
        <tr>
            <td>${i+1}</td>
            <td>${x.owner}</td>
            <td>${x.category}</td>
            <td>${x.size}</td>
            <td>
                <a href="${x.path}" target="_blank">View File</a>
            </td>
            <td>${x.createdAt}</td>
            <td>
                <button data-toggle="tooltip" title="Trash" class="pd-setting-ed delCartSel">
                <a href="${x.file}" title="Document" download>
                   <i class="fa fa-download"></i>
                </a>
                </button>
                <button data-del="${x._id}" data-toggle="tooltip" title="Trash" class="pd-setting-ed delCartSel"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </td>
        </tr>
              
           `;
   
        })

        const getDelBtns = Array.from(document.querySelectorAll(".delCartSel"));
        getDelBtns.map(x => { 
          x.addEventListener('click', (e) => deleteCart(e))
        })
      }

  }).catch(err => {
      console.log(err.message)
      alertify.set('notifier', 'position', 'top-center');
      return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10)
  })
}

getAllDoc("admin/api/getDocumentImages");



const deleteCart = (e) => {
      console.log(e)
    http.delete(`admin/api/deleteImage/${e.currentTarget.dataset.del}`)
        .then(response => {
            if (response.error) {
                alertify.set('notifier', 'position', 'top-center');
                return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
            } else {   
                alertify.set('notifier', 'position', 'top-center');
                alertify.notify(`<span style="color: white; font-weight: bold;">Document deleted successfully!</span>`, 'success', 10)     
                setTimeout(() => {
                    location.reload()
                }, 2000);
            }
        })
        .catch(err => {
            console.log(err)
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
        })
  }


// function download_file(fileURL, fileName) {
//   var link = document.createElement('a');
//   link.href = fileURL;
//   link.download = fileName;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }


    
// const toBase64 = file => new Promise((resolve, reject) => {
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => resolve(reader.result);
//   reader.onerror = error => reject(error);
// });


// async function createFile(fileUrl){
// let response = await fetch(fileUrl);
// let data = await response.blob();
// let metadata = {
//   type: 'image/jpeg'
// };

// console.log(data)
// let file = new File([data], "test.jpg", metadata);
// // ... do something with the file or return it
// let result = await toBase64(file)
// console.log(result)
// return 'read';
// }


