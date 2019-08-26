function validateUser(){
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(username.length == 0 && password.length == 0) {
         document.getElementById('output').innerHTML = 'Please enter the value';
    } else if (username == 'a@a.com' && password == '123456') {
        document.getElementById('output').innerHTML = 'Valid user';
    } else {
        document.getElementById('output').innerHTML = 'Invalid user';
    }
}