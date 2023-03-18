const express = require('express');
const dotenv = require('dotenv')
const router = require('./Routes/Route');
dotenv.config();
const app = express();
//view engine
app.set('view engine','ejs');
app.use('/assets', express.static('assets'));
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 4000;

app.use(cookieParser());


//Middleare
app.use('/', router)

app.listen(port, () => console.log(`server is running at ${port}`));

