// Create a six-sided die
// function roll() {
//     console.log(Math.floor((Math.random() * 6) + 1));
// }

// console.log(roll());

function roll(min, max, floatFlag) {
    let r = Math.random();
    r *= (max - min);
    r += min;
    return floatFlag ? r : Math.floor(r);
}

// console.log(roll(1, 5, 1));

let userNames = ['James', 'Jane', 'Ryan', 'Rebecca'];

let user = {
    name: userNames[roll(0, userNames.length)],
    age: roll(12, 65),
    height: roll(5.1, 6.1, 1).toFixed(1)
};

console.log(user);
