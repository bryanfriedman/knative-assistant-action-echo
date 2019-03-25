module.exports = x => {
    body = JSON.parse(x);
    text = body["any"]; 
    return text;
}