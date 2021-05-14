const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('pk_test_51Iqt3dSEz6UhTNkynChYi98oSDCliz37MYOnIda2NkZoJsz4yXNveEqBzEwGkoaIHby968g3kjX01DGdjS0hA7Hu00iXQqrM7H')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({
    origin: true
}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// - Listen command
exports.api = functions.https.onRequest(app);