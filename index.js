// Create a six-sided die
// function roll() {
//     console.log(Math.floor((Math.random() * 6) + 1));
// }

function roll(min, max) {
    let r = Math.random();
    r *= (max - min);
    r += min;
    return r;
}

console.log(roll(1, 5));
