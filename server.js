var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var countr = 0;
var articletwo={
    title:'Article-Two | Navpreet Singh',
    heading:'Article-Two',
    date:'Feb 12 2017',
    content:`<p>
            This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article
        </p>
        <p>
            This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article
        </p>
        <p>
            This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article
        </p>`
        
};
var articles = {
    'article-three': {
        title:'Article three | Navpreet Singh',
        heading:'Article three',
        date:'Feb 13 2017',
        content:`<p>
            This is the content of my third article.
        </p>
        <p>
            This is the content of my third article.
        </p>
        <p>
            This is the content of my third article.
        </p>`},
    'article-four': {
        title:'Article Four | Navpreet Singh',
        heading:'Article Four',
        date:'Feb 13 2017',
        content:`<p>
            This is the content of my fourth article.
        </p>
        <p>
            This is the content of my fourth article.
        </p>
        <p>
            This is the content of my fourth article.
        </p>`},
};

function createTemplate(data){
    
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmlTemplate = `<!doctype html>
<html>
<head>
    <title>${title}</title>
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class='container'>
    <div> <a href="/">Home</a></div>
    <hr/>
    <h3>${heading}</h3>
    <div>${date}</div>
    <div>
        ${content}
    </div>
    </div>
</body>
</html>`;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/counter', function (req, res) {
  counter =counter + 1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/singhbean.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'singhbean.jpg'));
});
app.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
  res.send(createTemplate(articletwo));
});

app.get('/:articleName', function (req, res) {
    //articlename= article-two
    //articles(articleName)={} content object for artice one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
