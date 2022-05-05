import { ChatList } from '../../components/Chat/ChatList';
import { ChatMessage } from '../../components/Chat/ChatMessage';

type State = {
  userInfo: {
    id: number | string,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: number | string,
    avatar: string,
  } | null,
  chats: ChatList[],
  messages: ChatMessage[],
  currentChatId?: string | number,
  token?: string,
};

export {
  State,
};
