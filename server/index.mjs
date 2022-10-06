import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import data from './db.json' assert { type: 'json' };
import fs from 'fs';
import cors from 'cors';



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

  res.json(data.data)
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



// const data = [
//   { 
//     sender: {
//       name: "Dumper",
//       address: "666 Post st.",
//       city: "San Francisco",
//       state: "CA",
//       zip: 94109,
//       arrivalWindowStart: new Date("2022-12-17T09:00:00"),
//       arrivalWindowEnd: new Date("2022-12-17T09:30:00"),
//       isRecipient: false,
//       status: "scheduled"
//     },
//     recipient: {
//       name: "Clumper",
//       address: "999 Pine st.",
//       city: "San Francisco",
//       state: "CA",
//       zip: 94109,
//       arrivalWindowStart: new Date("2022-12-17T11:00:00"),
//       arrivalWindowEnd: new Date("2022-12-17T11:30:00"),
//       isRecipient: true,
//       status: "scheduled"
//     },

//     level: "Rush"
//   },
//   { 
//     sender: {
//       name: "Bumper",
//       address: "333 Sutter st.",
//       city: "San Francisco",
//       state: "CA",
//       zip: 94109,
//       arrivalWindowStart: new Date("2022-12-17T10:00:00"),
//       arrivalWindowEnd: new Date("2022-12-17T10:30:00"),
//       isRecipient: true,
//       status: "scheduled"
//     },
//     recipient: {
//       name: "Zumper",
//       address: "111 California st.",
//       city: "San Francisco",
//       state: "CA",
//       zip: 94109,
//       arrivalWindowStart: new Date("2022-12-17T12:00:00"),
//       arrivalWindowEnd: new Date("2022-12-17T12:30:00"),
//       isRecipient: false,
//       status: "scheduled"
//     },

//     level: "Regular"
//   }
// ]
