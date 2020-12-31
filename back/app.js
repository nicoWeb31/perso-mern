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

//parser 
app.use(express.json({ limit: "10kb" }));

// const __dirname = path.resolve();
// app.use('/images',express.static(__dirname + '/images/'))

//MORGAN
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

//router server
app.use('/api/v1/messages',routerMessage)
app.all('*',(req,res, next)=>{
    // res.status(404).json({
    //     status: 'fail',
    //     message: `can't find ${req.originalUrl} on this server !!!`
    // })


    const err = new Error(`can't find ${req.originalUrl} on this server !!!`)
    err.status = 'fail';
    err.statusCode = 404;

    next(err);
})


//error handler----4 argument node reconize   an errhandling middlerware
app.use((err, req, res,next) =>{

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        messages: err.message
    })
})

export default app;
