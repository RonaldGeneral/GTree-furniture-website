var index = 1;
function showArticle(index){
    for (var i = 0; i < 4; i++)
    {
        document.getElementById("article"+i).style.display = "none";
    }
    document.getElementById("article"+index).style.display = "block";
}