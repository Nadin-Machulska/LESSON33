'use srtict'


const Product =  {
    constructor (name, price, count, bought){
        Object.assign(this, {name, price, count, bought})
    }
}

function boughtProductSum() {
    return this.price * this.count;
}

function addProductToList() {
    this.bought = true;
    this.count += 1;
    reloadOneProduct (this);
    countProductsInList();
}

function deleteFromCart() {
    this.bought = false;
    this.amount = 0;
    reloadOneProduct(this)
    countProductsInCart();
}

const cucumbers = new Product('Cucumber', 5, 10, true)
const tomato = new Product('Tomato', 7, 10, true)
const banana = new Product('Banana', 5, 10, false)
const salt = new Product('Pack of salt', 35, 1, false)
const milk = new Product('Bottle of milk', 50, 1, true)
const bread = new Product('Bread', 15, 1, true)
const juice = new Product('Pack of juice', 35, 1, false)
const sugar = new Product('Pack of sugar', 70, 1, false)

const allProducts = [cucumbers, tomato, banana, salt, milk, bread, juice, sugar]

function createMoreCards(){
    let card = document.querySelector('.product__card');
    let clonedCards = card.cloneNode(true);
    clonedCards.class = 'tomatoes'
}





