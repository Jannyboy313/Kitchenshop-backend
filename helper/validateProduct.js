const regName = /[a-zA-Z\s]*/;
const regPrice = /^(\d{1,6})(\.\d{2})?$/;
const regStock = /[0-9]{0,4}/;

exports.isProductDataValid = async (product) => {
    if (regName.test(product.name) &&
        product.name.length <= 50 &&
        product.description.length <= 1000 &&
        regPrice.test(product.price) &&
        regStock.test(product.stock) &&
        regName.test(product.category)) {
        return true;
    }
    return false;
}