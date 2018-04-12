const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

const app = express();

// app.get('/', (req, res)=> res.send ('Hello World!'))

// app.get('/', (req, res)=> {
//      res.send ('Hello World!');
// });

// app.post('/', (req, res) => {
//     res.send ('POST!!!');
// });

// app.listen (3000, ()=>{
//     console.log('Server started on port 3000');
// });

app.use(bodyParser.json());
app.use(express.static('public'));

var DATA = [];

app.get('/api/users', (req, res) => {
   res.send(JSON.stringify(DATA));
 });

app.get('/api/users/:id', (req, res) => {
   res.send(JSON.stringify(DATA[req.params.id]));
});

app.post ('/api/users', (req, res) => {
   DATA.push(req.body);
   res.send('OK');
});

app.delete ('/api/.users/:id', (req, res)=>{
   DATA.splice(req.params.id,i);
   res.send('OK');
});

app.put('/api/users/:id',(req, res)=> {
   DATA[req.params.id] = req.body;
   res.send('OK');
});

app.patch ('/api/users/:id/:param', (req, res) => {
   DATA[req.params.id][req.params.param] = req.body;
   res.send('OK');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});