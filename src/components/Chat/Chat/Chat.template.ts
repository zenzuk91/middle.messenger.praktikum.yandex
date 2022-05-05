export const chatTemplate =
  `section.chat
    .chat_container
      .chat_left-container
        .chat_profile
          | !{linkButton}
        .chat_search
          input.chat_input.chat_input_type-search(
            type="text"
            placeholder="Поиск"
          )                
        ul.chat_chats-list
         | !{chats}
        | !{addChat}
      .chat_right-container
        .chat_settings
          .chat_settings-user-info-container
            if userInfo.avatar
              img.chat_settings-avatar(src=userInfo.avatar, alt="Аватар")
            else
              div.chat_settings-avatar  
            p.chat_settings-user-name=userInfo.first_name            
          | !{userButton}          
          if isOpenUserModal
            .chat_settings-modal.chat_settings-modal_type-user.chat_settings-modal_show
              .chat_settings-modal-container              
                | !{addUserButton}                 
                p.chat_settings-modal-text Добавить пользователя
              .chat_settings-modal-container
                | !{removeUserButton}
                p.chat_settings-modal-text Удалить пользователя              
        ul.chat_messages
          if messages
            | !{messages}
        .chat_message-input-container        
          | !{fileButton}  
          | !{chatMessageForm}
          if isOpenFileModal
            .chat_settings-modal.chat_settings-modal_type-message.chat_settings-modal_show
              .chat_settings-modal-container
                | !{addFotoButton}              
                p.chat_settings-modal-text Фото или Видео
              .chat_settings-modal-container
                | !{addFileButton}              
                p.chat_settings-modal-text Файл
              .chat_settings-modal-container
                | !{addGeoButton}              
                p.chat_settings-modal-text Локация
    | !{addUserModal}
    | !{removeUserModal}
    | !{addGeoModal}
    | !{addFileModal}
    | !{addFotoModal}
    | !{addNewChatModal}`;
