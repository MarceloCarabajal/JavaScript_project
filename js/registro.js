const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkPassword = document.getElementById("checkpassword");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    checkInput();
})

function checkInput () {
    //Obtener los valores de los inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkPassValue = checkPassword.value.trim();

    if(usernameValue === '') {
        //Mostrar error
        //Agregar la class de error
        setErrorFor(username, 'El nombre de usuario no puede estar vacío')
    }
    else {
        //Agregar la class de exito
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'El Email no puede estar vacío') 
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email no válido')
    }
    else{
        setSuccessFor(email);
    }
    if(passwordValue === '') {
        setErrorFor(password, 'la clave no puede estar vacía')
    }
    else if (passwordValue.length <= 7) {
        setErrorFor(password, 'La clave debe tener al menos 7 caracteres');
    }
    
    else {
        //Agregar la class de exito
        setSuccessFor(password);
    }
    if(checkPassValue === '') {
        setErrorFor(checkPassword, 'la clave no puede estar vacía')
    }
    else if (passwordValue !== checkPassValue) {
        setErrorFor(checkPassword, 'Las claves son distintas');
    }
    
          
    else {
        //Agregar la class de exito
        setSuccessFor(checkPassword);
    }
   
}

function setErrorFor (input, mensaje) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //Agregar mensaje de error dentro de small
    small.innerText = mensaje;

    //Agregar error en class
    formControl.className = 'form-control error';
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control success';
}

function isEmail (email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function goBack (){
    window.history.back ();
}