const regName = /^[a-z ,.'-]+$/i;
const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const Users = require('../model/users.js');

exports.validateUser = async(body) => {
    if (!validateEmail(body.email)) {
        return false;
    }
    if (!validateName(body.firstname, body.lastname)) {
        return false
    }
    if (!validateMiddlename(body.middlename)) {
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
    if(regName.test(middlename) && middlename !== '') {
        return true;
    }else{
        return false;
    }
}

validateEmail = (email) => {
    if (regEmail.test(email) && validateExistence(email)) {
        return true;
    }
    return false;
}

validateExistence = async(email) => {
    let existence;
    try{
        existence = await Users.findByPk(email);
    } catch(err) {
        return false;
    }
    if (existence === null) {
        return false
    }
    return true;
}