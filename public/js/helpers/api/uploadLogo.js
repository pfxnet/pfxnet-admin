const uploadLogoBtn = document.querySelector("#uploadLogoBtn");
const uploadSelfieInput = document.querySelector("#uploadSelfieInput")
const imgPreview = document.querySelector("#imgPreview")
let file = null;
const cartFIleSpot = document.querySelector("#cart-image-view")

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

const uploadLogoFunc = (e) => {
  e.preventDefault()

  var data = new FormData()
      data.append('uploadedCart', file)

  uploadLogoBtn.textContent = "Processing Upload..."

  fetch('https://api.pfxnet.com/admin/api/uploadWebsiteLogo', {
    method: 'POST',
    headers: {
      'Authorization':`Bearer ${token}`
    },
    body: data
  }).then(
    response => response.json()
  ).then(
    success => {
      if(success) {
        imgPreview.src = 'https://www.csklegal.com/wp-content/uploads/2014/07/no-image.png'
        uploadLogoBtn.textContent = "Upload"
        alertify.alert(`<span style="text-align: center;font-weight: bold;">Successfull</span>',
           '<span style="text-align: center;font-weight: bold;">Logo image successfully Uploaded!.</span>`);
      }
    }
  ).catch(     
    error => {
      imgPreview.src = 'https://www.csklegal.com/wp-content/uploads/2014/07/no-image.png'
      uploadLogoBtn.textContent = "Upload"
      alertify.set('notifier', 'position', 'top-center');
      return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    }
  );
}


uploadSelfieInput.addEventListener("change", (e) => readFile(e));
uploadLogoBtn.addEventListener("click", (e) => uploadLogoFunc(e));