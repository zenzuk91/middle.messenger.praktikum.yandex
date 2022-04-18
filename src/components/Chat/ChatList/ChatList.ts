import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { ChatListTemplate } from './ChatList.template';
import { ChatListProps } from './ChatList.types';
import { store } from '../../../utils/Store';
import { chatController, messageController } from '../../../controllers';
import { ALREADY_SELECTED_CHAT_ERR } from '../../../config/constants';

export default class ChatList extends Block<ChatListProps> {
  public constructor(props: ChatListProps) {
    super(
      'div',
      {
        ...props,
        events: {
          click: (e: Event) => this.handleClick(e),
        },
      },
    );
  }

  public async handleClick(e: Event) {
    const currentChatId = store.getState().currentChatId;
    const chatId = (e.target! as HTMLElement).dataset.id;
    if (currentChatId !== chatId) {
      const currentChats = [...document.querySelectorAll('.chat_chat-container')];

      if (currentChats && currentChats.length > 0) {
        currentChats.forEach((elem: HTMLElement) => {
          elem.classList.remove('chat_chat-container_selected')
        });
      }
      store.set('currentChatId', chatId);
      this.setProps({
        isSelected: "true",
      });
      const { userInfo, currentChatId } = await store.getState();
      const token = await chatController.getToken(currentChatId as number);
      await messageController.init((userInfo as { id: number }).id, currentChatId as number, token.token);
      await messageController.getMessages();
    } else {
      console.log(ALREADY_SELECTED_CHAT_ERR);
    }
    return;
  }

  public render() {
    return this.compile(compile(ChatListTemplate), { ...this.props });
  }
}
