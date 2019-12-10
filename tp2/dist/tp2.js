module.exports = function(number) {
    if (number %2 == 0)
        return true;
    else 
        return false;
};

module.exports = function(string) {
    var str = 'Bonjour, ';
    str = str.concat('',string);
    return str;
};