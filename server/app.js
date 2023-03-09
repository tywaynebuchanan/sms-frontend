const express = require("express")
const mongoose = require("mongoose")
// const mongooseSanitize = require("mongoose-sanitize")
const cookieParser = require('cookie-parser')
const hpp = require("hpp")
const studentRouter = require("./routes/studentRouter")
const authRouter = require("./routes/authRouter")
const app = express();
const cors = require("cors")
const helmet = require("helmet")
const path = require("path")
const AppErrorMiddleware = require('./middleware/errors');
const multer = require("multer")
const morgan = require("morgan")
const { fileURLToPath } = require("url")
require("dotenv").config();
const DB = require("./config/dbconfig")

/* Configurations*/

const host =  '0.0.0.0';

/* Database Connection */
DB.on('error', (err)=>{
    console.log(err)
})

DB.once('open',()=>{
    console.log("DB connected success");
})

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
app.use(express.json({limit: '30mb'}));
app.use(express.urlencoded({limit: '30mb',extended: false}))
// app.use(mongooseSanitize());
app.use(cookieParser());
app.use(hpp());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan("common"))
app.use(cors())
app.use("/assets",express.static(path.join(__dirname,'public/assets')))

/* Storage */

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "public/assets")

    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage})

app.get("/",(req,res)=>{
    res.send("Hello from the server");
})

app.get("/ping",(req,res)=>{
    res.send("Api is Live")
})

app.use("/api",studentRouter)
app.use("/api",authRouter)

app.use(AppErrorMiddleware);


module.exports = app;


