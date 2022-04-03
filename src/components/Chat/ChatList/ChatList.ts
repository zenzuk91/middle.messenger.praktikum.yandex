import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { ChatListTemplate } from './ChatList.template';
import { ChatListProps } from './ChatList.types';

export default class ChatList extends Block<ChatListProps> {
  public constructor(props: ChatListProps) {
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
    const li = [...document.querySelectorAll('.chat_chat-container')]!;
    li.forEach((elem: HTMLElement) => {
      elem.classList.remove('chat_chat-container_selected')
    });

    this.setProps({
      "isSelected": "true"
    })
  }

 public render() {
    return this.compile(compile(ChatListTemplate), { ...this.props });
  }
}
