import { compile } from 'pug';
import { Block } from '../../../utils/Block';
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
