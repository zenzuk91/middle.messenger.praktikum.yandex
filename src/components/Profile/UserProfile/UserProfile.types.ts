import SettingsButton from '../../Button/SettingsButton/SettingsButton';
import SettingsInput from '../../Input/SettingsInput/SettingsInput';
import UserProfile from './UserProfile';
import SettingsPassword from '../SettingsPassword/SettingsPassword';

type UserProfileProps = {
  formLinkText?: string;
  linkTo?: string;
  events?: {
    submit?: (e: Event) => void,
  },
  emailInput?: SettingsInput;
  loginInput?: SettingsInput;
  nameInput?: SettingsInput;
  secondNameInput?: SettingsInput;
  phoneInput?: SettingsInput;
  passwordInput?: SettingsInput;
  passwordSubmitInput?: SettingsInput;
  avatarImage?: string;
  disabledUserInfoForm?: string;
  userInfo?: Record<string, string>;
  state?: string;
  buttonChangeInfo?: SettingsButton;
  buttonChangePassword?: SettingsButton;
  userProfile?: UserProfile;
  settingsPassword?: SettingsPassword;
  nameInChatInput?: SettingsInput;
}

export {
  UserProfileProps,
};
