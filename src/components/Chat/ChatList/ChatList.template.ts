export const ChatListTemplate = `li.chat_chat-container(class=isSelected ? 'chat_chat-container_selected': '' data-id=id)
    if avatar
      img.chat_chat-avatar(src=avatar, alt="Аватар")
    else  
      div.chat_chat-avatar 
    p.chat_chat-name=title
    p.chat_chat-last-message=last_message
    p.chat_chat-date=chatDate || ''
    if unread_count
      .chat_chat-message-count=unread_count`;
