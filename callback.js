function printText(text){
    return `Yours text: ${text}.`;
}
function inParenthisis(text){
    return `Yours text: "${text}".`;
}
function printer(text, format){
    //callback
    return format(text);
}

const word = 'Hello';
const t1 = printer(word, printText);
const t2 = printer(word, inParenthisis);

console.log(t1);
console.log(t2);