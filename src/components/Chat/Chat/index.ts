import Chat from './Chat';
import { renderDOM } from '../../../utils/renderDOM/index';

document.addEventListener('DOMContentLoaded', () => {
  const chat = new Chat();
  renderDOM('.page', chat);
});

export {
  Chat, 
};
