// io - input output
const pGetNumbers = (size = 10) => { 
    
    return new Promise((resolve, reject)=>{
    
    let numbers = []

    setTimeout(()=>{
        while(numbers.length<size){
            numbers.push( Math.ceil(  -5 +  Math.random() * 10) )
    }
    resolve(numbers)
    }, Math.random() * 1000)
})
}

// process
const pMaxNumber = (numbers) => {

    return new Promise((resolve,reject)=>{
    
    let maxNumber = numbers[0]
    setTimeout(()=>{
        for(let i=0; i<numbers.length; i++){
        if(numbers[i]>maxNumber){
            maxNumber = numbers[i]
        }
    }
    resolve(maxNumber)  
    },Math.random() * 1000)
})
}
// render
const renderNumber = (number) => {
    return new Promise((resolve,reject)=>{
        let result = ``
        setTimeout(()=>{
        result = `{number:${number}}`
        cb(result)
    }, Math.random() * 1000)
    })

}

///////////////////////////////////////////

// declarative coding
//1.
/* pGetNumbers(5)
    .then((numbers)=>{
        return pMaxNumber(numbers)
    })
    .then((result)=> console.log(result)) */

function execute () {

    pGetNumbers(5)
    .then((numbers)=>{
        return pMaxNumber(numbers)
    })
    .then((max_number)=> {
        return renderNumber(max_number)
    })
    .then((result)=>{
        console.log(result)
    })

}

