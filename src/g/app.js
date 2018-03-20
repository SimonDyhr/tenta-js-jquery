// JavaScript för att implementera kraven A-E.

/* View handler */
//Pressed menulink Products
$('#showProducts').on('click', function() {
    $("#products").fadeIn();
    $("#cart").hide();
});
$('#showCart').on('click', function() {
    $("#cart").fadeIn();
    $("#products").hide();
});





/* Array of products */
let products;
fetch('http://demo.edument.se/api/products')
    .then(response => response.json())
.then(function (element) {
    products = element;
    loadProperty();
    loadProducts();
    console.log(products);
});

//cart array
let cartItems = [];






/* add property */
function loadProperty() {
    for (let i = 0; i < products.length; i++){
        products[i].property = Math.floor((Math.random() * 10) + 1);
    }
}






// Loopen för produkter
function loadProducts() {
    for (let i = 0; i < products.length; i++) {

        const { Id, Name, Description, Price, Image, property } = products[i]; //Fetch data to use in html beneath

        $('#products').append(`
        <div class='product'>
            <div class='productName'><h4>${Name}</h4></div>
            <div class='productPrice'><h6>${Price}</h6></div>
            <div class='productProperty'><h6>${property}</h6></div>
            <div class='productDescription'>${Description}</div>
            <button class='add-to-cart' productid='${Id}'> Add to cart </button>
            <div class='productImage'><img src='${Image}'></div>
        </div>
        `);
    }
}





function loadCart() {
    for (let i = 0; i < cartItems.length; i++) {

        let productInfo = products.find(product => product.Id === Number(cartItems[i].id)); //Find data from the retrieved ID

        // Push out the data
        $('#cart-list').append(`
        <tr>
            <div class='productsInCart'>
                <td><div class='productAmount text-center' id='increaseAmount${i}'>${cartItems[i].amount} - </div></td>
                <td><div class='productName'>${productInfo.Name}</div></td>
            </div>
        </tr>
        `);
    }
}






/* Handler for when user clicks on add to cart button */
$('#products').on('click','.product .add-to-cart', function() {
    const productID = $(this).attr('productid'); //Get ID from button

    // find the array index of product so we can change property
    let findIndexOfProduct = products.findIndex(product => product.Id === Number(productID));

    //if property goes down below one, stop user from adding another item to the cart
    if (products[findIndexOfProduct].property < 1) {
        alert('Cannot add another')
    } else {
        //change property
        let productAmount = products[findIndexOfProduct].property;
        products[findIndexOfProduct].property = productAmount - 1;

        //Reload products
        $('#products').html(``);
        loadProducts();

        //check if product already exists in the cart
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === productID){

                //add another item to the amount if existing
                let itemAmount = cartItems[i].amount;
                cartItems[i].amount = itemAmount + 1;

                var productExists = 1; //Value exists. Therefore we do not need to create it again.

                break; //Breaks loop if item is found
            }
        }

        //If product doesn't already exist in the cart, we add it.
        if (productExists !== 1){
            cartItems.push({id: productID, amount: 1});
        }

        $('#cart-list').html(``); //Töm cart-list innan vi ritar ut den igen
        loadCart();
    }
});