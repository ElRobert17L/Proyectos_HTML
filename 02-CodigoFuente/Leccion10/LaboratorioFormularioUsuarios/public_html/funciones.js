function validarForma(forma) {
    //Validamos el nombre
    var nombre = forma.nombre;
    if (nombre.value == "") {
        alert("Debe proporcionar un nombre");
        nombre.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(nombre.value)) {
        alert("Debe proporcionar un nombre");
        nombre.focus();
        return false;
    }

    //Validamos el apellido
    var apellido = forma.apellido;
    if (apellido.value == "") {
        alert("Debe proporcionar un apellido");
        apellido.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(apellido.value)) {
        alert("Debe proporcionar un apellido");
        apellido.focus();
        return false;
    }

    //Validamos el email
    var email = forma.email;
    if (email.value == "") {
        alert("Debe proporcionar un email");
        email.focus();
        return false;
    }
    if (!/^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(email.value)) {
        alert("Debe proporcionar un email");
        email.focus();
        return false;
    }

    //Formulario validado
    alert("Formulario valido, enviando datos...");
    return true;
}