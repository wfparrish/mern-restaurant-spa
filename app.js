const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});
connectDB();

const app = express();

//Body parser
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000;

//Route files
const burgerRoutes = require('./routes/burgers');
const friesRoutes = require('./routes/fries');
const milkshakesRoutes = require('./routes/milkshakes');
const productDisplaysRoutes = require('./routes/productDisplays');
const mainRoutes = require('./routes/main');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/burgers', burgerRoutes);
app.use('/api/v1/fries', friesRoutes);
app.use('/api/v1/milkshakes', milkshakesRoutes);
app.use('/api/v1/productDisplays', productDisplaysRoutes);
app.use('/', mainRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found!</h1>')
});

app.listen(3000); 