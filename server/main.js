const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productCtrl = require('./endpoints/product');

var db = 'mongodb://127.0.0.1/shop';
mongoose.connect(db, { useMongoClient: true });
var con = mongoose.connection;

con.on('error', console.error.bind(console, 'connection error:'));

con.once('open', function () {
    console.log("connection created");
});


/* config  */
const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 6789;
/* end config */


/* controllers */
app.get('/product/:id', productCtrl.getSingleProduct);
app.get('/product', productCtrl.getAllProducts);
app.post('/product', productCtrl.enterProduct);
/* end controllers */


app.listen(PORT, () => {
    console.log('Listening on ',PORT);
});