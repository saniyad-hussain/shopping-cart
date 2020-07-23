const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function(){
    let cartValuePlus = document.getElementById("cartValueplus").value;
    let cartValuePlusNumber = parseInt(cartValuePlus);
    cartValuePlusNumber = cartValuePlusNumber +1;
    document.getElementById("cartValueplus").value = cartValuePlusNumber;

    let iphonePriceSpot = document.getElementById("iphonePrice").innerText;
    let iphonePrice = 1219;
    let totalPrice = cartValuePlusNumber * iphonePrice;
    document.getElementById("iphonePrice").innerText = totalPrice;
});