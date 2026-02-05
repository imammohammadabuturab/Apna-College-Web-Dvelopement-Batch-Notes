
function saveToDB(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10)+1;

        if (internetSpeed > 4){
            resolve("Success : data was saved");
        } else {
            reject("Failure : weak connection");
        }
    })
}


// iss vale code me data2 ka error catch nhi ho pata hai

// saveToDB("apna college").then(()=>{
//     console.log("data 1 saved");
//     saveToDB("helloworld").then(()=>{
//         console.log("data 2 saved")
//     })
// }).catch(()=>{
//     console.log("promise was rejected")
// });  


// isme data 2 error catch ho jata hai, isiko promise chaining khte hai
saveToDB("apna college")
    .then(()=>{
        console.log("data 1 saved");
        return saveToDB("helloworld");
    })
    .then(()=>{
        console.log("data 2 saved");
        return saveToDB("imam");
    })
    .then(()=>{
        console.log("data 3 saved");
    })
    .catch(()=>{
        console.log("promise was rejected");
    })