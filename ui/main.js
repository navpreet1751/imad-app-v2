console.log('Loaded!');

var element = document.getElementById('maintxt');



var image = document.getElementById('singh');
var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 1;
    image.style.marginLeft= marginLeft + 'px';
}
image.onclick = function(){
    var interval = setInterval(moveRight,10);
    element.innerHTML = 'I am going away';
   
};

element.onclick = function(){
    
    element.innerHTML = 'I am going away';
   
};