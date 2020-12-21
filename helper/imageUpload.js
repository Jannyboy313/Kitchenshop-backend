exports.uploadImage = async(imageEncode) => {
    let imageUrl;
    try {
        imageUrl = await httprequest
    } catch(err) {
        console.log(err);
    }
    return imageUrl
}