import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsTemplate } from './Settings.template';
import SettingsButton from '../../Button/SettingsButton/SettingsButton';
import SettingsPassword from '../SettingsPassword/SettingsPassword';
import SettingsUser from '../UserProfile/UserProfile';
import { SettingsProps } from './Settings.types';
import img_avatar from '../../../../static/img/profile_avatar.png'
export default class Settings extends Block<SettingsProps> {
  public constructor() {
    super(
      'div',
      {
        formLinkText: 'Войти',
        linkTo: './index.html',
        avatarImage: img_avatar,
        disabledUserInfoForm: 'true',
        userInfo: {
          first_name: 'Андрей',
          email: 'pochta@ya.ru',
          login: 'zenzuk',
          second_name: 'Колесников',
          display_name: 'Андрей',
          phone: '+7 (989) 527 86 95',
        },
        state: '',
        buttonChangeInfo: new SettingsButton({
          buttonName: 'Изменить данные',
          events: {
            click: () => this.handleClickInfo(),
          },
        }),
        buttonChangePassword: new SettingsButton({
          buttonName: 'Изменить пароль',
          events: {
            click: () => this.handleClickPassword(),
          },
        }),
        settingsUser: new SettingsUser({
          userInfo: {
            first_name: 'Андрей',
            email: 'pochta@ya.ru',
            login: 'zenzuk',
            second_name: 'Колесников',
            display_name: 'Андрей',
            phone: '+7 (989) 527 86 95',
          },
        }),
        settingsPassword: new SettingsPassword({}),
      },
    );
  }

  public handleClickInfo() {
    this.setProps({
      state: 'user',
    });
  }

  public handleClickPassword() {
    this.setProps({
      state: 'password',
    });
  }

  public render() {
    return this.compile(compile(settingsTemplate), { ...this.props });
  }
}
