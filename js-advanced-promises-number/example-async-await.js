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
    }, Math.random() * 1000)
    })

}

///////////////////////////////////////////

// declarative coding

// 2. async function - iti permite sa scrii un cod asincron care seamana cu cod sincron, ai flexibilitate de a scrie si cod sincron si asincron, dar este citit ca cod asincron
async function execute () {

    let numbers = await pGetNumbers(5)
    let max_number = await pMaxNumber(numbers)
    let result = await renderNumber(max_number)
    console.log(result)

}

