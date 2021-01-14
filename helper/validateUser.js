const regName = /^[a-z ,.'-]+$/i;
const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regRole = /[a-z]{4,5}/
const regId = /[0-9]/

exports.isUserDataValid = (body) => {
    if (isEmailCorrect(body.email) &&
        isNameCorrect(body.firstname, body.lastname) &&
        isMiddelnameCorrect(body.middlename)) {
        return true;
    }
    return false;
}

exports.isRegexNonePersonalValid = (body) => {
    if (regRole.test(body.role) && regId.test(body.user_id) && regId.test(body.address_id)) {
        return true;
    }
    return false;
}

isNameCorrect = (firstname, lastname) => {
    if(regName.test(firstname)&&
        regName.test(lastname)){
        return true;
    }else{
        return false;
    }
}

isMiddelnameCorrect = (middlename) => {
    console.log("inside middlename check")
    if(regName.test(middlename) || middlename === '') {
        console.log('Returning true')
        return true;
    }else{
        console.log('Returning false')
        return false;
    }
}

isEmailCorrect = (email) => {
    if (regEmail.test(email.toLowerCase())) {
        return true;
    }
    return false;
}