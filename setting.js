//Plus-Minus Button Function
function button(product, condition) {
    var productValue = document.getElementById(product + "-Value").value;
    var productValueNumber = parseInt(productValue);
    var creaseNumber = 0;
    if (condition == true) {
        var creaseNumber = productValueNumber + 1;
    }
    else if (condition == false && productValueNumber > 0) {
        var creaseNumber = productValueNumber - 1;
    }
    var productPrice = 0;
    if (product == "Phone") {
        productPrice = creaseNumber * 1219;
    }
    else if (product == "Case") {
        productPrice = creaseNumber * 59;
    }
    document.getElementById(product + "-Price-Value").innerText = productPrice;
    document.getElementById(product + "-Value").value = creaseNumber;
    calculator();
}


//To Calculate SubTotal,Tax & Total
function calculator() {
    let phoneNumber = dataType("Phone");
    let caseNumber = dataType("Case");

    let subTotal = phoneNumber * 1219 + caseNumber * 59;
    document.getElementById("Sub-Total-Value").innerText = subTotal;

    let tax = Math.round(subTotal * 0.07);
    document.getElementById("Tax-Value").innerText = tax;

    let total = subTotal + tax;
    document.getElementById("Total-Value").innerText = total;
}

//To Covert String Data Type To Number and Avoid Duplicate/Similar Code
function dataType(product) {
    let productPrice = 0;
    let productNumber = 0;
    if ((product == "Phone") || (product == "Case")) {
        productPrice = document.getElementById(product + "-Value").value;
        productNumber = parseInt(productPrice);
        return productNumber;
    }
    else if (product == "Sub-Total" || product == "Tax" || product == "Total") {
        productPrice = document.getElementById(product + "-Value").innerText;
        productNumber = parseInt(productPrice);
        return productNumber;
    }
    else if (product == "Phone-Price" || product == "Case-Price") {
        productPrice = document.getElementById(product + "-Value").innerText;
        productNumber = parseInt(productPrice);
        return productNumber;
    }
}



// // Function To Delete Cart {Not Worked :( }
// function displayNone(product) {
//     document.getElementById("Cart-" + product).style.display = "none";
//     let subTotal = dataType("Sub-Total");
//     let tax = dataType("Tax");
//     let total = dataType("Total");
//     if (product == "Phone") {
//         let phoneCurrentPrice = dataType("Phone-Price")
//         console.log(phoneCurrentPrice);
//         let newSubTotal = subTotal - phoneCurrentPrice;
        
//             document.getElementById("Sub-Total-Value").innerText = newSubTotal;
//             let newTax = Math.round(newSubTotal * 0.07);
//             document.getElementById("Tax-Value").innerText = newTax;
    
//     }
//     else if (product == "Case") {
//         let caseCurrentPrice = dataType("Case-Price");
//         console.log(caseCurrentPrice);
//         let newSubTotal = subTotal - caseCurrentPrice;
        
//             document.getElementById("Sub-Total-Value").innerText = newSubTotal;
//             let newTax = Math.round(newSubTotal * 0.07);
//             document.getElementById("Tax-Value").innerText = newTax;
        
//     }
// }//haha Nothing