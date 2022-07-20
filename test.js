
 const add = (num1, num2) => {
    return num1+num2;
}

 const length = (string) => {
     let strLength = string.split('').length
    if(strLength > 0 && strLength < 10) {
    return true;
} 
return false;
}

const revStr = (string) => {
    return string
                .toLowerCase()
                .split('')
                .reverse()
                .join('');
}

test('4+4 is equal to 8', () => {
    expect(add(2,2)).toBe(4)
});

test('market is 6  letters long', () => {
    expect(length('market')).toBe(true)
});

test('The string is not empty', () => {
    expect(length('')).toBe(false)
});

test('The string is reversed', () => {
    expect(revStr('HELLO')).toBe('olleh')
});