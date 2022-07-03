Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

localStorage.setObj("cartProduct", ["chair1", "chair2"]);
localStorage.setObj("cartQty", ["269", "397"]);
localStorage.setObj("cartPrice", ["999", "888"]);
var product = localStorage.getObj("cartProduct");
var qty = localStorage.getObj("cartQty");
var price = localStorage.getObj("cartPrice");
const item = [], itemQuantity = [], itemPrice = [];


for(var i = 0; i < product.length; i++)
{
    var str = '<tr id="row$"><td><input type="checkbox" id="item$" name="chair" onclick="addItem($, document.getElementById(\'quantity$\').value, document.getElementById(\'totalItemPrice$\'))"></td><td><img src="shopping-cart-assets/chair.jpg" alt="furniture $"></td><td><h2 class="name" id="name$">The Chair</h2></td><td><h2 class="unitPrice" id="unitPrice$">9999</h2></td><td><h2 class="quantity"><input type="number" id="quantity$" name="quantity" min="1" max="99" value="1" onchange="addItem($, document.getElementById(\'quantity$\').value, document.getElementById(\'totalItemPrice$\'))"></h2></td><td><h2 class="totalItemPrice" id="totalItemPrice$">9999</h2></td><td><button type="button" onclick="deleteItem($, document.getElementById(\'quantity$\').value, document.getElementById(\'totalItemPrice$\'))">&#10060;</button></td></tr>';
    for (var counter = 0; counter < 16; counter++)
        str = str.replace("$", i);
    document.getElementById("product").innerHTML += str;
    document.getElementById("row"+i).style.display = "table-row";
    document.getElementById("name"+i).innerHTML = product[i];
    document.getElementById("quantity"+i).value = qty[i];
    document.getElementById("unitPrice"+i).innerHTML = price[i];
    document.getElementById("totalItemPrice"+i).innerHTML = price[i]
    item[i] = "unselected";
    itemQuantity[i] = 0;
    itemPrice[i] = 0;
}
