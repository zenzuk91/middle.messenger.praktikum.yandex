import { compile } from 'pug';
<<<<<<< HEAD
import { Block } from '../../../utils/Block/index';
=======
import { Block } from '../../../utils/Block';
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
import { chatProfileTemplate } from './ChatProfile.template';
import { ChatProfileProps } from './ChatProfile.types';

export default class ChatProfile extends Block<ChatProfileProps> {
  public constructor(props: ChatProfileProps) {
    super(
      'div',
      {
        ...props,
        events: {
          click: () => this.handleClick(),
        },
      },
    ); 
  }

  public handleClick() {
    const li = [...document.querySelectorAll('.chat_chat-container')];
    li.forEach((elem: HTMLElement) => {
      elem.classList.remove('chat_chat-container_selected')
    });

    this.setProps({
      "isSelected": "true"
    })
  }

 public render() {
    return this.compile(compile(chatProfileTemplate), { ...this.props });
  }
}
