// promise is a object

// resolve - success vala callback
// reject - failure vala callback

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

saveToDB("apna college");

// states of promises
// rejected, pending, fulfilled or resolved