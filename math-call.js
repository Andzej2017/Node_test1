const operations = {
    'sum_of': (x, y) => x + y,
    'diff': (x, y) => x - y,
    'division': (x, y) => x / y,
    'multiply': (x, y) => x * y,
}

const num_1 = 12;
const num_2 = 6;

function calculate(n1, n2, operation){
    return operations[operation](n1,n2);
}

const r1 = calculate(num_1, num_2, 'sum_of');
const r2 = calculate(num_1, num_2, 'diff');
const r3 = calculate(num_1, num_2, 'division');
const r4 = calculate(num_1, num_2, 'multiply');

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);