const regName = /^[a-z ,.'-]+$/i;
const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const Users = require('../model/users.js');

exports.validateUser = (body) => {
    console.log(body);
    if (!isEmailCorrect(body.email) ||
        !isNameCorrect(body.firstname, body.lastname) ||
        !isMiddelnameCorrect(body.middlename)) {
        console.log("==========================")
        console.log("INSIDE IF STATEMENT VALIDATE USER")
        return false;
    }
    return true;
}

isNameCorrect = (firstname, lastname) => {
    if(regName.test(firstname)&&
        regName.test(lastname)){
        console.log("IsNameCorrect = TRUE");
        return true;
    }else{
        console.log("IsNameCorrect = FALSE");
        return false;
    }
}

isMiddelnameCorrect = (middlename) => {
    if(regName.test(middlename) && middlename !== '') {
        console.log("isMiddelnameCorrect = TRUE")
        return true;
    }else{
        console.log("isMiddelnameCorrect = FALSE")
        return false;
    }
}

isEmailCorrect = (email) => {
    console.log("THIS IS THE ISEMAILCORRECT EMAIL ", email)
    if (regEmail.test(email)) {
        console.log("isEmailCorrect = TRUE")
        return true;
    }
    console.log("isEmailCorrect = FALSE")
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