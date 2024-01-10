const express = require('express');
const { request } = require('http'); 
const app = express(); 
//const fetch = require('node-fetch');
//equire('dotenv').config();

let databaseID = "495a0f71b98246fe995804ac00f7fb68"


app.listen(3000, () => console.log("connectiong at 3000"));

app.use(express.static("public"));
app.use(express.json({limit: '1mb'})); 


app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
      if (err) {
        response.end();
        return;
      }
      response.json(data);
    });
  });

app.post('/urlobject', (request, response) => {
    const data = request.body;
    response.json("200");
  });


// work on sending the data 
// const data = { lat, lon, weather, air };
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     };
//     const db_response = await fetch('/api', options);
//     const db_json = await db_response.json();
//     console.log(db_json);