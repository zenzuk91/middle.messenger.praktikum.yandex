import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsPasswordTemplate } from './SettingsPassword.template';
import SettingsInput from '../../Input/SettingsInput/SettingsInput';
import { SettingsPasswordProps } from './SettingsPassword.types';
<<<<<<< HEAD
import { PatternPassword } from '../../Const/Const';
=======
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301

export default class SettingsPassword extends Block<SettingsPasswordProps> {
  public constructor(props: SettingsPasswordProps) {
    super(
      'div',
      {
        ...props,
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
        linkTo: './profile.html',
        oldPasswordInput: new SettingsInput({
          labelName: 'Старый пароль',
          inputType: 'password',
          inputName: 'oldPassword',
          inputPlaceholder: 'Старый пароль',
          required: 'true',
          minlength: '8',
          maxlength: '40',
<<<<<<< HEAD
          pattern: PatternPassword,
=======
          pattern: '((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})',
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
        }),
        newPasswordInput: new SettingsInput({
          labelName: 'Новый пароль',
          inputType: 'password',
          inputName: 'newPassword',
          inputPlaceholder: 'Новый пароль',
          required: 'true',
          minlength: '8',
          maxlength: '40',
<<<<<<< HEAD
          pattern: PatternPassword,
=======
          pattern: '((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})',
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
        }),
        confirmPasswordInput: new SettingsInput({
          labelName: 'Повторите новый пароль',
          inputType: 'password',
          inputName: 'submitPassword',
          inputPlaceholder: 'Повторите новый пароль',
          required: 'true',
          minlength: '8',
          maxlength: '40',
<<<<<<< HEAD
          pattern: PatternPassword,
=======
          pattern: '((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})',
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
        }),
      },
    );
  }

  public handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      old_password: formData.get('oldPassword'),
      new_password: formData.get('newPassword'),
      confirm_password: formData.get('newPassword'),
    };
    if(e.target) {
      const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
      if (formIsValid) {
        console.log(data);
      }
    }
  }

  public render() {
    return this.compile(compile(settingsPasswordTemplate), { ...this.props });
  }
}
