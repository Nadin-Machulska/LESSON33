'use strict'
const products = [
    {
        productName: 'Cucumbers',
        price: 5,
        count: 0,
        bought: true,
    },
    {
        productName: 'Bananas',
        price: 7,
        count: 0,
        bought: false,

    },
    {
        productName: 'Pack of milk',
        price: 35,
        count: 0,
        bought: true,

    },
    {
        productName: 'Tomatoes',
        price: 7,
        count: 0,
        bought: false,

    }
]

const productContainer = document.querySelector('.product__container');
const productList = document.querySelector('.product__list');

class Product {
    render() {

        let cardItem = '';
        products.forEach(({ productName, price, count }) => {
            // console.log(productName, price, count)

            cardItem += `
            <li class = "product__card">
            <span>Name: ${productName}</span><br>
            <span>Price: ${price}</span><br>
            <span class="abc">Count: ${count}</span><br>
            <button class= "product__btn">add</button>
                </li>`
        })

        productList.innerHTML = cardItem;
    }
}

const productCatalog = new Product();
productCatalog.render();

const productButton = document.querySelector('.product__btn');
const productCard = document.querySelector('.product__card');    

// productButton.forEach(e => {
//     // e.addEventListener('click', increaseCountNumber())
//     if ( != productButton.closest('.product__list')){
//         return false
//     };
//     e.addEventListener('click', increaseCountNumber())

// })
productCard.addEventListener('click', (Event) =>{
    if (Event.target.classList.contains('product__btn')){
        increaseCountNumber();
    } else {
        console.log(false)
    }
})



function increaseCountNumber(){
products.forEach((product)  => {
    product.count = product.count + 1;
    document.querySelector('.abc').innerHTML = ('Count:' + product.count)
})   
}


// productButton.onclick = increaseNumberOfProduct;
// const increaseNumberOfProduct =productCard.addEventListener('click', function (evt){
//     let targetButton = evt.target;
//     if (targetBtn.closest('.productButton')) {
//         targetBtn
//     }

// })

// function increaseNumberOfProduct() {
//     // products.forEach({count} => {
//     //     count = count + 1
//     // })

//     for (let i = 0; i < products.length; i += 1) {
//         products[i].count += 1
//     }

// }
