//Plus-Minus Button Function
function button(product,condition){
    var productValue = document.getElementById(product+"-Value").value;
    var productValueNumber = parseInt(productValue);
    var creaseNumber = 0;
    if(condition == true){
    var creaseNumber = productValueNumber + 1;
    }
    else if(condition == false && productValueNumber > 0){
    var creaseNumber = productValueNumber - 1;
    }
    var productPrice = 0 ;
    if(product == "Phone"){
    productPrice = creaseNumber*1219;
    }
    else if(product == "Case"){
    productPrice = creaseNumber*59;
    }
    document.getElementById(product+"-Price").innerText=productPrice;
    document.getElementById(product+"-Value").value=creaseNumber;
    calculator();
}

//To Calculate SubTotal,Tax & Total
function calculator(){
    let phoneNumber = dataType("Phone");
    let caseNumber = dataType("Case");

    let subTotal = phoneNumber*1219 + caseNumber*59;
    document.getElementById("Sub-Total").innerText=subTotal;

    let tax = Math.round(subTotal * 0.07);
    document.getElementById("Tax").innerText=tax;

    let total = subTotal + tax ; 
    document.getElementById("Total").innerText=total;
}
//To Covert String Data Type To Number and Avoid Duplicate/Similar Code
function dataType(product){
    let productPrice = document.getElementById(product+"-Value").value;
    let productNumber = parseInt(productPrice);
    return productNumber;
}