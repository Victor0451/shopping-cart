var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: { type: Schema.Types.objectId, ref: 'User' },
    cart: { type: Object, required: true },
    adsress: { type: String, required: true },
    name: { type: String, required: true },
    paymentId: { type: String, required: true }

});

module.exports = mongoose.model('Order', schema);