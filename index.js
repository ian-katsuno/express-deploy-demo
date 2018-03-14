const express = require('express'),
      app = express();

console.log('right now we are in', process.env.NODE_ENV, 'environment');

// heroku is going to tell our server, which port to bind to
//  when it launches our server, it will set an "environment variable"
//  called 'PORT' that will tell our server what port to use
const PORT = process.env.PORT || 8080;
// the line above says 'PORT is equal to process.env.PORT IF IT IS TRUTHY
//  otherwise the fallback is 8080

// 'process' is the global object that is available ONLY IN NODE
// 'process.env' is an object that has all the environment variables

app.get('/', (req, res)=>{
    console.log('route was hit');
    res.send("bleep bloop bleep");
});

app.listen(PORT, ()=>{
    console.log('we are listening on port 8080')
})