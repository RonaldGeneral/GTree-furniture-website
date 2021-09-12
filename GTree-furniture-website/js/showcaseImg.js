//get the main img element
var th = document.querySelectorAll("th[rowspan]")[0];
var mainImg = th.childNodes[0];
//get thumbnail group
var thumbnailGrp = document.getElementsByClassName("thumbnail");
var activeImg = document.getElementsByClassName("active");

for(var i = 0;i < thumbnailGrp.length;i++){
    thumbnailGrp[i].addEventListener("mouseover",function(){

        if (activeImg.length > 0){
            activeImg[0].classList.remove("active");
        }

        this.classList.add("active");

        mainImg.src = this.src;
    });
}


//get button element
var buttonLeft = document.getElementById("goLeft");
var buttonRight = document.getElementById("goRight");
var contentContainer = document.getElementById("content");
const speed = 40,
    distance = 450,
    step = 20;

buttonLeft.addEventListener("click", function(){
    
    //make the scrolling smooth
    var scrollAmount = 0;        

    var slideTimer = setInterval(function(){
        contentContainer.scrollLeft -= step;

        scrollAmount += step;

        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
    
});

buttonRight.addEventListener("click", function(){
    
    //make the scrolling smooth
    var scrollAmount = 0;

    var slideTimer = setInterval(function(){
        contentContainer.scrollLeft += step;

        scrollAmount += step;

        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
    
});


