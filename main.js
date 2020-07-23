//Increment of cart
const plusBtn = document.getElementById("plusBtn");
let cartValue = document.getElementById("cartValueplus").value;
let cartValueNumber = parseInt(cartValue);
let iphonePrice = 1219;
plusBtn.addEventListener("click", function(){

    cartValueNumber = cartValueNumber +1;
    document.getElementById("cartValueplus").value = cartValueNumber;
    priceCalculation(cartValueNumber, iphonePrice);
});


// Plus Button Function

// function addCartNumber(id){
    
// }


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

//Remove Item From Cart

const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", function(event){
    const cartItem = event.target.parentNode.parentNode.parentNode;
    cartItem.style.display = "none";
});



//Price calculation function

function priceCalculation(cartValueNumber, iphonePrice){
    let totalPrice = cartValueNumber * iphonePrice;
    document.getElementById("iphonePrice").innerText = totalPrice;
}


//Next Cart Item

const plusBtnNext = document.getElementById("click", function(){

});


