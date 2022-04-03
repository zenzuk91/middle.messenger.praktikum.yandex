import Button from '../../Button/Button/Button';
<<<<<<< HEAD
import ChatList from '../ChatList/ChatList';
=======
import ChatChat from '../ChatChat/ChatChat';
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
import ChatProfile from '../ChatProfile/ChatProfile';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatMessageForm from '../ChatMessageForm/ChatMessageForm';
import AddUserModal from '../../Modal/AddUserModal/AddUserModal';
import RemoveUserModal from '../../Modal/RemoveUserModal/RemoveUserModal';
import AddGeoModal from '../../Modal/AddGeoModal/AddGeoModal';
import AddFileModal from '../../Modal/AddFileModal/AddFileModal';
<<<<<<< HEAD
import AddFotoModal from '../../Modal/AddFotoModal/AddFotoModal';

type ChatProps = {
  profileLinkTo?: string;
  profileLinkText?: string;
  avatarSrc?: string;
  userInfo?: Record<string, unknown>;
  ChatList?: ChatList | ChatList[];
=======
import AddFotoModal from '../../Modal/AddFotoModal/AddFotoModal'; 

type ChatProps = { 
  profileLinkTo?: string;
  profileLinkText?: string; 
  avatarSrc?: string;
  userInfo?: Record<string, unknown>;
  chatChat?: ChatChat | ChatChat[];
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
  chatProfile?: ChatProfile;
  chatMessage?: ChatMessage | ChatMessage[];
  chatMessageForm?: ChatMessageForm;
  fileButton?: Button;
  userButton?: Button;
  addUserModal?: AddUserModal;
  removeUserModal?: RemoveUserModal;
  addGeoModal?: AddGeoModal;
  addFileModal?: AddFileModal;
  addFotoModal?: AddFotoModal;
  addUserButton?: Button;
  removeUserButton?: Button;
  addFotoButton?: Button;
  addFileButton?: Button;
  addGeoButton?: Button;
}

export {
  ChatProps,
};
