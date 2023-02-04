function getLetter(s) {
    let letter;
    const firstLatter = s[0].toLowerCase();

    switch (firstLatter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = "A";
            break;

        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = "B";
            break;

        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = "C";
            break;

        default:
            letter = "D";
    }

    return letter;
}

const input = "hdfgt";
const result = getLetter(input);
console.log(result);
