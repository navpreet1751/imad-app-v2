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
    element.innerHTML = `<h2>You Clicked !!! i am going away :(</h2> <hr/> <h3>No of clicks made are  <span id ="count">0</span></h3>`;
   
};

element.onclick = function(){
    alert('Inside function');
    //var interval = setInterval(moveRight,10);
    var request = new XMLHttpRequest();
    alert('On Ready State');
    request.onreaystatechange = function (){
        alert('request.readystate');
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                alert('counter');
                document.getElementById('count').innerHtml = counter;
                //var p = document.getElementById('count');
                //p.innerHTML = counter.toString();
                
            }
        }
    };
    request.open('GET','http://navpreet1751.imad.hasura-app.io/counter',true);
    request.send(null)
    
   element.innerHTML = `<h2>You Clicked !!! i am going away :(</h2> <hr/> <h3>No of clicks made are  <p id ="count">0</p></h3>`;
   
};