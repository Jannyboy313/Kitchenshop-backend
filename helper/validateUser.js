const regName = /^[a-z ,.'-]+$/i;
const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

exports.isUserDataValid = (body) => {
    if (isEmailCorrect(body.email) &&
        isNameCorrect(body.firstname, body.lastname) &&
        isMiddelnameCorrect(body.middlename)) {
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