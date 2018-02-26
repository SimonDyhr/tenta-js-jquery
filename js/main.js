


/* Array of products */
var products = [
    { id: 1,    productName: "ADIDAS ORIGINALS ULTRABOOST AT",    price: 240,     color: 'TRIPLE WHITE',      description: "Beskrivning1",    mainImage: "img/asd.jpg" },
    { id: 2,    productName: "ADIDAS ORIGINALS ULTRABOOST LTD",   price: 220,     color: 'BLACK / WHITE',     description: "Beskrivning2",    mainImage: "img/asd.jpg" },
    { id: 3,    productName: "CONVERSE ZIP 70`S LOW",             price: 123,     color: 'PURE PLATINUM',     description: "Beskrivning3",    mainImage: "img/asd.jpg" },
    { id: 4,    productName: "TIMBERLAND 6\" FIELD BOOT WP",      price: 180,     color: 'LIGHT GREY',        description: "Beskrivning4",    mainImage: "img/asd.jpg" },
    { id: 5,    productName: "TIMBERLAND 6\" PREMIUM BOOT",       price: 220,     color: 'HORWEEN',           description: "Beskrivning5",    mainImage: "img/asd.jpg" },
    { id: 6,    productName: "CONVERSE ZIP 70`S HIGH",            price: 115,     color: 'BLACK / WHITE',     description: "Beskrivning6",    mainImage: "img/asd.jpg" }
];


/*const prices = products.map(function (products) { return products.price; });
console.log("Prices:", prices);*/





/*
*
* Loopen för produkter
*
*/
var i;
for (i = 0; i < products.length; i++) {

    /*
    BUILDUP

     <div class='product' id='product" + i +"'>
        "<div class='productName' id='productName" + i +"'>" + products[i].productName + "</div>";
        "<div class='productPrice' id='productPrice" + i +"'>" + products[i].price + "kr</div>";
        "<div class='productDescription' id='productDescription" + i +"'>" + products[i].description + "</div>";
        "<div class='productImage' id='productImage" + i +"'>
            <img src='" + products[i].mainImage + "'>
         </div>";
         <button class='add-to-cart' data-name='" + products[i].id + "'> Köp </button>
     </div>

    */

    var div = document.getElementById('products');
    div.innerHTML += "<div class='product' id='product" + i +"'><div class='productName' id='productName" + i +"'>" + products[i].productName + "</div><div class='productPrice' id='productPrice" + i +"'>" + products[i].price + "kr</div><div class='productDescription' id='productDescription" + i +"'>" + products[i].description + "</div><div class='productImage' id='productImage" + i +"'><img src='" + products[i].mainImage + "'></div><button class='add-to-cart' onclick='addToCart(this.id)' id='" + products[i].id + "'> Köp </button></div>";
}





document.getElementById("menuProducts").addEventListener("click", function(){
    document.getElementById("products").style.display = "block";
    document.getElementById("checkout").style.display = "none";
});

document.getElementById("menuContact").addEventListener("click", function(){
    document.getElementById("products").style.display = "none";
    document.getElementById("checkout").style.display = "block";
});