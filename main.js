//Increment of cart
const plusBtn = document.getElementById("plusBtn");
let cartValue = document.getElementById("cartValueplus").value;
let cartValueNumber = parseInt(cartValue);
let iphonePrice = 1219;
plusBtn.addEventListener("click", function(){

    cartValueNumber = cartValueNumber +1;
    document.getElementById("cartValueplus").value = cartValueNumber;

    // let iphonePriceSpot = document.getElementById("iphonePrice").innerText;
    priceCalculation(cartValueNumber, iphonePrice);
});

//Discrement of cart

const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function(){
    if(cartValueNumber > 1){
        cartValueNumber = cartValueNumber -1;
        document.getElementById("cartValueplus").value = cartValueNumber;
        priceCalculation(cartValueNumber, iphonePrice);
    }
    else{
        alert("Cart Value cant be zero");
    }
});


function priceCalculation(cartValueNumber, iphonePrice){
    let totalPrice = cartValueNumber * iphonePrice;
    document.getElementById("iphonePrice").innerText = totalPrice;
}