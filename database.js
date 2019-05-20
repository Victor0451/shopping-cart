const mongoose = require('mongoose');

const URI = 'mongodb://localhost/shopping-cart';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err));

module.exports = mongoose;