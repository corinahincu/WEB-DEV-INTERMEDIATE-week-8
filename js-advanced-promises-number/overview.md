

* getNumbers --> maxNumber --> renderNumber
             --> minNumber -->
am facut legutura asincrona







const cbComponenent = (success, error) => {
  ...
  if(isError){
    error(..)
  } else{
    success(..)
  }
}


ce is promise ?
initial a fost creata ca biblioteca separata,dar s-a dovedit de a fi intr-atit de buna ca a fost implementata in js.

- Promise este o clasa.

- wrapper - iti permite sa creezi un obiect ambalat, in care tu pui blocul de cod asincron, si are grija sa faca ce are de facut cand se incheie acest bloc, el va avea grija sa iti execute codul care urmeaza dupa ce se executa acest bloc de cod. Tot utilieaza cb dar nu este specificat acest termen

Promise (wrapper) {                < -------- state: pending | fullfilled | rejected 
           |
           v
        (resolve, reject)
        
    block of async code {
        ...
        ...
        ...
        if(ok) resolve()
        if(err) reject()
    
    }
}


