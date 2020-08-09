import firebase from "../penpal-app/src/components/firebase";
const firebase = require( "../penpal-app/src/components/firebase");
//const firebase = require('firebase');
const express = require('express');
const cors = require('cors');

const admin = require('firebase-admin');
admin.initializeApp();

const functions = require('firebase-functions');
// Initialize express
// const app = express();

// app.use(cors({ origin: true }));

// app.post('/usrResponse', function (req, res) {
//   console.log("webhook hit")
//     var body = req.body;
//     // var trackingNumber = body.msg.tracking_number;
//     // var slug = body.msg.slug;
//     // var token = body.msg.unique_token;

//   //  console.log(trackingNumber, slug, token);
//     console.log(body);
//     res.send(usrResponse.create();
// });
fbObject = new firebase();
var db = fbObject.db;
exports.usrResponse = functions.https.onRequest((req, res) => {
	var email = fbObject.getCurrentEmail;
    var usrToken = req.body.form_response.token;
    console.log(usrToken);
    db.collection("Matches").doc(email).set({
    	token: usrToken
    })
    .then(function(){
    	console.log("Document written in Matches");
    	res.json({
	        status: 200,
	        token: usrToken,
	        message: 'ok got it!'
	    });
    })
    .catch(function(error){
    	console.error("Error in writing document to matches: ", error);
    })
});


//Automatically allow cross-origin requests
// app.use(cors({ origin: true }));

// // Add middleware to authenticate requests
// app.use(myMiddleware);

// // build multiple CRUD interfaces:
// app.get('/hello', (req, res) => res.send(Widgets.getById(req.params.id)));
// // app.post('/', (req, res) => res.send(Widgets.create()));
// // app.put('/:id', (req, res) => res.send(Widgets.update(req.params.id, req.body)));
// // app.delete('/:id', (req, res) => res.send(Widgets.delete(req.params.id)));
// // app.get('/', (req, res) => res.send(Widgets.list()));

// // Expose Express API as a single Cloud Function:
// exports.widgets = functions.https.onRequest(app);
// exports.usrResponse = functions.https.onRequest(app);

