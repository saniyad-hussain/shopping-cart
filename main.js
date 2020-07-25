//Increment of cart
const plusBtn = document.getElementById("plusBtn");
let cartValue = document.getElementById("cartValueplus").value;
let cartValueNumber = parseInt(cartValue);
let cartValuepNext = document.getElementById("cartValueplusNext").value;
let cartValuepNextNumber = parseInt(cartValuepNext);
let iphonePrice = 10;
let iphoneCase = 5;

plusBtn.addEventListener("click", function(){
    //addCartNumber("cartValueplus");
    cartValueNumber = cartValueNumber +1;
    document.getElementById("cartValueplus").value = cartValueNumber;
    priceCalculation(cartValueNumber, iphonePrice, "iphonePrice");
});


//Discrement of cart

const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function(){
        //minusCartNumber(cartValueNumber, "cartValueplus");
        if(cartValueNumber > 0){
            cartValueNumber = cartValueNumber - 1;
            document.getElementById("cartValueplus").value = cartValueNumber;
        }
        else{
            alert("Cart Value cant be zero");
        }
        priceCalculation(cartValueNumber, iphonePrice, "iphonePrice");
   
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

function removeButton(id){
    const cartItem = event.target.parentNode.parentNode.parentNode;
    cartItem.style.display = "none";
}

// Plus Button Function

function addCartNumber(id){
    cartValueNumber = cartValueNumber +1;
    document.getElementById(id).value = cartValueNumber;
}

//Minus Button Function

function minusCartNumber(cartValueM, id){
    if(cartValueM > 0){
        cartValueM = cartValueM - 1;
        document.getElementById(id).value = cartValueM;
    }
    else{
        alert("Cart Value cant be zero");
    }
}

//Price calculation function

function priceCalculation(cartValue, productPrice, id){
    let totalPrice = cartValue * productPrice;
    document.getElementById(id).innerText = totalPrice;
    let subTotal = document.getElementById("subTotal").innerText;
    let subTotalNumber = parseInt(subTotal);
    let currentTargetId = event.currentTarget.getAttribute('id');
    if(currentTargetId == 'plusBtn' || currentTargetId == 'plusBtnNext' ){
        document.getElementById("subTotal").innerText = subTotalNumber + productPrice; 
        document.getElementById("tax").innerText = (subTotalNumber + productPrice) * 0.05;
        let tax = parseFloat(document.getElementById("tax").innerText);
        document.getElementById("grandTotal").innerText = (subTotalNumber + productPrice) + tax;
    }
    else if(currentTargetId == 'minusBtn' || currentTargetId == 'minusBtnNext'){
         document.getElementById("subTotal").innerText = subTotalNumber - productPrice; 
         document.getElementById("tax").innerText = (subTotalNumber - productPrice) * 0.05;
         let tax = parseFloat(document.getElementById("tax").innerText);
         document.getElementById("grandTotal").innerText = (subTotalNumber - productPrice) + tax;
    }
    
}


//Next Cart Item Plus

const plusBtnNext = document.getElementById("plusBtnNext")
plusBtnNext.addEventListener("click", function(){
    //addCartNumber("cartValueplusNext");
    cartValuepNextNumber = cartValuepNextNumber +1;
    document.getElementById("cartValueplusNext").value = cartValuepNextNumber;
    priceCalculation(cartValuepNextNumber, iphoneCase, "iphoneCasePrice");
});


// Next Cart Item Minus

const minusBtnNext = document.getElementById("minusBtnNext");
minusBtnNext.addEventListener("click", function(){
    //minusCartNumber(cartValuepNextNumber, "cartValueplusNext");
    if(cartValuepNextNumber > 0){
        cartValuepNextNumber = cartValuepNextNumber - 1;
        document.getElementById("cartValueplusNext").value = cartValuepNextNumber;
    }
    else{
        alert("Cart Value cant be zero");
    }
    priceCalculation(cartValuepNextNumber, iphoneCase, "iphoneCasePrice");
});