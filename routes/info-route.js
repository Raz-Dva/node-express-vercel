const express = require("express");
const router = express.Router();
const fs = require('fs');
const clientPath = process.cwd();

router.get('/', async (req, res, next) => {

  fs.readFile(`${clientPath}/src/company-info.json`, (err, data) => {
    console.log(process.cwd(), ' +++process.cwd()')
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
