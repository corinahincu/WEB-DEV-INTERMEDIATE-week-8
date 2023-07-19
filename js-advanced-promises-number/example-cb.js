// io - input output
const getNumbers = (cb, size = 10) => {
    let numbers = []

    setTimeout(()=>{
        while(numbers.length<size){
            // HW2 setInterval() prin push - > exemplu cu animatia
        numbers.push( Math.ceil(  -5 +  Math.random() * 10) )
    }
    cb(numbers)
    }, Math.random() * 300)
    
    /* return numbers */
}

// process
const maxNumber = (numbers) => {
    // HW1. * think another way to get the max value

    let maxNumber = numbers[0]
    setTimeout(()=>{
        for(let i=0; i<numbers.length; i++){
        if(numbers[i]>maxNumber){
            maxNumber = numbers[i]
        }
    }
    cb(maxNumber)
    },Math.random() * 300)

    /* return maxNumber */
}
// render
const renderNumber = (number) => {
    console.log(">>>", number)
}

///////////////////////////////////////////
/* let numbers =  */ getNumbers( (numbers)=> {
    maxNumbers(renderNumber,numbers)
})
/* let max_number = maxNumber(numbers) */
/* renderNumber(max_number) */ // modificand codul, acesta nu mai functioneaza
