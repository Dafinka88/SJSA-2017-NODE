var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var fs = require('fs')

var app = express();
app.use(bodyParser.urlencoded());
app.set('view engine', 'html');
app.engine('html', hbs.__express);
hbs.registerPartials(__dirname + '/views');


app.get('/',(req, res) => {
    res.render('index');
});

app.post('/register', (req, res) => {
    var err = 0;
    var form = req.body;
    if(form.fn == undefined || form.fn.length == 0){err ++i;}
    if(form.ln == undefined || form.fn.length == 0){err ++i;}
    if(form.eml == undefined || form.fn.length == 0){err ++i;}
    if(form. == undefined || form.fn.length == 0){err ++i}
    if(form.fn == undefined || form.fn.length == 0){err ++i}
    if(form.p1 != )
})

fetch(
    'http://127.0.0.1:3000/api/users',
    {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }
).then(function(res){
    return res.text();
}).then(function(data){
    console.log(data);
});
});