const regName = /^[a-z ,.'-]+$/i;
const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

exports.validateUser = (body) => {
    if (!validateEmail(body.email)) {
        return false;
    }
    if (!validateName(body.firstname, body.lastname)) {
        return false
    }
    if (!validateMiddlename(middlename)) {
        return false;
    }

    return true;
}

validateName = (firstname, lastname) => {
    if(regName.test(firstname),
        regName.test(lastname)){
        return true;
    }else{
        return false;
    }
}

validateMiddlename = (middlename) => {
    if(regName.test(middlename) && middlename !== null) {
        return true;
    }else{
        return false;
    }
}

validateEmail = (email) => {
    if (regEmail.test(email)) {
        return true;
    }
    return false;
}

exports.formatName = (body) => {
    body.firstname = body.firstname.toLowerCase().charAt(0).toUpperCase();
    body.lastname = body.firstname.toLowerCase().charAt(0).toUpperCase();
    if (body.middlename !== null) {
        body.middlename = body.middlename.toLowerCase();
    }
    return body;
}