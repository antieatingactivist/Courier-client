import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';
import fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// const httpApp = express();
const PORT = 3000;


// Routes
app.get("*", function(req, res, next) {
  res.json(data)
});


http.createServer(app)
  .listen(PORT, function() {
    console.log("Express TTP server listening on port 80");
  });



const data = [
  { 
    sender: 
      {
        name: "Dumper",
        address: "666 Post st.",
        city: "San Francisco",
        state: "CA",
        zip: "94109"
      },
    recipient: 
      {
        name: "Clumper",
        address: "999 Pine st.",
        city: "San Francisco",
        state: "CA",
        zip: "94109"
      },
    pickupTime: new Date("2022-12-17T09:30:00"),
    deliveryTime: new Date("2022-12-17T11:30:00"),
    level: "Rush"
  }
]
