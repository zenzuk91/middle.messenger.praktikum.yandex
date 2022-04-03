import Input from '../Input/Input/Input';

type LoginProps = {
  formLinkText?: string;
  linkTo?: string;
  events?: {
    submit?: (e: Event) => void,
  },
  emailInput?: Input;
  loginInput?: Input;
  nameInput?: Input;
  secondNameInput?: Input;
  phoneInput?: Input;
  passwordInput?: Input;
  passwordSubmitInput?: Input;
}

export {
  LoginProps,
};
