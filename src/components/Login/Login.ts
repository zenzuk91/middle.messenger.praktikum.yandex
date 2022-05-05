import { compile } from 'pug';
import { Block } from '../../utils/Block';
import { LoginTemplate } from './Login.template';
import { Input } from '../Input/Input/index';
import { LoginProps } from './Login.types';
import Button from '../Button/Button/Button';
import { router } from '../../pages';
import { authController } from '../../controllers';
import { store } from '../../utils/Store';

export default class Login extends Block<LoginProps> {
  public constructor(props: Record<string, unknown>) {
    super(
      'div',
      {
        ...props,
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
        linkButton: new Button({
          buttonText: 'Нет аккаунта?',
          customClass: 'button_link',
          events: {
            click: () => {
              router.go("/sign-up");
            }
          },
        }),
      },
    );
  }

  async componentDidMount() {
    try {
      await authController.getUserInfo();
      if (store.getState().userInfo) {
        router.go('/messenger');
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  public async handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      login: String(formData.get('login')),
      password: String(formData.get('password')),
    };
    if (e.target) {
      const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
      if (formIsValid) {
        await authController.login(data);
      }
    }
  }

  public render() {
    return this.compile(compile(LoginTemplate), { ...this.props });
  }
}
