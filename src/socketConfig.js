import io from 'socket.io-client';
const socket = io('https://typeracer-clone-api.herokuapp.com/');
export default socket;