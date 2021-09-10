window.addEventListener("DOMContentLoaded", function() {
//allow js to add array inside localstorage and access it 
//by parsing it to json format -setObj, -getObj
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

//initialize quantity
document.getElementById("quan").value = 1;

//get 2 button elem
var bContainer = document.getElementsByClassName("add");
var span = bContainer[0];

var buttons = span.children;

var addCart = buttons[0];
var buy = buttons[1];

addCart.addEventListener("click", saveData);
buy.addEventListener("click", function(){
    saveData();
    goToCart();
});


//to submit productid and qty to local storage
function saveData(){
    //get product id
    var urlName = window.location.href;
    var htmlName = urlName.split("details").pop();
    var productID = htmlName.split(".html")[0];

    //get qty of product
    var qty = document.getElementById("quan").value;
    qty = parseInt(qty);

    if(qtyCheck(qty) == false){
        return false;
    }

    //check if exists cart var in localstorage
    var storage = window.localStorage;

    var hasProdData = storage["cartProduct"] != undefined;
    var hasQtyData = storage["cartQty"] != undefined;
    //if one true one false is unusual,therefore clear it
    if(hasProdData != hasQtyData){
        storage.removeItem("cartProduct");
        storage.removeItem("cartQty");
        hasProdData = hasQtyData = false;
    }

    //if no data exists be4
    if(hasProdData == false){
        storage.setObj("cartProduct",[`${productID}`]);
        storage.setObj("cartQty",[qty]);
    } else{
        //if hav data,thn retrieve from storage,append it,thn reupload
        var tempProduct = [];
        var tempQty = [];
        tempProduct = storage.getObj("cartProduct");
        tempQty = storage.getObj("cartQty");

        //prompt error and resets if different length of array
        if(tempProduct.length != tempQty.length){
            alert("localStorage data for cart has errors! Cart is cleared!");
            storage.removeItem("cartProduct");
            storage.removeItem("cartQty");
            tempProduct = [];
            tempQty = [];
        }

        //check if got same productId,if yes ,add qty onli
        var hasThisProduct = false;
        for(var i = 0;i < tempProduct.length;i++){
            if(tempProduct[i] == productID){
                hasThisProduct = true;
                var index = i;
            }
        }
        
        if(hasThisProduct){
            tempQty[index] += qty;
        } else{
            //append data on the temporary var
            tempProduct.push(`${productID}`);
            tempQty.push(qty);
        }
        //reupload data to storage
        storage.setObj("cartProduct",tempProduct);
        storage.setObj("cartQty",tempQty);

    }
}

function goToCart(){
    //get qty of product
    var qty = document.getElementById("quan").value;
    qty = parseInt(qty);

    if(qtyCheck(qty) == false){
        return false;
    }
    window.location.href = "/shopping-cart/shopping-cart.html";
}

function qtyCheck(qty){
    if (!(qty > 0 && qty < 100)){
        alert("Invalid quantity! Please enter quantity more than 0 and less than 100.");
        return false;
    }
}

});

