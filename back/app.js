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

//production environment
const __dirname = path.resolve();
console.log("🚀 ~ file: app.js ~ line 28 ~ __dirname", __dirname)

if (process.env.NODE_ENV === "production") {
    console.log("production mode");
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        console.log("dev mode");
        res.send("Api is runnig.....");
    });
}

export default app;
