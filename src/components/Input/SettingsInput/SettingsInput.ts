import { compile } from 'pug';
<<<<<<< HEAD
import { Block } from '../../../utils/Block/index';
import { settingInputTemplate } from './SettingInput.template';
import { InputProps } from '../Input/Input.types';

export default class SettingsInput extends Block<InputProps> {
  public constructor(props: InputProps) {
=======
import { Block } from '../../../utils/Block';
import { settingInputTemplate } from './SettingInput.template';
import { SettingsInputProps } from './SettingsInput.types';

export default class SettingsInput extends Block<SettingsInputProps> {
  public constructor(props: SettingsInputProps) {
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
    super(
      'div',
      {
        ...props,
        events: {
          focusout: (e: Event) => this.handleBlur(e),
        },
      },
    );
  }

  public handleBlur(e: Event) {
    if (e.target) {
      this.setProps({
        inputErrorText: (e.target as HTMLInputElement).validationMessage,
        value: (e.target as HTMLInputElement).value,
      });
    }
  }

  public render() {
    return this.compile(compile(settingInputTemplate), { ...this.props });
  }
}
