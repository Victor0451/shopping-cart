var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping-cart', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/03/06/14888221977641.jpg',
        title: 'VW Arton',
        description: 'awesom car dude',
        price: 10
    }),

    new Product({
        imagePath: 'http://m.webwombat.com.au/motoring/car-images/vw-scirocco-r-2-big.jpg',
        title: 'VW Scirocco',
        description: 'awesom car dude',
        price: 20
    }),


    new Product({
        imagePath: 'https://di-uploads-development.s3.amazonaws.com/streetvolkswagen/uploads/2017/04/vw-cars-amarillo-texas-768x480-1.jpeg',
        title: 'VW Golf R',
        description: 'awesom car dude',
        price: 20
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}