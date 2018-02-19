


/* Array of products */
var products = [
    { productName: "ADIDAS ORIGINALS ULTRABOOST AT",    price: 240,     color: 'TRIPLE WHITE',      description: "Beskrivning1",    mainImage: "img/asd.jpg" },
    { productName: "ADIDAS ORIGINALS ULTRABOOST LTD",   price: 220,     color: 'BLACK / WHITE',     description: "Beskrivning2",    mainImage: "img/asd.jpg" },
    { productName: "CONVERSE ZIP 70`S LOW",             price: 123,     color: 'PURE PLATINUM',     description: "Beskrivning3",    mainImage: "img/asd.jpg" },
    { productName: "TIMBERLAND 6\" FIELD BOOT WP",      price: 180,     color: 'LIGHT GREY',        description: "Beskrivning4",    mainImage: "img/asd.jpg" },
    { productName: "TIMBERLAND 6\" PREMIUM BOOT",       price: 220,     color: 'HORWEEN',           description: "Beskrivning5",    mainImage: "img/asd.jpg" },
    { productName: "CONVERSE ZIP 70`S HIGH",            price: 115,     color: 'BLACK / WHITE',     description: "Beskrivning6",    mainImage: "img/asd.jpg" }
];


const prices = products.map(function (products) { return products.price; });
console.log("Prices:", prices);





/*
*
* Loopen för produkter
*
*/
var i;
for (i = 0; i < products.length; i++) {


    /*
    *
    * product
    * skapar en huvud-div 'product' för varje produkt som finns i arrayen products
    *
    */
    var mainProduct = document.createElement("div");
    mainProduct.setAttribute("class", "product");
    mainProduct.setAttribute("id", "product" + i);



    /* tryck in product under diven products */
    var mainElement = document.getElementById("products");
    mainElement.appendChild(mainProduct);






    /*
    *
    * productName
    * hämtar alla productname för att loopa ut dem till diven productName.
    * Här ger vi diven först attribut så som ID och sedan tilldelar vi diven värde hämtat från arrayen products.
    *
    */
    var productName = document.createElement("div");
    productName.setAttribute("id", "productName" + i);
    productName.setAttribute("class", "productName");
    productName.innerHTML = products[i].productName;

    /* tryck in productName under diven 'product' */
    var subElement = document.getElementById("product" + i);
    subElement.appendChild(productName);






    /*
    *
    * productPrice
    * hämtar alla productprice för att loopa ut dem till diven productPrice.
    * Här ger vi diven först attribut så som ID och sedan tilldelar vi diven värde hämtat från arrayen products.
    *
    */
    var productPrice = document.createElement("div");
    productPrice.setAttribute("id", "productPrice" + i);
    productPrice.setAttribute("class", "productPrice");
    productPrice.innerHTML = products[i].price + ' kr';

    /* tryck in productPrice under diven 'product' */
    subElement.appendChild(productPrice);






    /*
    *
    * productDescription
    * hämtar alla productDescription för att loopa ut dem till diven productDescription.
    * Här ger vi diven först attribut så som ID och sedan tilldelar vi diven värde hämtat från arrayen products.
    *
    */
    var productDescription = document.createElement("div");
    productDescription.setAttribute("id", "productDescription" + i);
    productDescription.setAttribute("class", "productDescription");
    productDescription.innerHTML = products[i].description;

    /* tryck in productDescription under diven 'product' */
    subElement.appendChild(productDescription);






    /*
    *
    * productImage
    * hämtar alla productImage för att loopa ut dem till diven productImage.
    * Här ger vi diven först attribut så som ID och sedan tilldelar vi diven värde hämtat från arrayen products.
    *
    */
    var productImage = document.createElement("div");
    productImage.setAttribute("id", "productImage" + i);
    productImage.setAttribute("class", "productImage");

    /* tryck in productImage under diven 'product' */
    subElement.appendChild(productImage);

    /* skapa <img> under diven 'productImage' */
    var productImageSibling = document.createElement("img");
    productImageSibling.setAttribute("src", products[i].mainImage);
    /* tryck in <img> under diven 'productImage' */
    var subElementUnderImage = document.getElementById("productImage" + i);
    subElementUnderImage.appendChild(productImageSibling);

}





document.getElementById("menuProducts").addEventListener("click", function(){
    document.getElementById("products").style.display = "block";
    document.getElementById("checkout").style.display = "none";
});

document.getElementById("menuContact").addEventListener("click", function(){
    document.getElementById("products").style.display = "none";
    document.getElementById("checkout").style.display = "block";
});