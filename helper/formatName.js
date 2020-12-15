exports.formatName = (body) => {
    body.firstname = body.firstname.toLowerCase().charAt(0).toUpperCase();
    body.lastname = body.firstname.toLowerCase().charAt(0).toUpperCase();
    if (body.middlename !== null) {
        body.middlename = body.middlename.toLowerCase();
    }
    return body;
}