// //Number Increment
// document.getElementById("Button-Plus").addEventListener("click",function(){
//     // var inputValue = document.getElementById("Input-Value").value;
//     // var inputNumber = parseInt(inputValue);
//     // var addingNumber = inputNumber + 1;
//     // document.getElementById("Input-Value").value=addingNumber;
//     crement(true);
// })
// document.getElementById("Button-Minus").addEventListener("click",function(){
//     // var inputValue = document.getElementById("Input-Value").value;
//     // var inputNumber = parseInt(inputValue);
//     // var addingNumber = inputNumber - 1 ;
//     // document.getElementById("Input-Value").value=addingNumber;
//     crement(false);
// })

//Case Increment and Decrement
// document.getElementById("Case-Button-Plus").addEventListener("click",function(){
//     caseCrement(true);
// })
// document.getElementById("Case-Button-Minus").addEventListener("click",function(){
//     caseCrement(false);
// })


//Crement Function 
// function crement(crease){
//     var inputValue = document.getElementById("Input-Value").value;
//     var inputNumber = parseInt(inputValue);
//     var addingNumber = 0 ;
//     if(crease == true){
//         addingNumber = inputNumber + 1;
//     }else if(crease == false && inputNumber > 0){
//         addingNumber = inputNumber - 1;
//     }
//     var phonePrice = addingNumber * 1219;
//     document.getElementById("Phone-Price").innerText=phonePrice;
//     document.getElementById("Input-Value").value=addingNumber;
// }
document.getElementById("Button-Plus").addEventListener("click",function(){
    caseCrement("Phone",true)
})
document.getElementById("Button-Minus").addEventListener("click",function(){
    caseCrement("Phone",false)
})
document.getElementById("Case-Button-Plus").addEventListener("click",function (){
    caseCrement("Case",true)
})
document.getElementById("Case-Button-Minus").addEventListener("click",function(){
    caseCrement("Case",false)
})
//Case Crement Function
function caseCrement(product,crease){
    var inputValue = document.getElementById(product+"-Value").value;
    var inputNumber = parseInt(inputValue);
    var addingNumber = 0 ;
    if(crease == true){
        addingNumber = inputNumber + 1;
    }else if(crease == false && inputNumber > 0){
        addingNumber = inputNumber - 1;
    }
    var productPrice = 0;
    if(product == "Phone"){
        productPrice = addingNumber * 1219;
    }
    else if(product == "Case"){
        productPrice = addingNumber * 59;
    }
    document.getElementById(product+"-Price").innerText=productPrice;
    document.getElementById(product+"-Value").value=addingNumber;
    calculator()
}

function calculator(){
    const phoneCount = caseNphone("Phone");
    const caseCount = caseNphone("Case");

    const subTotal = phoneCount*1219 + caseCount*59;
    document.getElementById("Sub-Total").innerText=subTotal;

    const tax = Math.round((subTotal/100)*7);
    document.getElementById("Tax").innerText=tax;

    const total = subTotal + tax;
    document.getElementById("Total").innerText=total;
}
function caseNphone(product){
    const productInput = document.getElementById(product+"-Value");
    const productCount = parseInt(productInput.value);
    return productCount;
}


// function caseCrement(crease){
    //     var inputValue = document.getElementById("CaseInput-Value").value;
//     var inputNumber = parseInt(inputValue);
//     var addingNumber = 0 ;
//     if(crease == true){
//         addingNumber = inputNumber + 1;
//     }else if(crease == false && inputNumber > 0){
    //         addingNumber = inputNumber - 1;
//     }
//     var phonePrice = addingNumber * 59;
//     document.getElementById("Case-Price").innerText=phonePrice;
//    document.getElementById("CaseInput-Value").value=addingNumber;
// }
