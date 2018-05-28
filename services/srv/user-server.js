var express = require("express");
var cors = require("cors");
var jwt = require('express-jwt');
var bodyParser = require("body-parser")

var config = require("../config");
var DB = require("../config/db");

var UsersController = require('../controllers/auth/user');


DB.Init();

var app = express();
app.use(bodyParser.json());
app.use(cors());

var jwtCheck = () => {
    return jwt({ secret: config("jwt_secret") });
}

// post routes
app.patch('/user/changepw', jwtCheck(), UsersController.changePassword);
app.patch('/user/changehandle', jwtCheck(), UsersController.changeHandle);
app.patch("/user/:uid/followUser", jwtCheck(), UsersController.followUser);
app.get('/userfollowers/:userid', jwtCheck(), UsersController.seeFollowers);
app.get('/userfollows/:userid', jwtCheck(), UsersController.seeFollowing);


app.use((err, req, res, next) => {
    if (err.name == 'UnauthorizedError') {
        res.send('Invalid token');
    }
});

app.listen(config("servers")['user-server'].port, () => {
    console.log('Server started on port ' + config("servers")['user-server'].port);
});