const express = require('express');
const app = express();
const movieRouter = require('./routes/movie.router.js')
const port = process.env.PORT || 8002;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movie', movieRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
