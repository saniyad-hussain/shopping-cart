//Increment of cart
const plusBtn = document.getElementById("plusBtn");
let cartValue = document.getElementById("cartValueplus").value;
let cartValueNumber = parseInt(cartValue);
let iphonePrice = 1219;
plusBtn.addEventListener("click", function(){
    addCartNumber("cartValueplus");
    priceCalculation(cartValueNumber, "iphonePrice");
});


//Discrement of cart

const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function(){
    if(cartValueNumber > 1){
        minusCartNumber("cartValueplus");
        priceCalculation(cartValueNumber, iphonePrice);
    }
    else{
        alert("Cart Value cant be zero");
    }
});

//Remove Item From Cart

const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", function(event){
    const cartItem = event.target.parentNode.parentNode.parentNode;
    cartItem.style.display = "none";
});

// Plus Button Function

function addCartNumber(id){
    cartValueNumber = cartValueNumber +1;
    document.getElementById(id).value = cartValueNumber;
}

//Minus Button Function

function minusCartNumber(id){
    cartValueNumber = cartValueNumber - 1;
    document.getElementById(id).value = cartValueNumber;
}

//Price calculation function

function priceCalculation(cartValueNumber, id){
    let totalPrice = cartValueNumber * iphonePrice;
    document.getElementById(id).innerText = totalPrice;
}


//Next Cart Item

const plusBtnNext = document.getElementById("plusBtnNext")
plusBtnNext.addEventListener("click", function(){
    addCartNumber("cartValueplusNext");
    priceCalculation(cartValueNumber, "iphoneCasePrice");
});


