var currentCount = parseInt( document.getElementById("countNumDisplay").innerHTML,10);


document.getElementById('upBtn').addEventListener('click', function(){
    document.getElementById('countNumDisplay').innerHTML = ++currentCount;
});


document.getElementById('downBtn').addEventListener('click', function(){
    if(currentCount > 0)
        document.getElementById('countNumDisplay').innerHTML = --currentCount;
});