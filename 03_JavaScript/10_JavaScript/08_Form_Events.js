let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Form submitted!');
});