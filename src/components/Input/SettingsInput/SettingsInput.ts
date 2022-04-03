import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingInputTemplate } from './SettingInput.template';
import { InputProps } from '../Input/Input.types';

export default class SettingsInput extends Block<InputProps> {
  public constructor(props: InputProps) {
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
