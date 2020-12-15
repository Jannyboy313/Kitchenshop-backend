const regName = /^[a-z ,.'-]+$/i;
const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

exports.validateUser = (body) => {
    if (!isEmailCorrect(body.email) ||
        !isNameCorrect(body.firstname, body.lastname) ||
        !isMiddelnameCorrect(body.middlename)) {
        return false;
    }
    return true;
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
    if(regName.test(middlename) && middlename !== '') {
        return true;
    }else{
        return false;
    }
}

isEmailCorrect = (email) => {
    if (regEmail.test(email)) {
        return true;
    }
    return false;
}

// doesEmailExist = async(email) => {
//     console.log("THIS IS THE EMAIL ", email);
//     let existence;
//     try{
//         existence = await Users.findOne({where: {email: email}});
//     } catch(err) {
//         console.log(err);
//         return null;
//     }
//     if (existence === null) {
//         console.log("doesEmailExist = FALSE")
//         return false
//     }
//     console.log("doesEmailExist = TRUE")
//     return true;
// }