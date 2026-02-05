// returns a function as an argument

function oddEvenTest(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
    }
    } else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
    }
    } else {
        console.log("wrong request");
    }
}

oddEvenTest("odd")(5); // true
oddEvenTest("even")(4); // true
oddEvenTest("even")(5); // false
oddEvenTest("hello")(5); // wrong request

