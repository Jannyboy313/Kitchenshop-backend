const request = require('request');
require('dotenv/config');

uploadImage = async(imageEncode) => {
    let imageUrl;
    try {
        // Hier een http request naar de api van daniel
        imageUrl = await httprequest
    } catch(err) {
        console.log(err);
    }
    return imageUrl
}