var i = 0;
var images = [];
var links = [];
var time = 3000;

images[0] = 'promotion-assets/bed(1).jpg';
images[1] = 'promotion-assets/dinningtable(1).jpg';
images[2] = 'promotion-assets/sofa(1).jpg';
images[3] = 'promotion-assets/shelvesdecoration(5).jpg';

links[0] = '../productcatalog/bedroom/bed/detailsbed1.html';
links[1] = '../productcatalog/table/detailsdining-table1.html';
links[2] = '../productcatalog/chair/detailssofa1.html';
links[3] = '../productcatalog/shelves/detailswardrobe1.html';

//change slide
function changeSlides(){
    var slide = document.getElementById("slide");
    slide.src = images[i];

    //change links
    var linkBox = document.getElementById("linkBox");
    linkBox.href = links[i];
    
    //fill black dot
    var dot = document.getElementsByClassName('dot');
    if(i > 0){
        dot[i-1].classList.remove("active");
    } else {
        dot[images.length - 1].classList.remove("active")
    }

    dot[i].classList.add("active");

    //reset index to 0 if exceed the length
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    //looping the func wif delay
    setTimeout("changeSlides()", time);
}
window.onload = changeSlides();

/*var zuo=document.getElementById("zuo");
var n=1;

setInterval(function(){
    if(n>4) n=1
    zuo.innerHTML="<img src='promotion-assets/product("+n+").png'/>";
    n++;

},2000);*/

