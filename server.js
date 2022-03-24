const express = require("express");
const app = express();
const port = 8000;

//connect to mongodb using mongoose
const mongoose = require('mongoose');

//returns a promise dont exacty how long to load up
mongoose.connect('mongodb://localhost/products_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));


app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello World, Brians Coming for ya" });
});





app.listen(port, () => console.log(`Listening on port: ${port}`));