exports.formatRegisterData = (body) => {
    body = formatNameData(body);
    body = formatAddressData(body);
    return body;
}

formatNameData = (body) => {
    body.user.firstname = body.user.firstname.toLowerCase().charAt(0).toUpperCase().trim();
    body.user.middlename = body.user.middlename.toLowerCase().trim();
    body.user.lastname = body.user.firstname.toLowerCase().charAt(0).toUpperCase().trim();
    body.user.email = body.user.email.toLowerCase().trim();
    return body;
}

formatAddressData = (body) => {
    body.address.city = body.address.city.toLowerCase().charAt(0).toUpperCase().trim();
    body.address.street_address = body.address.street_address.toLowerCase().charAt(0).toUpperCase().trim();
    body.address.zipcode = body.address.zipcode.toUpperCase().split(" ").join("").trim();
    return body;
}