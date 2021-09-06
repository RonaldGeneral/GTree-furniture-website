var product = {};

fetch("../mock-database/product.json")
    .then(response => response.json())
    .then(data => {
        product = data;
    });

 function twoDec(x) {
      return Number.parseFloat(x).toFixed(2);
  }

//get file
fetch("../mock-database/track-order.json")
    .then(response => response.json())
    .then(data => {
        //the value of variable inside will disappear if go out,dk why
        var orderData = data;

        function getURLData(){
            //get order ID via url
            var url = document.location.href;
            var temp = url.split('?')[1];
            return temp.split('=')[1];
        }
        
        
        var orderID = getURLData();
        var orderIndex;
        
        //get index of order
        for(var i = 0;i < orderData.length;i++){
            if(orderData[i].orderID == orderID){
                orderIndex = i;
                }
        }
        
        //put data on table
        var table = document.getElementById('details');
        var orderDetails = orderData[orderIndex];

        //sum counter
        var qtySum = 0;
        var priceSum = 0;

        //loop in available product and put each details in a row
        for(var x = 0;x < orderDetails.product.length;x++){
            var prodName = orderDetails.product[x];
            //put image on first col
            var row = document.createElement('tr');
            var td1 = row.insertCell(0);
            var img = document.createElement('img');
            var path = "../mock-database/product-assets/" + prodName + ".png";
            img.src = path;
            img.title = product[prodName].productName;
            td1.append(img);
            table.appendChild(row);
            
            //unit price second col
            var td2 = row.insertCell(1);
            var unitPrice = product[prodName].unitPrice;
            td2.innerHTML = `RM ${twoDec(unitPrice)}`;

            //qty third col
            var td3 = row.insertCell(2);
            var qty = orderDetails.qty[x];
            td3.innerHTML = qty;
            qtySum += qty;

            //total price fourth col
            var td4 = row.insertCell(3);
            var totalPrice = unitPrice * qty;
            td4.innerHTML = `RM ${twoDec(totalPrice)}`;
            priceSum += totalPrice;
        }

        var tQty = document.getElementById('tQty');
        var tPrice = document.getElementById('tPrice');
        tQty.innerHTML = qtySum;
        tPrice.innerHTML = `RM ${twoDec(priceSum)}`;
    });




