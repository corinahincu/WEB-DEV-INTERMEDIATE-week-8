// xhr - > vom intalni des acest termen care se refera la ajax, xhr - > XML Http Request

const loadData = (cb) => {
  let xhr = new XMLHttpRequest()

xhr.open(
  "GET", 
  "https://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=508f577de881fb89b274f2081631ab7b"
  )

xhr.send()

xhr.onload = () => {
  let data = JSON.parse(xhr.responseText)
  //console.log(data) // json string -- > js
  //console.log(data.main.temp)
  //render(data)
  cb(data)
}
// in asa caz apar datele, prin onload afirmam ca cand se vor incarca datele sa fie afisate

//console.log(xhr.responseText) 
// nu vedem raspuns in console.log, din cauza ca este programare asincrona, din cauza ca datele de la send inca nu au venit

// * atentie cand lucram cu loop

}

const render = (data) =>{
  console.log(data)
}

loadData(render)


/* 
  CACHE :
    * speed
    * near consumption place
    * lower traffic
    * lower resource consumption
  
  Browserul are mecanism de cache, dar by default le ia din server, nu le pune in cache. De ce? Probabil din cauza ca browserul by default atunci cand lucreaza cu fetch/ajax si formatul json, nu ia datele din cache.
  Imaginele ar trebui sa devina din cache, in cazul lui open weather , le ia direct din server. Probabil in cazul site-ului acesta, nu le ia din cache.

  -----------------------------
  CONSUMER ---REQ--- > [CACHE]|------------ REQ -------- > PROVIDER (pot fi baze de date)
            resource2     v^  |
                    resource1 |
                              | - cache hit / cache miss (v504 min 20)
  -----------------------------
  sa spunem ca consumatorul cere resursa 1, cache-ul se intrapune, face o verificare rapida in memoria locala, atunci el nu transmite mai departe requestul, dar substituie raspunsul care ar fi trebuit sa vina de dincolo, il trimite direct consumatorului
  
  
  cache-ul este realizat sub paternul proxy
  * browserul are 2 macanisme de local storage, le putem gasi in application
  * storage cele mai importante :
    - local storage 
    - session storage 
    - cookies
  au in comun servesc pentru a face aplicatii mai bine optimizate, in special comunicarea cu back end, aplicatii mai user friendly, in alte cuvinte, ajuta aplicatia sa se adapteze dupa client 
  local storage si session storage sunt disponibile direct din browser, doar js poate sa le acceseze, in schimb cookies poate fi accesat si din server, si din back end si front end, asta inseamna ca ele sunt mai vulnerabile.
  cookies au mai putin storage.
 */
