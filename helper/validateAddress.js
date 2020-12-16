const regex = /^[a-zA-Z0-9\s,'-]*$/

exports.isAddressValid = (address) => {
    if (regex.test(address.city) ||
        regex.test(address.street_address) ||
        regex.test(address.zipcode)
        ) {
        return true;
    }
    return false;
}