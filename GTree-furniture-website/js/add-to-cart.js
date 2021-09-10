async function fetchObj() {
    return(await(fetch("/mock-database/product.json"))).json();
}

document.addEventListener("DOMContentLoaded", async () => {
    
    let data = {};

    try {
        data = await fetchObj();
    } catch (e) {
        console.log("Error!");
        console.log(e);
    }

    
    //get product id
    var urlName = window.location.href;
    var htmlName = urlName.split("details").pop();
    var productID = htmlName.split(".html")[0];

    //get product details
    var productData = data[productID];
    var unitPrice = productData["unitPrice"];
    

    //allow js to add array inside localstorage and access it 
    //by parsing it to json format -setObj, -getObj
    Storage.prototype.setObj = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj))
    }
    Storage.prototype.getObj = function(key) {
        return JSON.parse(this.getItem(key))
    }

    //remove the mistake on quantity line
    var table = document.getElementsByTagName("table")[0];
    var tdGrp = table.getElementsByTagName("td");

    var qtyIndex;

    for(var i = 0;i < tdGrp.length;i++){
        var tdContent = tdGrp[i].innerHTML;
        if(tdContent.search("Quantity") != -1){
            qtyIndex = i;
        }
    }

    var mistakeText = tdGrp[qtyIndex].childNodes[2];
    mistakeText.nodeValue = "";

    //add product code on page
    var codeIndex;

    for(var i = 0;i < tdGrp.length;i++){
        var tdContent = tdGrp[i].innerHTML;
        if(tdContent.search("Product Code") != -1){
            codeIndex = i;
        }
    }

    var productCodeText = tdGrp[codeIndex];
    console.log(productCodeText);
    productCodeText.innerHTML = "Product Code : " + productID;


    //get the td containing total amount
    var findIndex;

    for(var i = 0;i < tdGrp.length;i++){
        var tdContent = tdGrp[i].innerHTML;
        if(tdContent.search("Total") != -1){
            findIndex = i;
        }
    }

    var textNode = tdGrp[findIndex].childNodes[0];

    //get element of quantity input and initialize
    qtyInput = document.getElementById("quan");
    qtyInput.value = 1;
    qtyInput.min = 1;
    displayTotal(textNode);

    qtyInput.addEventListener("change", function(){
        if(qtyCheck(qtyInput.value) != false){
            displayTotal(textNode);
        } else{
            qtyInput.value = 1;
        }
            
    });


    //get 2 button element
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

    function displayTotal(textNode){
        //get total price 
        var qty = document.getElementById("quan").value;
        var totalPrice = unitPrice * qty;

        var strTotal = totalPrice.toLocaleString("en",{minimumFractionDigits: 2, maximumFractionDigits: 2});
        textNode.nodeValue = "Total : RM " + strTotal;
    }

});

