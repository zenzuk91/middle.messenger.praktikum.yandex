import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { userProfileTemplate } from './UserProfile.template';
import SettingsInput from '../../Input/SettingsInput/SettingsInput';
import { UserProfileProps } from './UserProfile.types';
import { PatternEmail, PatternLogin, PatternName, PatternPhone } from '../../Const/Const';

export default class UserProfile extends Block<UserProfileProps> {
  public constructor(props: UserProfileProps) {
    super(
      'div',
      {
        ...props,
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
        linkTo: './profile.html',
        emailInput: new SettingsInput({
          labelName: 'Почта',
          inputType: 'email',
          inputName: 'email',
          inputPlaceholder: 'Почта',
          required: 'true',
          minlength: '3',
          pattern: PatternEmail,
          value: props.userInfo!.email,
        }),
        loginInput: new SettingsInput({
          labelName: 'Логин',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: 'Логин',
          required: 'true',
          minlength: '3',
          maxlength: '20',
          pattern: PatternEmail,
          value: props.userInfo!.login,
        }),
        nameInput: new SettingsInput({
          labelName: 'Имя',
          inputType: 'text',
          inputName: 'first_name',
          inputPlaceholder: 'Имя',
          required: 'true',
          minlength: '3',
          pattern: PatternName,
          value: props.userInfo!.first_name,

        }),
        secondNameInput: new SettingsInput({
          labelName: 'Фамилия',
          inputType: 'text',
          inputName: 'second_name',
          inputPlaceholder: 'Фамилия',
          required: 'true',
          minlength: '3',
          pattern: PatternName,
          value: props.userInfo!.second_name,
        }),
        nameInChatInput: new SettingsInput({
          labelName: 'Имя в чате',
          inputType: 'text',
          inputName: 'display_name',
          inputPlaceholder: 'Имя в чате',
          required: 'true',
          minlength: '3',
          maxlength: '20',
          pattern: PatternLogin,
          value: props.userInfo!.display_name,
        }),
        phoneInput: new SettingsInput({
          labelName: 'Телефон',
          inputType: 'tel',
          inputName: 'phone',
          inputPlaceholder: 'Телефон',
          required: 'true',
          minlength: '3',
          pattern: PatternPhone,
          value: props.userInfo!.phone,
        }),
      },
    );
  }

  public handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      email: formData.get('email'),
      login: formData.get('login'),
      first_name: formData.get('first_name'),
      second_name: formData.get('second_name'),
      display_name: formData.get('display_name'),
      phone: formData.get('phone'),
    };
    if(e.target){
    const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
    if (formIsValid) {
      console.log(data);
    }
    }
  }

  public render() {
    return this.compile(compile(userProfileTemplate), { ...this.props });
  }
}
