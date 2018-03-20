
//ITEMS array
const items = [];

$('#products').on('click','.product .add-to-cart', function() {
    const productID = $(this).attr('id'); //Get ID from button

    //check if product already exists in the cart
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === productID){

            //add another item to the amount if existing
            let itemAmount = items[i].amount;
            items[i].amount = itemAmount + 1;

            var productExists = 1; //Value exists. Therefore we do not need to create it again.

            break; //Breaks loop if item is found
        }
    }

    //If product doesn't already exist in the cart, we add it.
    if (productExists !== 1){
        items.push({id: productID, amount: 1});
    }

    //Draw the cart
    drawCart();
});





//Update and draw shopping cart
function drawCart(){
    $('#cart-list').html(``); //Töm cart-list innan vi ritar ut den igen
    let cartNumber = 0;

    for (let i = 0; i < items.length; i++) {

        let productInfo = products.find(product => product.Id === Number(items[i].id)); //Find data from the retrieved ID

        // Push out the data
        $('#cart-list').append(`
        <tr>
            <div class='productsInCart'>
                <th scope='row'> ${i + 1}</th>
                <td><div class='productName'>${productInfo.Name}</div></td>
                <td><div class='text-center'><button class='increaseAmount' id='${i}'>+</button></div></td>
                <td><div class='productAmount text-center' id='increaseAmount${i}'>${items[i].amount}</div></td>
                <td><div class='text-center'><button class='decreaseAmount' id='${i}'>-</button></div></td>
            </div>
        </tr>
        `);

        cartNumber += items[i].amount;
    }

    $('#cartNumber').html(` ` + cartNumber); //Draw out amount of items in shopping cart




    //increase amount
    $('.increaseAmount').on('click', function() {
        const productID = $(this).attr('id'); //Get ID from button

        //add another item to the amount
        let productAmount = items[productID].amount;
        items[productID].amount = productAmount + 1;

        $('#increaseAmount' + productID).html(items[productID].amount);
        drawCart();
    });

    //decrease amount
    $('.decreaseAmount').on('click', function() {
        const productID = $(this).attr('id'); //Get ID from button

        //decrease another item to the amount
        let productAmount = items[productID].amount;
        items[productID].amount = productAmount - 1;

        //Check so item wont go beneath 0, if so delete item
        if (items[productID].amount < 1){
            items.splice(productID, 1);
            drawCart() //Redraw cart
        }

        $('#increaseAmount' + productID).html(items[productID].amount);
        drawCart();
    });
}



/* DUMMY DATA - Uncomment beneath to get 3 items in cart*/
/*items.push({id: 1, amount: 1});
items.push({id: 2, amount: 1});
items.push({id: 3, amount: 1});
drawCart();*/





