let orderData = [];

//get file
fetch("../mock-database/track-order.json")
    .then(response => response.json())
    .then(data => {
        orderData = data;
    });



function checkInput(){
    var valid = false;
    var input = document.getElementById("orderID").value;
    //check for orderid if same as database
    for(let i = 0;i < orderData.length;i++){
        if(orderData[i].orderID == input){
            valid = true;
        }
    }

    if(valid == true){
        //link to order details and passing orderID via url
        var url = 'track-order-details.html?orderID=' + encodeURIComponent(input);
        document.location.href = url;
    } else{
        document.getElementById("invalidID").style.visibility = 'visible';
        setTimeout(
            function(){
                document.getElementById("invalidID").style.visibility = 'hidden';
            }
            ,3000
        )
    }

}