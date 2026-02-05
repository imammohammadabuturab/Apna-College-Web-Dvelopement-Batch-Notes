// promises are rejected and resolved with some data (valid resuls or errors)


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


saveToDB("apna college")
    .then((result)=>{
        console.log("data 1 saved");
        console.log("result of promise: ", result);
        return saveToDB("helloworld");
    })
    .then((result)=>{
        console.log("data 2 saved");
        console.log("result of promise: ", result);
        return saveToDB("imam");
    })
    .then((result)=>{
        console.log("data 3 saved");
        console.log("result of promise: ", result);
    })
    .catch((error)=>{
        console.log("promise was rejected");
        console.log("error of promise: ", error);
    })