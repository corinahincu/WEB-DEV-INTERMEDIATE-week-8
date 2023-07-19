

// fetch prin promises

/* fetch("http://ip-api.com/json/point.md")
    .then((data) => {
        return data.json()
    })
    .then((data)=>{
        console.log(data)
    }) */

    // imbunatatire in cod ar fi : 

/*     fetch("http://ip-api.com/json/point.md")
    .then(data => data.json() )
    .then(data => console.log(data) ) 
*/

const getIpData = async ()=>{
    let data = await fetch("http://ip-api.com/json/point.md")
        data = await data.json()
    console.log(data)  
}