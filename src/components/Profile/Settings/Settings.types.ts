import { Input } from '../../Input/Input';
import SettingsButton from '../../Button/SettingsButton/SettingsButton';
import SettingsUser from '../UserProfile/UserProfile';
import SettingsPassword from '../SettingsPassword/SettingsPassword';

type SettingsProps = {
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
  avatarImage?: string;
  disabledUserInfoForm?: string;
  userInfo?: Record<string, unknown>;
  state?: string;
  buttonChangeInfo: SettingsButton;
  buttonChangePassword: SettingsButton;
  settingsUser: SettingsUser;
  settingsPassword: SettingsPassword;
}

export {
  SettingsProps,
};
