const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '*': (x, y) => x * y,
}

const action = '/';
const num_1 = 12;
const num_2 = 6;

let answer = 0;
answer = operations[action](num_1, num_2);
console.log(`${num_1} ${action} ${num_2} = ${answer}`);
console.log(answer);

const text = {
    first: word => word[0],
    middle: word => word[Math.floor((word.length-1)/2)],
    last: word => word[word.length-1],
}


const textAction = 'first'; 

const word = 'hello';

const letter= text.last(word);

console.log(`${textAction} letter of word "${word}" is ${letter}`);


num = 108;
function squareDigits(num){
    const array_num = Array.from(num.toString()).map(Number);
    let result_array = [];
    for(number of array_num){
        let new_numb = Math.pow(number,2);
        result_array.push(new_numb);
    }
    result_array = result_array.join("");

    return result_array;
}
const result = squareDigits(num);

console.log(result);