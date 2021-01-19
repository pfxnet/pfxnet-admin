
const uploadCart = document.querySelector("#uploadCart");
const uploadSelfieInput = document.querySelector("#uploadSelfieInput")
const imgPreview = document.querySelector("#imgPreview")
let file = null;

function readFile(e) {
    console.log('read')
    file = e.currentTarget.files[0];
    console.log(file)
  
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onload = function() {
      imgPreview.src = reader.result
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  
  }

const uploadCartFunc = (e) => {
    e.preventDefault()
    console.log("cart")
    console.log(file)
    
}


uploadSelfieInput.addEventListener("change", (e) => readFile(e));
uploadCart.addEventListener("click", (e) => uploadCartFunc(e));

