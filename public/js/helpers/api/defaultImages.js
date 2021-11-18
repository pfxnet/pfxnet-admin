

const defaultImages = Array.from(document.querySelectorAll(".default-images"))
let file = null;
let packageId = null;
let imgPreview = null;
let inputElem = null;
const allImages = Array.from(document.querySelectorAll(".image-preview"))
const allBtns = Array.from(document.querySelectorAll(".upload-default-img"))

function readFile(e) {
  inputElem = e.currentTarget;
  file = e.currentTarget.files[0];
  packageId = e.currentTarget.dataset.package;
  
  imgPreview = document.querySelector(`#package${packageId}`)
  uploadFileBtn = document.querySelector(`#packageBtn${packageId}`)

  allImages.map(x => {
    x.src = "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
  });

  allBtns.map(x => {
    x.style.display = 'none';
  });

  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    imgPreview.src = reader.result
    inputElem.style.display = 'none'
    uploadFileBtn.style.display = 'block';
  };

  reader.onerror = function () {
    console.log(reader.error);
  };

}

const uploadDefaultImage = (e) => {
    e.preventDefault();

    var data = new FormData()
    data.append('package', packageId)
    data.append('uploadDefaultImage', file)

        uploadFileBtn.textContent = "Processing Upload..."

        fetch('https://api.pfxnet.com/admin/api/uploadUsersDefaultImage', {
        method: 'POST',
        headers: {
            'Authorization':`Bearer ${token}`
        },
        body: data
        }).then(
        response => response.json()
        ).then( result => {
            console.log(result)
            if(result.success) {
            imgPreview.src = 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png'
            uploadFileBtn.textContent = "Upload"
            uploadFileBtn.style.display = 'none';
            inputElem.style.display = 'block'
            inputElem.value = ""
            alertify.alert(`<span style="text-align: center;font-weight: bold;">Successfull</span>',
                '<span style="text-align: center;font-weight: bold;">${result.success}</span>`);
            }
        }
        ).catch( error => {
            imgPreview.src = 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png'
            uploadFileBtn.textContent = "Upload"
            uploadFileBtn.style.display = 'none';
            inputElem.style.display = 'block'
            inputElem.value = ""
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
        }
        );
}

defaultImages.map(x => {
    x.addEventListener('change', (e) => readFile(e))
});
allBtns.map(x => {
    x.addEventListener("click", (e) => uploadDefaultImage(e));
  });



