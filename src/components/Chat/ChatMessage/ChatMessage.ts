import { compile } from 'pug';
<<<<<<< HEAD
import { Block } from '../../../utils/Block/index';
=======
import { Block } from '../../../utils/Block';
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
import { chatMessageTemplate } from './ChatMessage.template';
import { ChatMessageProps } from './ChatMessage.types';

export default class ChatMessage extends Block<ChatMessageProps> {
  public constructor(props: ChatMessageProps) {
    super('div', props);
  }

  public render() {
    return this.compile(compile(chatMessageTemplate), { ...this.props });
  }
}
