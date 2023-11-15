const express = require("express");
const cors = require("cors");
const jwtl = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const axios = require("axios");
const { auth } = require('express-oauth2-jwt-bearer');
const app = express();

app.use(cors());

const jwtCheck = auth({

  audience: 'this is a unique identifier',
  issuerBaseURL: 'https://dev-i3t1ke3a781d020n.us.auth0.com/',
  tokenSigningAlg: 'RS256',
});

app.get("/", (req, res) => {
  res.send("Hello World! from index route");
});

// Skip jwtCheck for "/"
app.use("/", (req, res, next) => {
  next();
});

// Apply jwtCheck to all other routes
app.use(jwtCheck);



app.get("/", (req, res) => {
  res.send("Hello World! from index route");
});

app.get("/authorized", (req, res) => {
  res.send("Hello World! from protected route");
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
