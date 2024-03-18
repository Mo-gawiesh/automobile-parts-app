// models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  parts: [
    {
      part: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Part',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less than 1.']
      },
      price: {
        type: Number,
        required: true
      }
      // If you have prices that can change, you may want to record the price at the time of the order.
    }
  ],
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], // Enum restricts the status to these values only
    default: 'Pending'
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
  // Add any other fields such as totalCost, paymentMethod etc.
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
