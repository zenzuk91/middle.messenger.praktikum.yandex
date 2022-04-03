import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsButtonTemplate } from './SettingsButton.template';
import { SettingsButtonProps } from './SettingsButton.types';

export default class SettingsButton extends Block<SettingsButtonProps> {
  public constructor(props: SettingsButtonProps) {
    super(
      'div',
      {
        ...props,
      },
    );
  }

  public render() {
    return this.compile(compile(settingsButtonTemplate), { ...this.props });
<<<<<<< HEAD


  } 

  
=======
  } 
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
}
