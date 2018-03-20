
/* Array of products */
let products;
fetch('http://demo.edument.se/api/products')
    .then(response => response.json())
    .then(function (element) {
        products = element;
        loopProducts();
    })
    .catch(err => console.log(err));




// Loopen för produkter
function loopProducts() {
    for (let i = 0; i < products.length; i++) {

        const { Id, Name, Description, Price, Image } = products[i]; //Fetch data to use in html beneath

        $('#products').append(`
        <br />
        <div class='product row' id='product + i +'>
            <div class='col-md-7'>
                <div class='productName' id='productName + i +'><h4>${Name}</h4></div>
                <div class='productPrice' id='productPrice + i +'><h6>${Price} $</h6></div>
                <div class='productDescription' id='productDescription + i +'>${Description}</div>
                <button class='add-to-cart btn btn-primary' id='${Id}'> Add to cart </button>
                <button class='show-product btn btn-primary' id='${Id}'> Show product </button>
            </div>
            <div class='productImage col-md-5' id='productImage + i +'><img class='img-fluid rounded mb-3 mb-md-0' src='${Image}'></div>
        </div>
        `);
    }
}




//Pressed menulink Products
$('.menuProducts').on('click', function() {
    $("#products").fadeIn();
    $("#checkout").hide();
    $(".productPage").hide();
});
//Pressed menulink Checkout
$('.menuCheckout').on('click', function() {
    $("#checkout").fadeIn();
    $("#products").hide();
    $(".productPage").hide();
});
//Pressed more info on product
$('#products').on('click','.product .show-product', function() {
    $(".productPage").fadeIn();
    $("#checkout").hide();
    $("#products").hide();
});