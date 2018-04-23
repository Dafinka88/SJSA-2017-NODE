var UserModel = require('../models/users');
var jwt = require('jsonwebtoken');
var config = require('../config');


var login = (req, res) => {

    // console.log(req.body);

    var isValid = req.body.email != undefined
              &&  req.body.email.length > 0
              && req.body.password != undefined
              && req.body.password.length > 0;

    

    if(isValid){
        // console.log('valid input');
        UserModel.userLogin(req.body.email, req.body.password, (err,data) => {
            // console.log(data);
            if(err){
                res.status(500);
                res.send('Internal server error');
                return;
            }
            if(data != null){
                var claims = {
                    uid:data._id,
                    email:data.email
                };
                var token = jwt.sign(claims, config('jwt_secret'));
                res.status(200);
                res.json({token: token});
                return;
            }
            res.status(404);
            res.send('Not Found');
            return;
        });
    }
}
module.exports = {
    login
}