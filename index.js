// Create a six-sided die
// function roll() {
//     console.log(Math.floor((Math.random() * 6) + 1));
// }

function roll(min, max, floatFlag) {
    let r = Math.random();
    r *= (max - min);
    r += min;
    return floatFlag ? r : Math.floor(r);
}

console.log(roll(1, 5, 1));
