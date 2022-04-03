import Login from './Login';
import { renderDOM } from '../../utils/renderDOM/index';

document.addEventListener('DOMContentLoaded', () => {
  const login = new Login();
  renderDOM('.page', login);
});

export default {
  Login, 
};
