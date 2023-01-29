const express = require("express");
const router = express.Router();
const fs = require('fs');
const clientPath = process.cwd();

router.get('/', async (req, res, next) => {


  if (!fs.existsSync(`${clientPath}/src/company-info.json`)) {
    //create new file if not exist
    let info = {
      "name": "KLG test task",
      "address": "Poland",
      "phones": [
        "123 456 789",
        "789-456-123"
      ]
    };

    let data = JSON.stringify(info);
    fs.writeFileSync(`${clientPath}/src/company-info.json`, data);
    return res.status(400).send({ message: `${clientPath}/src/company-info.json  was created` });
  }



  fs.readFile(`${clientPath}/src/company-info.json`, (err, data) => {
    if (err) {
      let message = 'Error from server.'
      if (err.errno) {
        message = message + ' errno: ' +  err.errno
      }
      if (err.code) {
        message = message + ` code: ${ err.code }`
      }
      return res.status(400).send({ message });
    }
    const info = JSON.parse(data);
   return res.status(200).json(info);
  });
});

module.exports = router;
