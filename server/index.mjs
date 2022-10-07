import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import { Driver, Tag, Client } from './models/index.mjs';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Routes
app.get("/api/tags/:driver", async function(req, res, next) {

  const data = await Tag.findAll({
    where: {assignedTo: req.params.driver},
    include: [{
      model: Client,
      as: "sender",
    },{
      model: Client,
      as: "recipient",
    }]

  })
  for (let tag of data) {

    tag.sender.setDataValue('arrivalWindowStart', tag.get({plain: true}).senderWindowStart);
    tag.sender.setDataValue('arrivalWindowEnd', tag.get({plain: true}).senderWindowEnd);
    tag.sender.setDataValue('isRecipient', false)
    tag.recipient.setDataValue('arrivalWindowStart', tag.get({plain: true}).recipientWindowStart);
    tag.recipient.setDataValue('arrivalWindowEnd', tag.get({plain: true}).recipientWindowEnd);
    tag.recipient.setDataValue('isRecipient', true)
    
  }
  res.json(data);    
});

app.get("/api/tags/", async function(req, res, next) {

  const data = await Tag.findAll({
    // where: {assignedTo: req.params.driver},
    include: [{
      model: Client,
      as: "sender",
    },{
      model: Client,
      as: "recipient",
    }]

  })
  for (let tag of data) {

    tag.sender.setDataValue('arrivalWindowStart', tag.get({plain: true}).senderWindowStart);
    tag.sender.setDataValue('arrivalWindowEnd', tag.get({plain: true}).senderWindowEnd);
    tag.sender.setDataValue('isRecipient', false)
    tag.recipient.setDataValue('arrivalWindowStart', tag.get({plain: true}).recipientWindowStart);
    tag.recipient.setDataValue('arrivalWindowEnd', tag.get({plain: true}).recipientWindowEnd);
    tag.recipient.setDataValue('isRecipient', true)
    
  }
  res.json(data);    
});


app.get("/api/drivers", async function(req, res, next) {
  const data = await Driver.findAll({
    
  });
  res.json(data);
  // res.json(data.drivers)
});

app.put("/api/tags/:id", async function(req, res, next) {

  if (req.body.driver) {
    const tag = await Tag.update(
      { assignedTo: req.body.driver },
      { where: {id: req.params.id}}
    )
    res.json(tag);
  }
  if (req.body.status) {
    const tag = await Tag.update(
      { status: req.body.status },
      { where: {id: req.params.id}}
    )
    res.json(tag);
  }  
})

app.post("/api/tags", async function(req, res, next) {

  const sender = {

    "name": req.body.senderName,
    "address": req.body.senderAddress,
    "city": req.body.senderCity,
    "state": req.body.senderState,
    "zip": req.body.senderZip
  }
  const recipient = {

    "name": req.body.recipientName,
    "address": req.body.recipientAddress,
    "city": req.body.recipientCity,
    "state": req.body.recipientState,
    "zip": req.body.recipientZip
  }

  const createSender = await Client.create(sender);
  const createRecipient = await Client.create(recipient);

  const tag = { 
    ...req.body, 
    status: "ready",
    recipientId: createRecipient.get({plain: true}).id,
    senderId: createSender.get({plain: true}).id,
    senderWindowStart: req.body.senderWindowStart,
    senderWindowEnd: req.body.senderWindowEnd,
    recipientWindowStart: req.body.recipientWindowStart,
    recipientWindowEnd: req.body.recipientWindowEnd,
  }
  
  const createTag = await Tag.create(tag);

  res.json(createTag);

});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

