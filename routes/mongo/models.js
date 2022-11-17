const { isValidObjectId } = require('mongoose');
const { Mongoose } = require('./mongoClient');
const Schema = Mongoose.Schema;

const userSchema = new Schema({
  handle: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

const messageSchema = new Schema({
  handle: { type: String, required: true, required: true },
  message: { type: String, required: true },
  ip: { type: String, required: false}
});

const User = Mongoose.model('User', userSchema);
const Message = Mongoose.model('Message', messageSchema);

module.exports = { User, Message };