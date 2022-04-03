import { compile } from 'pug';
<<<<<<< HEAD
import { Block } from '../../../utils/Block/index';
=======
import { Block } from '../../../utils/Block';
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
import { error500Template } from './Error500.template';
import { Error500Props } from './Error500.types';

export default class Error500 extends Block<Error500Props> {
  public constructor() {
    super(
      'div',
      {
        errorTitleMessage: '500',
        errorSubtitleMessage: 'Скоро мы это исправим',
        errorLinkText: 'Назад к чатам',
        linkTo: './index.html',
      },
    );
  }
  
  public render() {
    return this.compile(compile(error500Template), { ...this.props });
  }
}
