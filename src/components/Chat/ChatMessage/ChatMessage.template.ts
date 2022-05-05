export const chatMessageTemplate =
 `if customClass
    li.chat_message-container(class=customClass)
      p.chat_message.chat_message_type-nomessage=content
else  
  li.chat_message-container(class=isUserMessage ? 'chat_message-container_current-user': '')
    p.chat_message(class=is_read ? 'chat_message_checked': '')=content
    p.chat_message-time(class=isChecked ? 'chat_message-time_checked': '')=time
    if imgSrc
      img.chat_message-img(src=imgSrc, alt="Аватар")`;
