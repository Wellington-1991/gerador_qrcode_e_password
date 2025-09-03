async function permitedCharacters(){
    
    let permitted = [];

    if (process.env.UPPERCASE_LETTERS) {
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if (process.env.LOWERCASE_LETTERS) {
        permitted.push(... "abcdefghijklmnopqrstuvwxyz")
    }

    if (process.env.NUMBER) {
        permitted.push(... "0123456789")
    }

    if (process.env.SPECIAL_CARACTERS) {
        permitted.push(... "!@#$%¨&*:<?^|\/,.-_()<>[]{}ºª°")
    }

    return permitted;
}

export default permitedCharacters;