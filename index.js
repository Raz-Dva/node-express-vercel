const express = require("express");
const companyInfo = require("./routes/info-route");

const app = express();
app.use(express.json());

// Routes
app.use('/info', companyInfo);

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}     --- ${process.cwd()} +++process.cwd()')
`));
