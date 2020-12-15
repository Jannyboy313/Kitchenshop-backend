exports.formatName = (body) => {
    body.user.firstname = body.user.firstname.toLowerCase().charAt(0).toUpperCase();
    body.user.lastname = body.user.firstname.toLowerCase().charAt(0).toUpperCase();
    body.user.email = body.user.email.toLowerCase();
    if (body.user.middlename !== null) {
        body.user.middlename = body.user.middlename.toLowerCase();
    }
    return body;
}