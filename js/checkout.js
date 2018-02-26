const requireds = ["firstname", "lastname", "email", "street", "zip", "city"];
var inputs = Array.from(document.getElementsByTagName("input"));


document.getElementById("checkoutForm").addEventListener("submit", function(e){
    e.preventDefault();
    console.log(validate());
    if (!validate()) {
        inputs.filter(x => requireds.indexOf(x.name) >= 0 ? true : false)
            .forEach(x => inputValidation(x));
    } else {
        // submit
        console.log("Everything validated!");
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
    return inputs.filter(x => requireds.indexOf(x.name) >= 0 ? true : false )
    // .forEach(x => inputValidation(x))
        .every(x => inputValidation(x));
}
