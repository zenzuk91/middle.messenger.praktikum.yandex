export const chatProfileTemplate = `li.chat_chat-container.profile(class=isSelected ? 'chat_chat-container_selected': '')
    img.chat_chat-avatar(src=avatarSrc, alt="Аватар")
    p.chat_chat-name=chatName
    d.chat_chat-last-message=chatFavorite
    a.chat_profile-link(href=profileLinkTo)=profileLinkText
      span.chat_profile-link-img
    `;
  