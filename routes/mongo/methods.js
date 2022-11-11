const { User, Message } = require('./models');

const createUser = async ({ handle, password }) => {
    //const pwd = await hash(password);
    //record.password = pwd;
    console.log('in createUser')
    const user = new User({ handle, password });
    console.log('user is ', user)
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

  const createMessage = async ({ handle, message, ip }) => {
    //const pwd = await hash(password);
    //record.password = pwd;
    console.log('in createMessage')
    const newMessage = new Message({ handle, message, ip});
    console.log('message is ', message)
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

  module.exports = { createUser, createMessage };