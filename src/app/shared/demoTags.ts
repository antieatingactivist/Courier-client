import { ITag } from './stop-data.model';
const data: ITag[] = [
      {
        "sender": {
          "name": "Twitter HQ",
          "address": "1355 Market St #900",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94103,
          "arrivalWindowStart": new Date(),
          "arrivalWindowEnd": new Date(),
          "isRecipient": false
        },
        "recipient": {
          "name": "First Republic Bank",
          "address": "44 Montgomery st.",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94104,
          "arrivalWindowStart": new Date(),
          "arrivalWindowEnd": new Date(),
          "isRecipient": true
        },
        "status": "ready",
        "level": "Rush",
        "id": 100006,
        "assignedTo": -1
      },
      {
        "sender": {
          "name": "Yelp",
          "address": "140 New Montgomery St 9th floor",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94105,
          "arrivalWindowStart": new Date(),
          "arrivalWindowEnd": new Date(),
          "isRecipient": false
        },
        "recipient": {
          "name": "Oracle Park",
          "address": "24 Willie Mays Plaza",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94107,
          "arrivalWindowStart": new Date(),
          "arrivalWindowEnd": new Date(),
          "isRecipient": true
        },
        "level": "Rush",
        "id": 100018,
        "status": "ready",
        "assignedTo": -1
      },
      {
        "sender": {
          "name": "Ferry Building",
          "address": "1 Ferry Building",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94105,
          "arrivalWindowStart": new Date(),
          "arrivalWindowEnd": new Date(),
          "isRecipient": false
        },
        "recipient": {
          "name": "San Francisco Museum of Modern Art",
          "address": "151 3rd St.",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94103,
          "arrivalWindowStart": new Date(),
          "arrivalWindowEnd": new Date(),
          "isRecipient": true
        },
        "level": "Rush",
        "id": 100019,
        "status": "ready",
        "assignedTo": -1
      },
      {
        "sender": {
          "name": "San Francisco Marriott Fisherman's Wharf",
          "address": "1250 Columbus Ave",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94133,
          "arrivalWindowStart": new Date(),
          "arrivalWindowEnd": new Date(),
          "isRecipient": false
        },
        "recipient": {
          "name": "Golden Gate National Parks Conservancy",
          "address": "201, Fort Mason",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94123,
          "arrivalWindowStart": new Date(),
          "arrivalWindowEnd": new Date(),
          "isRecipient": true
        },
        "level": "Rush",
        "id": 100020,
        "status": "ready",
        "assignedTo": -1
      },
      {
        "sender": {
          "name": "San Francisco Superior Courthouse",
          "address": "400 McAllister St",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94102,
          "arrivalWindowStart": new Date(),
          "arrivalWindowEnd": new Date(),
          "isRecipient": false
        },
        "recipient": {
          "name": "Asian Art Museum",
          "address": "200 Larkin St",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94102,
          "arrivalWindowStart": new Date(),
          "arrivalWindowEnd": new Date(),
          "isRecipient": true
        },
        "level": "Rush",
        "id": 100020,
        "status": "ready",
        "assignedTo": -1
      }
    ];

    export default data;
  