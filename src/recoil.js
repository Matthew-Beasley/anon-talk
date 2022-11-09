import {
    atom,
    selector
  } from 'recoil';

  const messageState = atom({
    key: 'passwordState',
    default: ''
  });

  export { messageState };