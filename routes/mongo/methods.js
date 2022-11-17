const { User, Message } = require('./models');

const createUser = async ({ handle, password }) => {
    //const pwd = await hash(password);
    //record.password = pwd;
    const user = new User({ handle, password });
    user.save(err => {
      if (err) {
        console.log(err)
        return err;
      } else {
        console.log('success')
        return 'success';
      }
    });
  };

  const getUser = async () => {
    try {
      const ret = await User.find();
      return ret;
    } catch (error) {
      console.log(error)
    }
  }

  const createMessage = async ({ handle, message, ip }) => {
    //const pwd = await hash(password);
    //record.password = pwd;
    const newMessage = new Message({ handle, message, ip});
    newMessage.save(err => {
      if (err) {
        console.log(err)
        return err;
      } else {
        console.log('success')
        return 'success';
      }
    });
  };

  const getMessages = async () => {
    try {
      const ret = await Message.find();
      return ret;
    } catch (error) {
      console.log(error)
    }
  }

  module.exports = { createUser, getUser, createMessage, getMessages };