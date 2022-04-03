import Button from '../../Button/Button/Button';
import ChatList from '../ChatList/ChatList';
import ChatProfile from '../ChatProfile/ChatProfile';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatMessageForm from '../ChatMessageForm/ChatMessageForm';
import AddUserModal from '../../Modal/AddUserModal/AddUserModal';
import RemoveUserModal from '../../Modal/RemoveUserModal/RemoveUserModal';
import AddGeoModal from '../../Modal/AddGeoModal/AddGeoModal';
import AddFileModal from '../../Modal/AddFileModal/AddFileModal';
import AddFotoModal from '../../Modal/AddFotoModal/AddFotoModal';

type ChatProps = {
  profileLinkTo?: string;
  profileLinkText?: string;
  avatarSrc?: string;
  userInfo?: Record<string, unknown>;
  ChatList?: ChatList | ChatList[];
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
