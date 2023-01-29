const express = require("express");
const companyInfo = require("./routes/info-route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
app.use('/info', companyInfo);

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
