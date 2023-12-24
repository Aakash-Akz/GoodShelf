// const express = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRouter = require('./routes/product')


const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(`mongodb+srv://akashtembhare2002:Ast705868@cluster0.kz2rhlw.mongodb.net/GoodShelf?retryWrites=true&w=majority`, 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server only after the MongoDB connection is established
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Set up middleware
app.use(cors());
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Shopping Website API');
});

app.use('/api/product', productRouter);

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
