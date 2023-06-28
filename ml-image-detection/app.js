
const formUpload = document.querySelector('#form-upload')
const inputFile = document.querySelector('#form-upload input')
const previewImg = document.querySelector('form-upload img') 

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
  previewImg.src = url
}

inputFile.addEventListener('change', onUpload)