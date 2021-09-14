//declare variable for function below
var i = 0;
var images = [];
var links = [];
var time = 3000;

//change images via array
images[0] = 'promotion-assets/bed(1).jpg';
images[1] = 'promotion-assets/dinningtable(1).jpg';
images[2] = 'promotion-assets/sofa(1).jpg';
images[3] = 'promotion-assets/shelvesdecoration(5).jpg';

//change links via array
links[0] = '../productcatalog/bedroom/bed/detailsbed1.html';
links[1] = '../productcatalog/table/detailsdining-table1.html';
links[2] = '../productcatalog/chair/detailssofa1.html';
links[3] = '../productcatalog/shelves/detailswardrobe1.html';

function changeSlides(){
    //change images via array
    var slide = document.getElementById("slide");
    slide.src = images[i];

    //change links via array
    var linkBox = document.getElementById("linkBox");
    linkBox.href = links[i];
    
    //change active dot
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
//auto load when access the webpage
window.onload = changeSlides();

