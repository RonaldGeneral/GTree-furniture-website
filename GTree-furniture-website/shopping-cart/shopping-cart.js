const item = ["unselected","unselected","unselected"], itemQuantity = [0, 0, 0], itemPrice = [0, 0, 0];

function selectAll(){
    var allTick = true;
    for (var i = 0; i < 3; i++) {
        if ((!document.getElementById("item"+i).checked) && (item[i] != "deleted")){
            allTick = false;
            document.getElementById("item"+i).checked = true;
            addItem(i, document.getElementById('quantity'+i).value, 9999);
        }   
    }
    if (allTick == true){
        for (var i = 0; i < 3; i++){
            if (item[i] == "selected"){
                document.getElementById("item"+i).checked = false;
                addItem(i, document.getElementById('quantity'+i).value, 9999);
            }
        }
        document.getElementById("selectAll").checked = false;
    }
}

function deleteItem(i,quantity, price){
    quantity = parseInt(quantity);
    price = parseInt(price);
    document.getElementById("row"+i).style.display="none";
    document.getElementById("selectAll").checked = false;
    if (document.getElementById("item"+i).checked == true){
        itemQuantity[i] = 0;
        itemPrice[i] = 0;
        document.getElementById("item"+i).checked = false;
        addTotalItem();
    }
    item[i] = "deleted";
}

function addItem(i,quantity, price){
    quantity = parseInt(quantity);
    price = parseInt(price);
    if (document.getElementById("item"+i).checked){
        item[i] = "selected";
        itemQuantity[i] = quantity;
        itemPrice[i] = price * quantity;
        addTotalItem();
    }
    if (!document.getElementById("item"+i).checked){
        if (item[i] == "selected"){
            itemQuantity[i] = 0;
            itemPrice[i] = 0;
            addTotalItem();
            document.getElementById("selectAll").checked = false;
            item[i] = "unselected";
        }
    }
}

function addTotalItem(){
    var totalPrice = 0, totalQuantity = 0;
    for (var i = 0; i < 3; i++){
        totalQuantity += itemQuantity[i];
        totalPrice += itemPrice[i];
    }
    document.getElementById("totalItem").innerHTML = totalQuantity;
    document.getElementById("totalPrice").innerHTML = totalPrice;
}

