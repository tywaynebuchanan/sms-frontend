require('dotenv').config({path:'.env'});
const app = require('./app');
const PORT = process.env.PORT || 3000;
const MODE = process.env.NODE_ENV 


process.on('uncaughtException',err=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down server due to uncaught exceptions');
    process.exit(1);
})

const server = app.listen(PORT,()=>{
    console.log(`Serving on port ${PORT} in ${MODE}`)
})


process.on('uncaughtException',err=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to an unhandled promise rejection');
    server.close(()=>{
        process.exit(1);
    })
})