import { compile } from 'pug';
<<<<<<< HEAD
import { Block } from '../../utils/Block/index';
=======
import { Block } from '../../utils/Block';
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
import { LoginTemplate } from './Login.template';
import { Input } from '../Input/Input/index';
import { LoginProps } from './Login.types';

export default class Login extends Block<LoginProps> {
  public constructor() {
    super(
      'div',
      {
        formLinkText: 'Нет аккаунта?',
        linkTo: './registration.html',
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
        loginInput: new Input({
          labelName: 'Логин',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: 'Логин',
          required: 'true',
        }),
        passwordInput: new Input({
          labelName: 'Пароль',
          inputType: 'password',
          inputName: 'password',
          inputPlaceholder: 'Пароль',
          required: 'true',
        }),
      },
    );
  }

  public handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      login: formData.get('login'),
      password: formData.get('password'),
    };
    if(e.target) {
      const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
      if (formIsValid) {
        console.log(data);
      }
    }
  }

  public render() {
    return this.compile(compile(LoginTemplate), { ...this.props });
  }
}
