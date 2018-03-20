/* Array of reviews */
let reviews =
fetch('http://demo.edument.se/api/reviews')
    .then(response => response.json())
    .then(function (element) {
        reviews = element;
    })
    .catch(err => console.log(err));


//Show product
$('#products').on('click','.product .show-product', function() {
    const productID = $(this).attr('id'); //Get ID from button

    let productInfo = products.find(product => product.Id === Number(productID)); //Find data from the retrieved ID

    // Push out the data
    $('#productPageDetails').html(`
    <div class='productInDetail container'>
        <div class='productInDetailRow row'>
            <div class='productImageDetail col-md-5' id='productImage'>
                <img class='img-fluid rounded mb-3 mb-md-0' src='${productInfo.Image}'>
            </div>
            <div class='productInformationDetail col-md-7'>
                <div class='productNameDetail'><h4>${productInfo.Name}</h4></div>
                <div class='productpriceDetail'><h6>${productInfo.Price} $</h6></div>
                <div class='productdescriptDetail'>${productInfo.Description}</div>
            </div>
        </div>
    </div>`);




    $('.submitReview').attr('id', productID); //Set ID on reviewbutton




    //Reviews
    let productInfoReviews = reviews.filter(product => product.ProductID === Number(productID)); //Find data from the retrieved ID
    $('#reviewsMade').html(``);  //Clear before entering loop

    //loop out all reviews
    for (let i = 0; i < productInfoReviews.length; i++) {
        $('#reviewsMade').append(`
        <div class='productInDetail container'>
            <div class='productInDetailRow row'>
                <div class='productInformationDetail col-md-12'>
                    <div class='productNameDetail'><h4>${productInfoReviews[i].Name}</h4></div>
                    <div class='productpriceDetail'><h6>${productInfoReviews[i].Comment}</h6></div>
                    <div class='productdescriptDetail'>${productInfoReviews[i].Rating} Stars</div><br />
                </div>
            </div>
        </div> <br />`);
    }
});




/* Submit review */
$('.submitReview').on('click', function(e) {
    e.preventDefault();

    const productID = $(this).attr('id'); //Get ID from button
    let user = $("#reviewName").val();
    let comment = $("#reviewComment").val();
    let userRating = $("#starRating").val();

    console.log(user, comment, userRating, productID);

    //Post review
    fetch("http://demo.edument.se/api/reviews", {
        method: 'POST',
        body: JSON.stringify({Id: 1, ProductID: productID, Name: user, Comment: comment, Rating: userRating}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });

    //Reviews
    let productInfoReviews = reviews.filter(product => product.ProductID === Number(productID)); //Find data from the retrieved ID
    $('#reviewsMade').html(``);  //Clear before entering loop

    //loop out all reviews
    for (let i = 0; i < productInfoReviews.length; i++) {
        $('#reviewsMade').append(`
        <div class='productInDetail container'>
            <div class='productInDetailRow row'>
                <div class='productInformationDetail col-md-12'>
                    <div class='productNameDetail'><h4>${productInfoReviews[i].Name}</h4></div>
                    <div class='productpriceDetail'><h6>${productInfoReviews[i].Comment}</h6></div>
                    <div class='productdescriptDetail'>${productInfoReviews[i].Rating} Stars</div><br />
                </div>
            </div>
        </div> <br />`);
    }
});