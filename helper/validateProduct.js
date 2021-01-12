const regName = /[a-zA-Z]*/;
const regDesc = /[a-zA-Z0-9.,?!'"()@*-_&#]/;
const regPrice = /[0-9.]/;
const regStock = /[0-9]/;

exports.isUserDataValid = (product) => {
    if (regName.test(product.name) &&
        regDesc.test(product.description) &&
        regPrice.test(product.price) &&
        regStock.test(product.stock) &&
        regName.test(product.category)) {
        return true;
    }
    return false;
}