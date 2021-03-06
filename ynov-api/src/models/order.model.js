import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    totalAmount: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});


module.exports = mongoose.model('Order', orderSchema);