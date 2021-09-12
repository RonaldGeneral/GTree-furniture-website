fetch("../mock-database/product.json")
    .then(response => response.json())
    .then(data => {
        var orderData = {};
        orderData = data;
        //retrieve data from local storage
        Storage.prototype.setObj = function(key, obj) {
            return this.setItem(key, JSON.stringify(obj))
        }
        Storage.prototype.getObj = function(key) {
              return JSON.parse(this.getItem(key))
        }

        //localStorage.setObj("cartProduct", ["chair1", "chair2"]);
        //localStorage.setObj("cartQty", ["3", "5"]);
        var product = localStorage.getObj("cartProduct");
        var qty = localStorage.getObj("cartQty");
        
        const item = [], itemQuantity = [], itemPrice = [];
        
        //Display cart product according to items added to cart
        for(var i = 0; i < product.length; i++){
            if (product[i] != "null"){
                var str = '<tr id="row$"><td><input type="checkbox" id="item$" name="chair"></td><td><a href="..@/details%.html"><img src="../mock-database/product-assets/%.png" alt="furniture $"></a></td><td><h2 class="name" id="name$">The Chair</h2></td><td><h2 class="unitPrice" id="unitPrice$">9999</h2></td><td><h2 class="quantity"><input type="number" id="quantity$" class="quantity" name="quantity" min="1" max="99"></h2></td><td><h2 class="totalItemPrice" id="totalItemPrice$">9999</h2></td><td><button type="button" id=\"delete$\">&#10060;</button></td></tr>';
                str = str.replace(/\$/g, i);
                str = str.replace(/%/g, product[i]);
                str = str.replace("@", orderData[product[i]]["path"]);
                document.getElementById("product").innerHTML += str;
                document.getElementById("row"+i).style.display = "table-row";
                //document.getElementById("quantity"+i).value = qty[i];
                document.getElementById("name"+i).innerHTML = orderData[product[i]]["productName"];
                document.getElementById("unitPrice"+i).innerHTML = orderData[product[i]]["unitPrice"];
                document.getElementById("totalItemPrice"+i).innerHTML = orderData[product[i]]["unitPrice"] * qty[i];   
                item[i] = "unselected";
                itemQuantity[i] = 0;
                itemPrice[i] = 0;
            }
        }

        for(var i = 0; i < product.length; i++){
            if (product[i] != "null"){
                document.getElementById("quantity"+i).value = qty[i];
            }
        }
        
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

        //Add event listener to each item
        for(var x = 0; x < product.length; x++){
            if (product[x] != "null"){
                document.getElementById("item"+x).addEventListener("click", function() {
                    var index = getItemIndex(this);
                    addItem(index, document.getElementById("quantity"+index).value);});
                document.getElementById("quantity"+x).addEventListener("change", function() {
                    var index = getQtyIndex(this);
                    addItem(index, document.getElementById("quantity"+index).value);});
                document.getElementById("delete"+x).addEventListener("click", function() {
                    var index = getDltIndex(this);
                    deleteItem(index)});
            }
        }
        document.getElementById("selectAll").addEventListener("click", function() {selectAll();});
        document.getElementById("checkout").addEventListener("click", function() {checkout();});

        function selectAll(){
            var allTick = true;
            for (var i = 0; i < product.length; i++) {
                if (product[i] != "null"){
                    if ((!document.getElementById("item"+i).checked) && (item[i] != "deleted")){
                        allTick = false;
                        document.getElementById("item"+i).checked = true;
                        addItem(i, document.getElementById('quantity'+i).value);
                    }
                }   
            }
            if (allTick == true){
                for (var i = 0; i < product.length; i++){
                    if (product[i] != "null"){
                        if (item[i] == "selected"){
                            document.getElementById("item"+i).checked = false;
                            addItem(i, document.getElementById('quantity'+i).value);
                        }
                    }
                }
                document.getElementById("selectAll").checked = false;
            }
        }
        
        function deleteItem(i){
            if (product[i] != "null"){
                document.getElementById("row"+i).style.display="none";
                document.getElementById("selectAll").checked = false;
                if (document.getElementById("item"+i).checked == true){
                    itemQuantity[i] = 0;
                    itemPrice[i] = 0;
                    document.getElementById("item"+i).checked = false;
                    addTotalItem();
                }
                item[i] = "deleted";
                product[i] = "null";
                localStorage.setObj("cartProduct", product);
                qty[i] = "null";
                localStorage.setObj("cartQty", qty);
            }
        }
        
        function addItem(i,quantity){
            if (product[i] != "null"){
                quantity = parseInt(quantity);
                qty[i] = quantity;
                localStorage.setObj("cartQty", qty);
                itemQuantity[i] = quantity;
                itemPrice[i] = parseFloat(orderData[product[i]]["unitPrice"]) * quantity;
                document.getElementById("totalItemPrice"+i).innerHTML = itemPrice[i];
                if (document.getElementById("item"+i).checked){
                    item[i] = "selected";
                    addTotalItem();
                }
                else{
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
            var totalPrice = 0, totalQuantity = 0;
            for (var i = 0; i < product.length; i++){
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
            const selectedProduct = [], selectedQty = [], selectedPrice = [], selectedUnitPrice = [];
            if (product.length == 0){
                alert("Your Shopping Cart is empty!");
            }
            else{
                for (var i = 0; i < product.length; i++){
                    if (item[i] == "selected" && product[i] != "null"){
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
                for (var i = product.length; i >= 0; i--){
                    if (product[i] == "null"){
                        product.splice(i, 1);
                        qty.splice(i, 1);
                        localStorage.setObj("cartProduct", product);
                        localStorage.setObj("cartQty", qty);
                    }
                }
                setTimeout(function(){ location.href = "../checkout/checkout.html"; }, 0.000001);
            } 
        }
    });





