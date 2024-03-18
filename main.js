function validarUsuario(e){
    let texto = e.value;
    let patron = /^[\w]{3,25}$/;
    
    e.nextElementSibling.innerHTML = patron.test(texto);

    if(!patron.test(texto)){
        document.getElementById("usuario").innerHTML = " Introduce un usuario entre 3 y 25 caracteres";
        document.getElementById("usuario").style.color = "red";
    } else {
        document.getElementById("usuario").innerHTML = " Usuario correcto";
        document.getElementById("usuario").style.color = "green";
    }
}

function validarConstraseña(e){
    let texto = e.value;
    let patron = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    e.nextElementSibling.innerHTML = patron.test(texto);

    if(!patron.test(texto)){
        document.getElementById("contraseña").innerHTML = " Introduce: Al menos 8 caracteres y una letra en mayúsculas, una minúscula y un dígito";
        document.getElementById("contraseña").style.color = "red";
    } else {
        document.getElementById("contraseña").innerHTML = " Contraseña correcta";
        document.getElementById("contraseña").style.color = "green";
    }
}

function validarConfirmarConstraseña() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let message = document.getElementById('confirmarContraseña');

    if (password !== confirmPassword) {
        message.innerHTML = '¡Error! Las contraseñas no coinciden.';
        message.style.color = 'red';
    } else {
        message.innerHTML = '¡Contraseña confirmada correctamente!';
        message.style.color = 'green';
    }
}

function validarEmail(e){
    let texto = e.value;
    let patron = /^[\w\-\.]*@([\w-]+\.)+[\w-]{2,}$/;
    e.nextElementSibling.innerHTML = patron.test(texto);

    if(!patron.test(texto)){
        document.getElementById("email").innerHTML=" Email incorrecto ";
        document.getElementById("email").style.color="red";
    }else{
        document.getElementById("email").innerHTML="Email correcto";
        document.getElementById("email").style.color="green";
    }
}

function validarNombre(e){
    let texto = e.value;
    let patron = /^[\D]{3,}$/;
    e.nextElementSibling.innerHTML = patron.test(texto);

    if(!patron.test(texto)){
        document.getElementById("nombre").innerHTML="Nombre incorrecto";
        document.getElementById("nombre").style.color="red";
    }else{
        document.getElementById("nombre").innerHTML="Nombre correcto";
        document.getElementById("nombre").style.color="green";
    }
}

function validarApellidos(e){
    let texto = e.value;
    let patron = /^[\D]{2,} [\D]{2,}$/;
    e.nextElementSibling.innerHTML = patron.test(texto);

    if(!patron.test(texto)){
        document.getElementById("apellido").innerHTML="Apellido incorrecto";
        document.getElementById("apellido").style.color="red";
    }else{
        document.getElementById("apellido").innerHTML="Apellido correcto";
        document.getElementById("apellido").style.color="green";
    }
}

function validarCP() {
    let cpValue = document.querySelector("textarea").value.split("\n");
    let patron = /^[0-9]{5}$/; 
    
    if (!patron.test(cpValue[2])) { 
        alert('El código postal es incorrecto: ' + cpValue[2]);
    } else {
        alert(`La direccion introducida es la siguiente: 
        ${cpValue} 
        `);
    }
}



    
