//Increment of cart
const plusBtn = document.getElementById("plusBtn");
let cartValue = document.getElementById("cartValueplus").value;
let cartValueNumber = parseInt(cartValue);
let cartValuepNext = document.getElementById("cartValueplusNext").value;
let cartValuepNextNumber = parseInt(cartValuepNext);
let iphonePrice = 10;
let iphoneCase = 5;

plusBtn.addEventListener("click", function(){
    addCartNumber("cartValueplus");
    priceCalculation(iphonePrice, "iphonePrice");
});


//Discrement of cart

const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function(){
        minusCartNumber("cartValueplus");
        priceCalculation(iphonePrice, "iphonePrice");
   
});

//Remove Item From Cart

const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", function(event){
    removeButton();
});

// Remove 2nd Item From Cart 

const removeBtn2 = document.getElementById("removeBtn2");
removeBtn2.addEventListener("click", function(event){
    removeButton();
});


// Remove Function

function removeButton(){
    const cartItem = event.target.parentNode.parentNode.parentNode;
    cartItem.style.display = "none";
}

// Plus Button Function

function addCartNumber(id){
    cartValueNumber = cartValueNumber +1;
    document.getElementById(id).value = cartValueNumber;
}

//Minus Button Function

function minusCartNumber(id){
    if(cartValueNumber > 1){
        cartValueNumber = cartValueNumber - 1;
        document.getElementById(id).value = cartValueNumber;
    }
    else{
        alert("Cart Value cant be zero");
        //document.getElementById("subTotal").innerText =  ;
    }
}

//Price calculation function

function priceCalculation(productPrice, id){
    let totalPrice = cartValueNumber * productPrice;
    document.getElementById(id).innerText = totalPrice;
    let subTotal = document.getElementById("subTotal").innerText;
    let subTotalNumber = parseInt(subTotal);
    let currentTargetId = event.currentTarget.getAttribute('id');
    if(currentTargetId == 'plusBtn' || currentTargetId == 'plusBtnNext' ){
        document.getElementById("subTotal").innerText = subTotalNumber + productPrice; 
    }
    else if(currentTargetId == 'minusBtn' || currentTargetId == 'minusBtnNext'){
         if(cartValueNumber == 1){
            document.getElementById("subTotal").innerText = subTotalNumber;
         }
         document.getElementById("subTotal").innerText = subTotalNumber - productPrice; 
    }
}


//Next Cart Item Plus

const plusBtnNext = document.getElementById("plusBtnNext")
plusBtnNext.addEventListener("click", function(){
    addCartNumber("cartValueplusNext");
    priceCalculation(iphoneCase, "iphoneCasePrice");
});


// Next Cart Item Minus

const minusBtnNext = document.getElementById("minusBtnNext");
minusBtnNext.addEventListener("click", function(){
    minusCartNumber("cartValueplusNext");
    priceCalculation(iphoneCase, "iphoneCasePrice");
});