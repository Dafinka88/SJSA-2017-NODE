var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var validator = require('validator');

mongoose.connect("mongodb://127.0.0.1/reactgram", (err) => {
    if(err){
        console.error('Could not connect to database');
        console.error(err);
    }
});

const User = mongoose.model('user', {
    firstname: String,
    lastname: String,
    handle: String, // mandatory
    email: String, // mandatory
    date_of_birth: Date,
    location: {
        country: String,
        city: String,
        gps: {
            lng: Number,
            lat: Number,
        }
    },
    password: String, // mandatory
    avatar: String
});

var app = express();
app.use(bodyParser.json());
app.use(cors());



/*************************************/
/************ user routes ************/
/*************************************/

// get all users
app.get("/api/users", (req, res) => {
    User.find({}, {password: 0, __v: 0}, (err, data) => {
        if(err) {
            res.status(500);
            res.send("Internal server error");
            return;
        }
        res.status(200);
        res.json(data);
        return;
    });
});

// get specified user
// /api/users/123456789
app.get("/api/users/:id", (req, res) => {
    User.findOne({_id: req.params.id}, {handle: 1}, (err, data) => {
        if(err){
            res.status(500);
            res.send("Internal server error");
            return;
        }
        res.status(200);
        res.json(data);
        return;
    });
});

// create new user
app.post("/api/users", (req, res) => {
    var isValid = !validator.isEmpty(req.body.email) && validator.isEmail(req.body.email) &&
                    !validator.isEmpty(req.body.handle) &&
                    !validator.isEmpty(req.body.password);

    if(isValid){

        User.count({ handle: req.body.handle })
        .then((count) => {
            if (count > 0) {
                res.status(400);
                res.send("The username already exits!");
                return;
            } 
            else {
                var u = new User(req.body);
                u.save((err) => {
                    if(err){
                        res.status(500);
                        res.send("Internal server error");
                        return;
                    }
                    res.status(200);
                    res.send("OK");
                    return;
                });
            }
        });

        
    } else {
        res.status(400);
        res.send("Bad request");
        return;
    }
});

// deactivate a user
app.delete("/api/users/:id", (req, res) => {
    User.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.status(500);
            res.send("Internal server error");
            return;
        }
        res.status(200);
        res.send("OK");
        return;
    });
});
// update a user
app.patch('/api/users/:id', (req, res) => {
	var hasPassword =
		req.body.password != undefined && req.body.password != ''
	var count = 0
	for (var key in req.body)
		if (req.body.hasOwnProperty(key))
			count++
	if (!hasPassword && count <= 1) {
		res.status(400)
		res.send('Bad Request')
		return
	} else {
		User.findById(req.params.id, (err, user) => {
			if (err) {
				res.status(500)
				res.send('Internal server error')
				return
			} else {
				if (user.password === req.body.password) {
					User.update({ _id: user._id }, {})
				} else {
					res.status(401)
					res.send('Unauthorized')
					return
				}
			}
		})
	}
})


app.listen(8080, () => {
    console.log('Server started on port 8080');
});
