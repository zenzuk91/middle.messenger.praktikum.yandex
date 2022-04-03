export const chatChatTemplate = `li.chat_chat-container(class=isSelected ? 'chat_chat-container_selected': '')
    img.chat_chat-avatar(src=avatarSrc, alt="Аватар")
    p.chat_chat-name=chatName
    p.chat_chat-last-message=chatLastMessage
    p.chat_chat-date=chatDate
    if chatMessageCount
      .chat_chat-message-count=chatMessageCount`;
