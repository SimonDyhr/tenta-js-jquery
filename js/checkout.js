/* GOING TO BE REBUILT SOON */
/* GOING TO BE REBUILT SOON */
/* GOING TO BE REBUILT SOON */
/* GOING TO BE REBUILT SOON */
/* GOING TO BE REBUILT SOON */

const requiredFields = ["firstname", "lastname", "email", "street", "zip", "city"];
let inputs = Array.from(document.getElementsByTagName("input"));


document.getElementById("checkoutForm").addEventListener("submit", function(e){
    e.preventDefault();
    if (!validate()) {
        inputs.filter(x => requiredFields.indexOf(x.name) >= 0)
            .forEach(x => inputValidation(x));
    } else {
        pushOrder();
    }
});


function inputValidation(field) {
    if (field.value === "") {
        field.setAttribute("class", "invalid form-control");
        return false;
    } else {
        field.removeAttribute("class", "invalid");
        field.setAttribute("class", "form-control");
        return true;
    }
}

function validate() {
    return inputs.filter(x => requiredFields.indexOf(x.name) >= 0)
        .every(x => inputValidation(x));
}


function pushOrder() {
    let formValues = {
        firstname: $('#checkout-firstName').val(),
        lastname: $('#checkout-lastName').val(),
        email: $('#checkout-email').val(),
        phone: $('#checkout-phone').val(),
        streetadress: $('#checkout-streetadress').val(),
        zipcode: $('#checkout-zipcode').val(),
        city: $('#checkout-city').val(),
        comment: $('#checkout-comment').val()
    };

    let itemsOrdered = [];

    //push items into orderedItmes
    for (let i = 0; i < items.length; i++) {
        let productInfo = products.find(product => product.Id === Number(items[i].id)); //Find data from the retrieved ID

        //find reviews
        let productID = productInfo.Id;
        let productInfoReviews = reviews.filter(product => product.ProductID === Number(productID)); //Find data from the retrieved ID

        itemsOrdered.push({id: i, name: productInfo.Name, price: productInfo.Price, description: productInfo.Description, image: productInfo.Image, reviews: productInfoReviews, amount: items[i].amount});
    }

    let order = {
        "Firstname": formValues.firstname,
        "LastName": formValues.lastname,
        "Email": formValues.email,
        "Phone": formValues.phone,
        "StreetAddress": formValues.streetadress,
        "ZipCode": formValues.zipcode,
        "City": formValues.city,
        "Comment": formValues.comment,
        "OrderItems": itemsOrdered
    };

    //POST order
    fetch("http://demo.edument.se/api/orders", {
        method: 'POST',
        body: JSON.stringify(order),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });

    //console.log(itemsOrdered);
}