import { compile } from 'pug';
<<<<<<< HEAD
import { Block } from '../../../utils/Block/index';
=======
import { Block } from '../../../utils/Block';
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
import { error404Template } from './Error404.template';
import { Error404Props } from './Error404.types';

export default class Error404 extends Block<Error404Props> {
  public constructor() {
    super(
      'div',
      {
        errorTitleMessage: '404',
        errorSubtitleMessage: 'Вы всё сломали',
        errorLinkText: 'Назад к чатам',
        linkTo: './index.html',
      },
    );
  }

  public render() {
    return this.compile(compile(error404Template), { ...this.props });
  }
}
