"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyChL38tKzjF1ctPGCqciCO2zzKyDCoz7vQ",
  authDomain: "goal-todo-demo.firebaseapp.com",
  projectId: "goal-todo-demo",
  storageBucket: "goal-todo-demo.appspot.com",
  messagingSenderId: "846128099203",
  appId: "1:846128099203:web:279cf077aa15eb8e28d0b6",
  measurementId: "G-25Z0G84020"
};
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
var _default = db;
exports["default"] = _default;