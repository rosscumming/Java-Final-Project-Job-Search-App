const express = require('express');
const fetch = require('node-fetch');
const btoa = require('btoa');

const app = express();

const API_KEY = require('../api_key.js');
const authorizationHeader = `${API_KEY}`;

app.get("/jobs", (req, res) => {
  return fetch("https://www.reed.co.uk/api/1.0/search?keywords=tech",
    {headers: {"Authorization": `Basic ${btoa(authorizationHeader+":")}`}})
    .then(reedRes => reedRes.json())
    .then(data => data.results)
    // .then(console.log)
    .then(jobs => res.json(jobs))
    .catch(err => res.status(500).json({status: 500, message: err}))
})

app.listen(3001, () => {
  console.log("app listening on 3001, baby")
})
