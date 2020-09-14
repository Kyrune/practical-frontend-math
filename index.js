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

// let userNames = ['James', 'Jane', 'Ryan', 'Rebecca'];

// Ages are generated from 12 to 64

// Height includes a floating number

// let user = {
//     name: userNames[roll(0, userNames.length)],
//     age: roll(12, 65),
//     height: roll(5.1, 6.1, 1).toFixed(1)
// };

// console.log(user);

// Note to self: found on Emojipedia
let possibleProducts = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦"]

let products = [...Array(5)].map((_, i) => {
    return {
        index: i,
        title: possibleProducts[roll(0, possibleProducts.length)],
        price: roll(1, 10, 1).toFixed(2),
        // Weight between 6oz and 20oz
        // Round to the nearest 100th
        weight: roll(6, 20, 1).toFixed(2),
        count: roll(1, 6)
    }
});

// console.log(products);

// Calculate the Cart Total using .reduce
let cartTotal = products.reduce(function(accumulator, product) {
    console.log(accumulator, product)
    return accumulator + parseFloat(product.price) * product.count;
}, 0).toFixed(2);

// Calculate the Total Weight using .reduce
let totalWeight = products.reduce(function(accumulator, product) {
    return accumulator + parseFloat(product.weight) * product.count;
}, 0).toFixed(2);

// console.log(cartTotal);

// roll() for a random Tax Rate between 5% & 9%
// rounding to the nearest 10th
let taxRate = roll(5, 9, 1).toFixed(1);

// Apply that Tax Rate to the Cart Total
function taxed(value) {
    return taxRate / 100 * cartTotal + parseFloat(cartTotal);
};
let taxedTotal = taxed(cartTotal);
console.log(taxedTotal);



let productsElement = document.getElementById("Products");

let cartHtml = '';
products.forEach(function(product) {
    cartHtml += `<div class="product">
        <div>${product.title}</div>
        <div>💲${product.price}</div>
        <div>x${product.count}</div>
        <div>${product.weight}oz</div>
    </div>`
});

productsElement.innerHTML = cartHtml
