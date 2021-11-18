
const uploadCart = document.querySelector("#uploadCart");
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

const uploadCartFunc = (e) => {
  e.preventDefault()

  var data = new FormData()
      data.append('uploadedCart', file)

  uploadCart.textContent = "Processing Upload..."

  fetch('https://api.pfxnet.com/admin/api/uploadCart', {
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
        uploadCart.textContent = "Upload"
        alertify.alert(`<span style="text-align: center;font-weight: bold;">Successfull</span>',
           '<span style="text-align: center;font-weight: bold;">Cart image successfully Uploaded!.</span>`);
      }
    }
  ).catch(     
    error => {
      imgPreview.src = 'https://www.csklegal.com/wp-content/uploads/2014/07/no-image.png'
      uploadCart.textContent = "Upload"
      alertify.set('notifier', 'position', 'top-center');
      return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    }
  );
}


uploadSelfieInput.addEventListener("change", (e) => readFile(e));
uploadCart.addEventListener("click", (e) => uploadCartFunc(e));

const getAllCartImg = (url) => {
  console.log('getting all data from the Image API ')
  http.get(url)//perPage=20&jump=20
  .then(response => {
      if(response) {
        response.map(x => {
          cartFIleSpot.innerHTML += `
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 office-pad-bottom">
                <div class="personal-info-wrap">
                    <div>
                        <img src="${x.path}" alt="profile">
                    </div>
                    <div class="widget-text-box">
                        <!-- <h4>City Core Ltd</h4>
                        <p>Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. .</p> -->
                        <div class="text-right like-love-list">
                            <span data-del="${x._id}"  class="btn btn-success-supermanic delCartSel btn-md">Delete</span>
                        </div>
                    </div>
                </div>
            </div>`;
        })
      }

      deleteCart();
  }).catch(err => {
      console.log(err.message)
      alertify.set('notifier', 'position', 'top-center');
      return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10)
  })
}

getAllCartImg("admin/api/listCartsImages");

const deleteCart = () => {
  const getDelBtns = Array.from(document.querySelectorAll(".delCartSel"));
 
  getDelBtns.map(x => {
    x.addEventListener('click', (e) => {
      http.delete(`admin/api/deleteImage/${e.target.dataset.del}`)
          .then(response => {
              if (response.error) {
                  alertify.set('notifier', 'position', 'top-center');
                  return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
              } else {   
                  alertify.set('notifier', 'position', 'top-center');
                  alertify.notify(`<span style="color: white; font-weight: bold;">Cart Image deleted successfully!</span>`, 'success', 10)     
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
    })
  })
}