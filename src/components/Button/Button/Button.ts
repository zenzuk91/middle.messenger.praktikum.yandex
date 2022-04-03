import { compile } from 'pug';
<<<<<<< HEAD
import { Block } from '../../../utils/Block/index';
=======
import { Block } from '../../../utils/Block/index'; 
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
import { buttonTemplate } from './Button.template';
import { ButtonProps } from './Button.types';

export default class Button extends Block<ButtonProps> {
  public constructor(props: ButtonProps) {
    super('div', props);
  }

  public render() {
    return this.compile(compile(buttonTemplate), { ...this.props });
  }
}
