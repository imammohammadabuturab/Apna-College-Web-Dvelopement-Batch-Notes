// The promise object represent the equivalent completion (or failure) of asyncronus operation and its resulting value.

function saveToDB(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10)+1;
    if (internetSpeed > 4){
        success();
    } else {
        failure();
    }
}

saveToDB(
    "apna college" , ()=> {
        console.log("success : your data was saved");
        saveToDB("Hello world" , () => {
            console.log("success2 : data2 saved ");
            saveToDB("Imam" , () => {
                console.log("success3 : data3 saved ");
            }, () => {
            console.log("Failure3 : weak connection")
        })
        }, () => {
            console.log("Failure2 : weak connection")
        })
    },
    () => {
        console.log("Failure : weak connection, data not saved");
    }
)   


// this is called callback hell