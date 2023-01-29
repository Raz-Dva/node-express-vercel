const express = require("express");
const companyInfo = require("./routes/info-route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors())

// Routes
app.use('/info', companyInfo);

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
