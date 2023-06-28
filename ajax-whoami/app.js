const form = document.querySelector('#form-name')

const input = form.children[2].firstElementChild
const output = form.children[3]

/* input.addEventListener('keydown', () => {}) */
//keydown nu se duce sus pe ierarhie

form.addEventListener('submit', (e)=> { 
    e.preventDefault()
  // ii spunem browserul sa nu faca refresh, prevent form admission
/*   console.log("The browser tries to submit this form")
  console.log(e) */
  // alert("The browser tries to submit this form") 
/*   e.preventDefault()
  // ii spunem browserul sa nu faca refresh */

  //let name = input.value
  // HW1 : validate / sanitize the INPUT:
  //       * dont sent empty names
  //       * remove extra spaces
   let name = input.value.trim(); // remove extra spaces 

  if (name === '') {
    //don;t sent empty names 
    output.innerHTML = 'Please enter a valid name';
    return; // se opreste executia
  }

  console.log(name)
  
  // AJAX
  // HW2 : check when empty response and show a corresponding message
  const xhr = new XMLHttpRequest()
  xhr.open("GET",`https://api.nationalize.io/?name=${name}` )
  xhr.send()

  xhr.onload = () => {
    let response = xhr.responseText
    let data = JSON.parse(response) // fiind un string, trebuie sa il decodam in asa mod < -
    /* console.log(response) */ 
    /* console.log(data) */
    /* let nationality = data.country[0].country_id
    console.log(nationality)

    output.innerHTML = `You are most probably from <strong> ${nationality} </strong>` */

    if (data.country.some((c) => !c.country_id)) {
    output.innerHTML = "No nationality information available!";
  } else {
    let nationality = data.country[0].country_id;
    output.innerHTML = `You are most probably from <strong>${nationality}</strong>`;
  }
  }
  
  //week8 video 501 - 1h6min explicatie la denumirea xhr



  // 1. send request(name) - > API ( site :https://apipheny.io/free-api/)
  // 2. wait for response(json) < - API 
  // 3. extract data 
  // 4. display info

}) 

// URL query parameters - > cand un sistem asteapta ca tu sa ii transmiti datele prin url (?name=)
// req -- > GET https://api.nationalize.io/?name={putNameHere}
// res < -- JSON string
// intram in inspect si in network, il putem vedea ca obiect, nu ca string, e mai usor de citit
// *apasam disable cache in network din cauza ca in acest mod vine direct din server

/* document.body.addEventListener('keydown', (e)=>{
  e.preventDefault()
}) // am interzis orice taster ca browserul sa actioneze

window.addEventListener('contextmenu', (e)=>{
  e.preventDefault()
}) // nu pot sa fac click dreapta  */




// 1.user - > hits ENTER (input) 'keydown'
// 2.Browser listens to this, captures the event
// 3.searches for the FORM the input is in
// 4.emits a 'submit' event on this form