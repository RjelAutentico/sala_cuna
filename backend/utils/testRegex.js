function nombreRegex(input) {
    let regex = /[a-zA-Z]+/i;
    return regex.test(input);
}

function correoRegex(input) {
    let regex = /@gmail\.com/i;
    return regex.test(input);
}

function telefonoRegex(input) {
    let regex = /9\d\d\d\d\d\d\d\d/i;
    return regex.test(input);
}



export default
nombreRegex;
correoRegex;
telefonoRegex




