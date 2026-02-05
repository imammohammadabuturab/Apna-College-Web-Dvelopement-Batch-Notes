let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // let user = document.querySelector('#user');
    // let pass = document.querySelector('#pass');

    // let { user, pass } = form.elements;

    console.dir(form);
    let user = this.elements[0]; // or form.elements['user']; or form.elements.user or form.elements[0]
    let pass = this.elements[1]; // or form.elements['pass']; or form.elements.pass or form.elements[1]

    console.log("User: " + user.value);
    console.log("Password: " + pass.value);


    alert(`Hi ${user.value}, your password is ${pass.value}`);
});