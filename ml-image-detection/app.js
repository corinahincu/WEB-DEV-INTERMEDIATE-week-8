
const formUpload = document.querySelector('#form-upload')
const inputFile = document.querySelector('#form-upload input')
const previewImg = document.querySelector('#form-upload img') 

let model = null

cocoSsd.load().then(loadedModel => {
  model = loadedModel
  console.log(model)
})

const onUpload = (e) => {
  //alert()
  console.dir(inputFile)
  // 1. get the file info
  let fileInfo = inputFile.files[0]
  console.log(fileInfo)

  // 2. convert to address
  let url = URL.createObjectURL(fileInfo)
  console.log(url)

  // 3. put the address into the image.src attribute
  /* previewImg.src = "BONUS\machine-learning\ml-image-detection\samples\shutterstock_1269503761-1-700x466.jpg" */
  previewImg.src = url

  // 4. show the image element
  previewImg.style.display = "inline-block"

  // 5. detect objects in our image
  setTimeout(()=> {
    previewImg.width = previewImg.offsetWidth
    previewImg.height = previewImg.offsetHeight
    model.detect(previewImg).then(predictions => {
    console.log('Predictions: ', predictions)
    for(let i=0; i<predictions.length; i++){
      if(predictions[i].class === "cat" && predictions[i].score >= 0.5){
        alert("This image upload was canceled couse it contains cats")
      }
    }
  })

  },500)
}

inputFile.addEventListener('change', onUpload)