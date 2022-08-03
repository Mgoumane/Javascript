function dice(min,max){
    random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

module.exports = {
    dice,
};