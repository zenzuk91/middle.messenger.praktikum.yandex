import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { chatTemplate } from './Chat.template';
import { ChatList } from '../ChatList/index';
import { ChatProfile } from '../ChatProfile/index';
import ChatMessage from '../ChatMessage/ChatMessage';
import { ChatMessageForm } from '../ChatMessageForm/index';
import Button from '../../Button/Button/Button';
import AddUserModal from '../../Modal/AddUserModal/AddUserModal';
import RemoveUserModal from '../../Modal/RemoveUserModal/RemoveUserModal';
import AddGeoModal from '../../Modal/AddGeoModal/AddGeoModal';
import AddFileModal from '../../Modal/AddFileModal/AddFileModal';
import AddFotoModal from '../../Modal/AddFotoModal/AddFotoModal';
import { ChatProps } from './Chat.types';
import ImgChats from '../../../../static/img/img_chats.png';
import ImgTumba from '../../../../static/img/tumba.jpeg';


export default class Chat extends Block<ChatProps> {
  constructor() { 
    super(
      'div',
      {
        profileLinkTo: './profile.html',
        profileLinkText: 'Профиль',
        avatarSrc: ImgChats,
        userInfo: {
          first_name: 'Андрей',
          email: 'pochta@ya.ru',
          login: 'zenzuk',
          second_name: 'Колесников',
          display_name: 'zenzuk',
          phone: '+7 (989) 527 86 95',
        },
          chatProfile: 
            new ChatProfile({
              avatarSrc: ImgChats,
              chatName: 'Zenzuk',
              chatFavorite: 'Избранное',
              profileLinkText: 'Профиль',
              profileLinkTo: './profile.html',
          }),
        ChatList: [ 
          new ChatList({ 
            avatarSrc: ImgChats,
            chatName: 'Пользователь 1',
            chatLastMessage: 'Сообщение 1',
            chatDate: 'пт',
            chatMessageCount: '2'
          }),
          new ChatList({
            avatarSrc: ImgChats,
            chatName: 'Пользователь 2',
            chatLastMessage: 'Сообщение 1',
            chatDate: 'пт',
            chatMessageCount: '1',
          }),
          new ChatList({
            avatarSrc: ImgChats,
            chatName: 'Пользователь 3',
            chatLastMessage: 'Сообщение 1',
            chatDate: 'пт',
            chatMessageCount: '21',
          }),
          new ChatList({
            avatarSrc: ImgChats,
            chatName: 'Пользователь 4',
            chatLastMessage: 'Изображение',
            chatDate: 'пт',
            chatMessageCount: '15',
          }),
          new ChatList({
            avatarSrc: ImgChats,
            chatName: 'Пользователь 5',
            chatLastMessage: 'Сообщение 1',
            chatDate: 'пт',
            chatMessageCount: '2',
          }),
          new ChatList({
            avatarSrc: ImgChats,
            chatName: 'Пользователь 6',
            chatLastMessage: 'Сообщение 1',
            chatDate: 'пт',
            chatMessageCount: '2',
          }),
        ],
        chatMessage: [
          new ChatMessage({
            message: 'Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!Привет!',
            time: 'ПТ',
            imgSrc: '',
          }),
          new ChatMessage({
            message: 'Привет!',
            time: 'ПТ',
            imgSrc: '',
          }),
          new ChatMessage({
            message: 'Привет!',
            time: 'ПТ',
            imgSrc: '',
          }),
          new ChatMessage({
            message: 'Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! Хай! ',
            time: '00:00',
            isUserMessage: 'true',
            isChecked: 'true',
          }),
          new ChatMessage({
            message: 'Привет!',
            time: 'ПТ',
            imgSrc: ImgTumba,
          }),
          
          new ChatMessage({
            message: 'Хай!',
            time: '00:01',
            isUserMessage: 'true',
            isChecked: 'true',
          })
        ],
        chatMessageForm: new ChatMessageForm({}),
        fileButton: new Button({
          customClass: 'chat_settings-button chat_settings-button_type-modal chat_settings-button_type-select',
          events: {
            click: () => this.handleClickFileButton(),
          },
        }),
        userButton: new Button({
          customClass: 'chat_settings-button',
          events: {
            click: () => this.handleClickUserButton(),
          },
        }),
        addUserModal: new AddUserModal({}),
        removeUserModal: new RemoveUserModal({}),
        addGeoModal: new AddGeoModal({}),
        addFileModal: new AddFileModal({}),
        addFotoModal: new AddFotoModal({}),
        addUserButton: new Button({
          customClass: "chat_settings-button chat_settings-button_type-modal chat_settings-button_type-add",
          events: {
            click: () => this.handleClickAddUserButton(),
          },
        }),
        removeUserButton: new Button({
          customClass: "chat_settings-button chat_settings-button_type-modal chat_settings-button_type-remove",
          events: {
            click: () => this.handleClickRemoveUserButton(),
          },
        }),
        addFotoButton: new Button({
          customClass: "chat_settings-button chat_settings-button_type-modal chat_settings-button_type-foto",
          events: {
            click: () => this.handleClickAddFotoButton(),
          },
        }),
        addFileButton: new Button({
          customClass: "chat_settings-button chat_settings-button_type-modal chat_settings-button_type-file",
          events: {
            click: () => this.handleClickAddFileButton(),
          },
        }),
        addGeoButton: new Button({
          customClass: "chat_settings-button chat_settings-button_type-modal chat_settings-button_type-geo",
          events: {
            click: () => this.handleClickAddGeoButton(),
          },
        })
      },
    );
  }

  handleClickAddGeoButton() {
    const modal = document.querySelector('[data-modal-name=add-geo]');
    if(modal){
      (modal! as HTMLElement).style.display ="flex";
    }
    return;
  }

  handleClickAddFileButton() {
    const modal = document.querySelector('[data-modal-name=add-file]');
    if(modal){
      (modal! as HTMLElement).style.display ="flex";
    }
    return;
  }

  handleClickAddFotoButton() {
    const modal = document.querySelector('[data-modal-name=add-foto]');
    if(modal){
      (modal! as HTMLElement).style.display ="flex";
    }
    return;
  }

  handleClickAddUserButton() {
    const modal = document.querySelector('[data-modal-name=add-user]');
    if(modal){
      (modal! as HTMLElement).style.display ="flex";
    }
    return;
  }

  handleClickRemoveUserButton() {
    const modal = document.querySelector('[data-modal-name=remove-user]');
    if(modal){
      (modal! as HTMLElement).style.display ="flex";
    }
    return;
  }

  handleClickFileButton() {
    if (!this.props.isOpenFileModal) {
      this.setProps({
        isOpenFileModal: 'true',
      });
    } else {
      this.setProps({
        isOpenFileModal: '',
      });
    }
  }

  handleClickUserButton() {
    if (!this.props.isOpenUserModal) {
      this.setProps({
        isOpenUserModal: 'true',
      });
    } else {
      this.setProps({
        isOpenUserModal: '',
      });
    }
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      login: formData.get('login'),
      password: formData.get('password'),
    };
    if(e.target) {
      const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
      if (formIsValid) {
        console.log(data);
      }
    }
  }

  render() {
    return this.compile(compile(chatTemplate), { ...this.props });
  }
}
