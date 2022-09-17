const express = require('express');
const mongoose = require('mongoose');
const { createServer } = require('http');
const app = express();
const port = 3000;

mongoose
  .connect('mongodb+srv://admin:admin@cluster0.o69msxy.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Products = mongoose.model('Products', ProductsSchema);

app.get('/products', (req, res) => {
   // Products.create({
   //  name: 'TV',
    // amount: '140',
  // })
   // .then(product => res.send(product))
    // .catch(err => res.send(err));
     Products.find()
    .then(products => res.send(products))
    .catch(err => res.send(err));
});

const server = createServer(app);
server.listen(port, () => console.log(`server is up. port: ${port}`));