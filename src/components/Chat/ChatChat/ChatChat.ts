import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { chatChatTemplate } from './ChatChat.template';
import { ChatChatProps } from './ChatChat.types';

export default class ChatChat extends Block<ChatChatProps> {
  public constructor(props: ChatChatProps) {
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
    return this.compile(compile(chatChatTemplate), { ...this.props });
  }
}
