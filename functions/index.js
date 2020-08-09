//import firebase from "../penpal-app/src/components/firebase";
//const firebase = require( "../penpal-app/src/components/firebase");
//const firebase = require('firebase');
const express = require('express');
const cors = require('cors');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const rp = require("request-promise");
admin.initializeApp();

// fbObject = new firebase();
// var db = fbObject.db;

const authToken = "HmZ6SefEtPnqRFJZEqd7oTxvv3KjVA358YuWUQ4A5oUx";
const functionURL = "https://vyl003.typeform.com/forms/CJ2irtPt/responses?included_response_ids=owlgwbiizeqzvp8tu8o6owlgl9agg0ca";
// exports.usrResponse = functions.https.onRequest((req, res) => {
// 	var usrToken = req.body.form_response.token;
// 	var map = new Map();
// 	map["choice 1"] = req.body.form_response[0].choice.label;
// 	map["choice 2"] = req.body.form_response[1].choice.label;
// 	map["email"] = body.form_response.answers[2].email;
//     db.collection("Matches").doc(email).set({
// 		m
// 	})
//     .then(function(){
//     	console.log("Document written in Matches");
//     	res.json({
// 	        status: 200,
// 	        token: usrToken,
// 	        message: 'ok got it!'
// 	    });
//     })
//     .catch(function(error){
//     	console.error("Error in writing document to matches: ", error);
//     })
// });

// exports.callingFunction =  functions.https.onRequest((req, res) => {
// 	var options = {
// 		uri: functionURL,
// 		method: 'GET',
// 		headers: {Authorization: `bearer ${authToken}`},
// 		json: true // Automatically stringifies the body to JSON

// 	};
// 	rp(options)
//     .then(function (parsebody) {
// 		console.log('User response: ', parsebody);
// 		res.json({
// 	        status: 200,
// 	        message: 'ok got it!'
// 	    });
//     })
//     .catch(function (err) {
//         console.error('Error:' , err);
// 	});
// 	res.end();
	// Provide the token in the request to the receiving function
	// try {
	//   const functionResponse = await get(functionURL, {
	// 	headers: {Authorization: `bearer ${authToken}`},
	//   });
	//   res.status(200).send(functionResponse.data);
	// } catch (err) {
	//   console.error(err);
	//   res.status(500).send('An error occurred! See logs for more details.');
	// }
//   });

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

