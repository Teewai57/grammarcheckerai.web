const express = require('express');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config()
const passport = require('passport');
import AppleStrategy from 'passport-apple';
// const AppleStrategy = require('passport-apple');

app.get("/", (req, res) => {
    res.send("<a href=\"/login\">Sign in with Apple</a>");
});

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

passport.use(new AppleStrategy({
        clientID: process.env.CLIENT_ID,
        teamID: process.env,TEAM_ID,
        callbackURL: "",
        keyID: process.env.KEY_ID,
        privateKeyLocation: ""
    }, function(req, accessToken, refreshToken, idToken, profile , cb) {
        // Here, check if the idToken.sub exists in your database!
    	if (req.body && req.body.user) {
      		// Register your user here!
		console.log(req.body.user);
	}
    	cb(null, idToken);
    }));

app.get("/login", passport.authenticate('apple'));
app.post("/auth", function(req, res, next) {
	passport.authenticate('apple', function(err, user, info) {
		if (err) {
			if (err == "AuthorizationError") {
				res.send("Oops! Looks like you didn't allow the app to proceed. Please sign in again! <br /> \
				<a href=\"/login\">Sign in with Apple</a>");
			} else if (err == "TokenError") {
				res.send("Oops! Couldn't get a valid token from Apple's servers! <br /> \
				<a href=\"/login\">Sign in with Apple</a>");
			} else {
				res.send(err);
			}
		} else {
			if (req.body.user) {
				res.json({
					user: req.body.user,
					idToken: user
				});
			} else {
				res.json(user);
			}			
		}
	})(req, res, next);
});

app.listen(4000, () => {
	console.log("Server started on https://passport-apple.ananay.dev");
});