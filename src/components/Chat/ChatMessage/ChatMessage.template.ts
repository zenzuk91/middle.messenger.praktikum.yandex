export const chatMessageTemplate = `li.chat_message-container(class=isUserMessage ? 'chat_message-container_current-user': '')
    p.chat_message(class=isChecked ? 'chat_message_checked': '')=message
    p.chat_message-time(class=isChecked ? 'chat_message-time_checked': '')=time
    if imgSrc
      img.chat_message-img(src=imgSrc, alt="Аватар")`;
