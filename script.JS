document.getElementById('submitBtn').addEventListener('click', function() {
    var nameInput = document.getElementById('nameInput');
    var greeting = document.getElementById('greeting');
    
    if (nameInput.value.trim() !== '') {
        greeting.innerHTML = 'Hello, ' + nameInput.value + '!';
    } else {
        greeting.innerHTML = 'Please enter your name.';
    }
});

