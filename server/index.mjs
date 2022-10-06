import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import data from './db.json' assert { type: 'json' };
import fs from 'fs';
import cors from 'cors';
import sequelize from './config/connection.mjs';
import { Driver } from './models/index.mjs'




let count = data.count;
let drivers = data.drivers;


dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// const httpApp = express();
const PORT = 3000;


app.use(express.json());

app.use(cors());


// Routes
app.get("/", function(req, res, next) {
  Driver.findAll({

  }).then((data) => {
    res.json(data)
  })
});


app.get("/drivers", function(req, res, next) {

  res.json(data.drivers)
});

app.put("/:id", function(req, res, next) {
  console.log(req.body);
  for (let tag of data.data) {
    if (tag.id === +req.params.id) {
      if (req.body.driver) {
        if (req.body.driver === "") tag.assignedTo = null;
        else tag.assignedTo = +req.body.driver;
      }
      if (req.body.status) {
        tag.status = req.body.status;
      }
      
    }
  }

  res.json(data.data);

  fs.writeFile("./db.json", JSON.stringify({drivers: drivers, count: count, data: data.data}, null, 2), (err) => err ? console.error(err) : console.log("success"));
})

app.post("/", function(req, res, next) {

  res.json(`${req.method} request received`);
  // console.log(req.body);

  data.data.push({
    
      sender: {
        name: req.body.senderName,
        address: req.body.senderAddress,
        city: req.body.senderCity,
        state: req.body.senderState,
        zip: req.body.senderZip,
        arrivalWindowStart: new Date(req.body.senderWindowStart),
        arrivalWindowEnd: new Date(req.body.senderWindowEnd),
        isRecipient: false
      },
      recipient: {
        name: req.body.recipientName,
        address: req.body.recipientAddress,
        city: req.body.recipientCity,
        state: req.body.recipientState,
        zip: req.body.recipientZip,
        arrivalWindowStart: new Date(req.body.recipientWindowStart),
        arrivalWindowEnd: new Date(req.body.recipientWindowEnd),
        isRecipient: true
      },
  
      level: req.body.level,
      id: count,
      status: "scheduled",
      assignedTo: null
    
  });

  fs.writeFile("./db.json", JSON.stringify({drivers: drivers, count: ++count, data: data.data}, null, 2), (err) => err ? console.error(err) : console.log("success"));

});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

