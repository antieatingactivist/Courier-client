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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.header("Access-Control-Expose-Headers", "ETag, Link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset");
  res.header("Access-Control-Max-Age", "86400");
  res.header("Access-Control-Allow-Credentials", true);
  res.json(data)
});


http.createServer(app)
  .listen(PORT, function() {
    console.log("Express TTP server listening on port 80");
  });



const data = [
  { 
    sender: {
      name: "Dumper",
      address: "666 Post st.",
      city: "San Francisco",
      state: "CA",
      zip: 94109,
      arrivalWindowStart: new Date("2022-12-17T09:00:00"),
      arrivalWindowEnd: new Date("2022-12-17T09:30:00"),
    },
    recipient: {
      name: "Clumper",
      address: "999 Pine st.",
      city: "San Francisco",
      state: "CA",
      zip: 94109,
      arrivalWindowStart: new Date("2022-12-17T11:00:00"),
      arrivalWindowEnd: new Date("2022-12-17T11:30:00"),
    },

    level: "Rush"
  },
  { 
    sender: {
      name: "Bumper",
      address: "333 Sutter st.",
      city: "San Francisco",
      state: "CA",
      zip: 94109,
      arrivalWindowStart: new Date("2022-12-17T10:00:00"),
      arrivalWindowEnd: new Date("2022-12-17T10:30:00"),
    },
    recipient: {
      name: "Zumper",
      address: "111 California st.",
      city: "San Francisco",
      state: "CA",
      zip: 94109,
      arrivalWindowStart: new Date("2022-12-17T12:00:00"),
      arrivalWindowEnd: new Date("2022-12-17T12:30:00"),
    },

    level: "Regular"
  }
]
