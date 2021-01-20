const regName = /^[a-z ,.'-]+$/i;
const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regRole = /[a-z]{4,5}/
const regId = /[0-9]/

exports.isUserDataValid = (user) => {
    if (isEmailCorrect(user.email) &&
        isNameCorrect(user.firstname, user.lastname) &&
        isMiddelnameCorrect(user.middlename)) {
        return true;
    }
    return false;
}

exports.isRegexNonePersonalValid = (user) => {
    if (regRole.test(user.role) && regId.test(user.user_id) && regId.test(user.address_id)) {
        return true;
    }
    return false;
}

isNameCorrect = (firstname, lastname) => {
    if(regName.test(firstname)&&
        regName.test(lastname)){
        return true;
    }
    return false;
}

isMiddelnameCorrect = (middlename) => {
    if(regName.test(middlename) || middlename === '') {
        return true;
    }
    return false;
}

isEmailCorrect = (email) => {
    if (regEmail.test(email)) {
        return true;
    }
    return false;
}