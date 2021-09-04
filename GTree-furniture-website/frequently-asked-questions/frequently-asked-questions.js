const display = [];
for (var i = 0; i < 26; i++){
    display[i] = false;
}
function showAnswer(i){
    if (display[i] == false){
        document.getElementById("answer"+i).style.display = "block";
        display[i] = true;
    }
    else
    {
        document.getElementById("answer"+i).style.display = "none";
        display[i] = false;
    }
}