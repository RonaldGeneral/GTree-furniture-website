fetch("../mock-database/product.json")
    .then(response => response.json())
    .then(data => {
        var orderData = {};
        orderData = data;

        //Deal with data in local storage
        Storage.prototype.setObj = function(key, obj) {
            return this.setItem(key, JSON.stringify(obj))
        }
        Storage.prototype.getObj = function(key) {
              return JSON.parse(this.getItem(key))
        }

        //retrieve data from local storage
        var product = localStorage.getObj("cartProduct");
        var qty = localStorage.getObj("cartQty");
        const item = [], itemQuantity = [], itemPrice = []; //item : condition of item ("deleted"/"selected"/"unselected"); itemQuantity : total quantity of an item; itemPrice : total price of an item;
        
        //Display cart product according to the number of items added to cart
        for(var i = 0; i < product.length; i++){
            if (product[i] != "null"){
                var str = '<tr id="row$"><td><input type="checkbox" id="item$" name="chair"></td><td><a href="..@/details%.html"><img src="../mock-database/product-assets/%.png" alt="furniture $"></a></td><td><h2 class="name" id="name$">The Chair</h2></td><td><h2 class="unitPrice" id="unitPrice$"></h2></td><td><h2 class="quantity"><input type="number" id="quantity$" class="quantity" name="quantity" min="1" max="99"></h2></td><td><h2 class="totalItemPrice" id="totalItemPrice$"></h2></td><td><button type="button" id=\"delete$\">&#10060;</button></td></tr>';
                str = str.replace(/\$/g, i);
                str = str.replace(/%/g, product[i]);
                str = str.replace("@", orderData[product[i]]["path"]);
                document.getElementById("product").innerHTML += str;
                document.getElementById("row"+i).style.display = "table-row";
                document.getElementById("name"+i).innerHTML = orderData[product[i]]["productName"];
                document.getElementById("unitPrice"+i).innerHTML = orderData[product[i]]["unitPrice"].toFixed(2);
                document.getElementById("totalItemPrice"+i).innerHTML = (orderData[product[i]]["unitPrice"] * qty[i]).toFixed(2);   
                item[i] = "unselected";
                itemQuantity[i] = 0;
                itemPrice[i] = 0;
            }
        }
        for(var i = 0; i < product.length; i++){
            if (product[i] != "null"){ //null : deleted from shopping cart
                document.getElementById("quantity"+i).value = qty[i];
            }
        }
        
        //Add event listener to each item
        for(var i = 0; i < product.length; i++){
            if (product[i] != "null"){
                //Get the id of the element and add function to it
                document.getElementById("item"+i).addEventListener("click", function() {
                    var index = getItemIndex(this);
                    addItem(index, document.getElementById("quantity"+index).value);});
                document.getElementById("quantity"+i).addEventListener("change", function() {
                    var index = getQtyIndex(this);
                    addItem(index, document.getElementById("quantity"+index).value);});
                document.getElementById("delete"+i).addEventListener("click", function() {
                    var index = getDltIndex(this);
                    deleteItem(index);});
            }
        }
        document.getElementById("selectAll").addEventListener("click", function() {selectAll();});
        document.getElementById("checkout").addEventListener("click", function() {checkout();});

        //Get element id for adding event listener
        function getItemIndex(obj){
            var itemId = obj.id;
            var index = itemId.split("item")[1];
            return index;
        }

        function getQtyIndex(obj){
            var qtyId = obj.id;
            var index = qtyId.split("quantity")[1];
            return index;
        }

        function getDltIndex(obj){
            var dltId = obj.id;
            var index = dltId.split("delete")[1];
            return index;
        }

        //Function to process items in shopping cart
        function selectAll(){
            var allTick = true;
            //Select all the items
            for (var i = 0; i < product.length; i++) {
                if (!document.getElementById("item"+i).checked && product[i] != "null"){
                    allTick = false;
                    document.getElementById("item"+i).checked = true;
                    addItem(i, document.getElementById('quantity'+i).value);
                }
            }
            //if every item is selected, unselect all the items
            if (allTick == true){
                for (var i = 0; i < product.length; i++){
                    if (product[i] != "null" && item[i] == "selected"){
                        document.getElementById("item"+i).checked = false;
                        addItem(i, document.getElementById('quantity'+i).value);
                    }
                }
                document.getElementById("selectAll").checked = false;
            }
        }
        
        function deleteItem(i){
            //Delete the item if the item has not been deleted
            if (product[i] != "null"){
                document.getElementById("row"+i).style.display="none";
                document.getElementById("selectAll").checked = false;
                //Remove the item's price from total price if it has been selected
                if (document.getElementById("item"+i).checked == true){
                    itemQuantity[i] = 0;
                    itemPrice[i] = 0;
                    document.getElementById("item"+i).checked = false;
                    addTotalItem();
                }
                //Set the item condition to deleted and set the item as null
                item[i] = "deleted";
                product[i] = "null";
                localStorage.setObj("cartProduct", product); //Update its condition in local storage
                qty[i] = "null";
                localStorage.setObj("cartQty", qty);
            }
        }
        
        function addItem(i,quantity){
            //Proceed the function if the item has not been deleted
            if (product[i] != "null"){
                quantity = parseInt(quantity);
                qty[i] = quantity;
                localStorage.setObj("cartQty", qty);
                itemQuantity[i] = quantity; //Add the item's quantity into array of total quantity of every item 
                itemPrice[i] = parseFloat(orderData[product[i]]["unitPrice"]) * quantity; //Add the item's price into array of total price of every item 
                document.getElementById("totalItemPrice"+i).innerHTML = itemPrice[i].toFixed(2);
                if (document.getElementById("item"+i).checked){ //Take the item into calculation of total price if it is selected
                    item[i] = "selected";
                    addTotalItem();
                }
                else{
                    //Remove the item from calculation of the total price if it is unselected
                    if (item[i] == "selected"){
                        itemQuantity[i] = 0;
                        itemPrice[i] = 0;
                        addTotalItem();
                        document.getElementById("selectAll").checked = false;
                        item[i] = "unselected";
                    }
                }
            }        
        }
        
        function addTotalItem(){
            var totalPrice = 0, totalQuantity = 0; //Initialise all the total price and total quantity
            for (var i = 0; i < product.length; i++){
                //Add the total price and total quantity of each item if it is not deleted
                if (product[i] != "null"){
                    itemQuantity[i] = parseInt(itemQuantity[i]);
                    itemPrice[i] = parseInt(itemPrice[i]);
                    totalQuantity += itemQuantity[i];
                    totalPrice += itemPrice[i];
                }
            }
            document.getElementById("totalItem").innerHTML = totalQuantity;
            document.getElementById("totalPrice").innerHTML = totalPrice;
        }
        
        function checkout(){
            //Create arrays to update the selected product and its details to local storage
            const selectedProductId = [], selectedProduct = [], selectedQty = [], selectedPrice = [], selectedUnitPrice = [];
            if (product.length == 0){ //Disallow the customer to checkout if the shopping cart is empty
                alert("Your Shopping Cart is empty!");
            }
            else{
                //Update the selected product and its details to local storage
                for (var i = 0; i < product.length; i++){
                    if (item[i] == "selected" && product[i] != "null"){
                        selectedProductId.push(product[i]);
                        localStorage.setObj("selectedProductId", selectedProductId);
                        selectedProduct.push(orderData[product[i]]["productName"]);
                        localStorage.setObj("selectedProduct", selectedProduct);
                        selectedUnitPrice.push(orderData[product[i]]["unitPrice"]);
                        localStorage.setObj("selectedUnitPrice", selectedUnitPrice);
                        selectedQty.push(qty[i]);
                        localStorage.setObj("selectedQty", selectedQty);
                        selectedPrice.push(itemPrice[i]);
                        localStorage.setObj("selectedPrice", selectedPrice);
                        item[i] = "deleted";
                        product[i] = "null";
                        qty[i] = "null";
                    }
                }
                //Remove the deleted product from local storage
                for (var i = product.length; i >= 0; i--){
                    if (product[i] == "null"){
                        product.splice(i, 1);
                        qty.splice(i, 1);
                        localStorage.setObj("cartProduct", product);
                        localStorage.setObj("cartQty", qty);
                    }
                }
                setTimeout(function(){ location.href = "../checkout/checkout.html"; }, 0.000001); //Proceed to checkout webpage
            }
        }
    });





