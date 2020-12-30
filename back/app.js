//express server
import express from "express";
const app = express();
import morgan from "morgan";
import routerMessage from './routes/messageRoutes.js'


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
app.use('/api/v1/messages',routerMessage)



export default app;
