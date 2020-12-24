//express server
import express from "express";
import path from "path";
const app = express();
import morgan from "morgan";

// import path from 'path';

//middleware server
app.use((req, res, next) => {
    console.log("welcome in first middleware 😻 ", process.env.NODE_ENV);

    next();
});

// const __dirname = path.resolve();
// app.use('/images',express.static(__dirname + '/images/'))

//MORGAN
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

//router server


export default app;
