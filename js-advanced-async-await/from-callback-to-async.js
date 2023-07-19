

// ASYNC CODE EXECUTION

// 1. callbacks
// 2. promises
// 3. async/await


// AD ROTATOR

// "callbacks", "promises", "async/await"

// HW1 * : try to do this with a SINGLE .... set Interval + Array
// e considerat un bad approach
const showAd = () => {
    console.clear()
    console.log("callbacks")
    setTimeout(()=>{
        console.clear() 
        console.log("promises") 
        setTimeout(()=>{
            console.clear()
            console.log("async/await")
            setTimeout(()=>{
                console.clear()
            },2000)
        },2000)  
    },2000)
    
}

/*
    timer <-------- cb1
                        timer <-------- cb2
                                            timer <------ cb3
 */

let promiseShowAd1 = new Promise((resolve,reject)=>{
    console.clear()
    console.log("callbacks")
    setTimeout(()=>{
        console.clear() 
        resolve()
    },2000)
})


promiseShowAd1.then(()=>{
    console.log("promises")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.clear()
            resolve()
        },2000)
    })
}).then(()=>{
    console.log("async/await")
})

/*
    promise
            .then(...)
            .then(...)
            .then(...)
 */














