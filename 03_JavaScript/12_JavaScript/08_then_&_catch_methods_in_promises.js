// promise is an obects so there must be their methods,
// then - after promise is fulfilled
// catch - if promise is rejected


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

saveToDB("apna college").then(()=>{
    console.log("promise was resolved");
    })
    .catch(()=>{
        console.log("promise was rejected")
    })