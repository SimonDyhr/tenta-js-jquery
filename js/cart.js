
//ITEMS
var items = [];

function addToCart(value){

    //Value.id from the button
    var x = value;

    //check if product already exists in the cart
    var i;
    for (i = 0; i < items.length; i++) {
        if (items[i].id == x){

            //add another item to the amount
            var k = items[i].amount;
            items[i].amount = k + 1;

            var f = 1; //Value exists. Else we need to create the item

            break; //Breaks loop if item is found
        }
    }

    //If product doesn't already exist in the cart, we add it.
    if (f != 1){
        items.push({id: x, amount: 1});
    }

    //console.log(items);   //log out items in cart
    drawCart();
}








//Update and draw shopping cart
function drawCart(){
    var insideHTML = "";
    var i;
    var y = 0;
    for (i = 0; i < items.length; i++) {
        y++; //For table number

        //Find the Item in the Products() array
        var obj = products.find(o => o.id === Number(items[i].id));

        var html = [
            "<tr>",
                "<div class='productsInCart'>",
                    "<th scope='row'>" + y + "</th>",
                    "<td><div class='productName'>" + obj.productName + "</div></td>",
                    "<td><div class='increaseAmount text-center'><button id='" + i + "' onclick='increaseAmount(this.id)'>+</button></div></td>",
                    "<td><div class='productAmount text-center' id='increaseAmount" + i + "'>" + items[i].amount + "</div></td>",
                    "<td><div class='decreaseAmount text-center'><button id='" + i + "' onclick='decreaseAmount(this.id)'>-</button></div></td>",
                "</div>",
            "</tr>",
        ].join('');

        insideHTML += html;
    }

    //Draw the shoppingcart
    var shoppingCart = document.getElementById('cart-list');
    shoppingCart.innerHTML = insideHTML;

    //Draw the shoppingIcon Number
    var shoppingCartNumber = document.getElementById('cartNumber');
    shoppingCartNumber.innerHTML = " " + items.length;
}









//increase amount
function increaseAmount(value){
    var x = value;

    console.log (items[x].amount);
    console.log ('increaseamount' + x);

    //add another item to the amount
    var k = items[x].amount;
    items[x].amount = k + 1;

    var shoppingCartAmount = document.getElementById('increaseAmount' + x);
    shoppingCartAmount.innerHTML = items[x].amount;
}



//decrease amount
function decreaseAmount(value){
    var x = value;

    console.log (items[x].amount);
    console.log ('increaseamount' + x);

    //add another item to the amount
    var k = items[x].amount;
    items[x].amount = k - 1;

    //Check so item wont go beneath 0, if so delete item
    if (items[x].amount < 1){
        items.splice(x, 1);
        drawCart() //Redraw cart
    }

    var shoppingCartAmount = document.getElementById('increaseAmount' + x);
    shoppingCartAmount.innerHTML = items[x].amount;
}




items.push({id: 1, amount: 1});
items.push({id: 2, amount: 1});
items.push({id: 3, amount: 1});
drawCart();




