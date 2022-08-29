const products = [
    cucumbers = {
        name: 'Cucumbers',
        price: 5,
        count: 5,
        bought: true,
    },
    bananas = {
        name: 'Bananas',
        price: 7,
        count: 10,
        bought: false,
        
    },
    milk = {
        name: 'Pack of milk',
        price: 35,
        count: 1,
        bought: true,

    },
    tomatoes = {
        name: 'Tomatoes',
        price: 7,
        count: 10,
        bought: false,

    }
]




const headers = ['Product', 'Price', 'Count', 'Total'];

createTable();

function createTable(){
    const table = document.createElement('table');
    
    for (let i=0; i<products.length; i++){
        const row = table.insertRow(i);
        const total = products[i].price * products[i].count + '$';
        
        row.insertCell(0).innerHTML = products[i].name;
        row.insertCell(1).innerHTML = products[i].price;
        row.insertCell(2).innerHTML = products[i].count;
        row.insertCell(3).innerHTML = total;
    }
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    for (let i=0; i < headers.length; i++){
        headerRow.insertCell(i).innerHTML = headers[i];
    }
    document.body.append(table);
    
    
}
