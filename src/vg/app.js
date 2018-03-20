// JavaScript för att implementera krav F.
/* KAN INTE FÅ MÖGET ATT FUNKA, ger upp. Hem och plugga. */
/* KAN INTE FÅ MÖGET ATT FUNKA, ger upp. Hem och plugga. */

/* KAN INTE FÅ MÖGET ATT FUNKA, ger upp. Hem och plugga. */
/* KAN INTE FÅ MÖGET ATT FUNKA, ger upp. Hem och plugga. */
/* KAN INTE FÅ MÖGET ATT FUNKA, ger upp. Hem och plugga. */
/* KAN INTE FÅ MÖGET ATT FUNKA, ger upp. Hem och plugga. */

/* KAN INTE FÅ MÖGET ATT FUNKA, ger upp. Hem och plugga. */
/* KAN INTE FÅ MÖGET ATT FUNKA, ger upp. Hem och plugga. */

// setting up form validators
//Checking if ID is above 0 and below 9999, else we return false.
FormValidator.addValidator("idOK", function (inputdata) {
    if (inputdata >= 0 && inputdata <= 9999 && inputdata !== '') { return true; }
});


//checking the name. Need to trim it for spaces so user wont send in three spaces. Then we check so it's above three letters
FormValidator.addValidator("nameOK", function (inputdata) {
    if (inputdata.trim() !== '' && inputdata.length >= 3) { return true; }
});


//simple price check, price can't be 0 therefore must be '> 0' above 0
FormValidator.addValidator("priceOK", function (inputdata) {
    if (inputdata > 0) { return true; }
});


//So status has been set!
FormValidator.addValidator("statusOK", function (inputdata) {
    if (inputdata !== '') { return true; }
});







//declaring Mapping
const formMapping = {
    id: "idOK",
    name: "nameOK",
    price: "priceOK",
    status: "statusOK"
};
//after delcaring we initiate mapping
FormValidator.prepare(formMapping);








function submitHandler() {
    //Collect data from form
    let formdata = {
        id: $("#id").val(),
        name: $("#name").val(),
        price: $("#price").val(),
        status: $("#status").val()
    };

    //Check for errors
    const errorStrings = FormValidator.validate(formdata);
        if (errorStrings.length !== 0) {
            $("#showerrors").html("");
            $("#showerrors").append(`Validation failed, verify: ${FormValidator.validate(formdata)}`);
        } else {
            $("#showerrors").html("");
            alert("form Submitted");
    }
}
