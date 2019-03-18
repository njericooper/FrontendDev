// make a program to calculate phone purcheses
const BUDGET = 1200;
const TAX = 0.09
const PHONE_PRICE = 1000;
const AIR_PODS = 199;
const foo;

var bankBalance = 2000;
var amount = 0;

function calculateTax(amount) {
    return amount * TAX;
}

function formatAmount(amount){
    return "$" + amount.toFixed(2);
}

while (amount < bankBalance) {
    amount = amount + PHONE_PRICE;

    if (amount < BUDGET) {
        amount = amount + AIR_PODS;
    }
}

amount = amount + calculateTax(amount);

console.log("You gotta pay dis much: " + formatAmount(amount));

if (amount > bankBalance) {
    console.log("You are too broke this week. Save a stack and come back! LOL LLS");
}
