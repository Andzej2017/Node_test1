const people = [
    {
        name: "testName",
        color: 'blue',
    },
    {
        name: "testName",
        color: 'red',
    },
    {
        name: "testName",
        color: 'green',
    },
    {
        name: "testName",
        color: 'yellow',
    },
    {
        name: "testName",
        color: 'blue',
    },
    {
        name: "testName",
        color: 'green',
    },
];

const colorsCount = [];

 //selecting colors and their frequency in array
for(const person of people){
    const color = person.color;
    colorsCount[color] = colorsCount[color] ?  colorsCount[color] + 1 : 1;
}


//finding quantity of most frequent element(color, name is not relevant)
let mostPopularColorName = '';
let mostPopularColorCount = 0;
for (const color in colorsCount) {
    const count = colorsCount[color];
    if(count > mostPopularColorCount){
        mostPopularColorCount = count;
    }
}

console.log(mostPopularColorCount, mostPopularColorName );


//find name(-s) of most frequent element(colors)
const mostPopularColorNames = [];
for (const color in colorsCount) {
    const count = colorsCount[color];
    if (count === mostPopularColorCount){
        mostPopularColorNames.push(color);
    }
}
console.log(mostPopularColorNames);