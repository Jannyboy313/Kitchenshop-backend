exports.formatRegisterData = (body) => {
    body = formatNameData(body);
    body = formatAddressData(body);
    return body;
}

formatNameData = (body) => {
    body.user.firstname = capitalizeFirstLetter(body.user.firstname).trim();
    body.user.middlename = body.user.middlename.toLowerCase().trim();
    body.user.lastname = capitalizeFirstLetter(body.user.lastname).trim();
    body.user.email = body.user.email.toLowerCase().trim();
    return body;
}

formatAddressData = (body) => {
    body.address.city = capitalizeFirstLetter(body.address.city).trim();
    body.address.street_address = capitalizeFirstLetter(body.address.street_address).trim();
    body.address.zipcode = body.address.zipcode.toUpperCase().split(" ").join("").trim();
    return body;
}

capitalizeFirstLetter = (word) => {
    return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1)
}

exports.formatUsersResponse = (reply) => {
    let users = [];
    for (let i =0; i < reply.length; i++) {
        users.push(reply[i])
    }
    return users;
}