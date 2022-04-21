export const settingsUserTemplate =
  `section.settings
    .settings_avatar-container
      img.settings_avatar(src=userInfo.avatar || ' ', alt="Аватар")
      | !{addAvatarButton}
    p.settings_user-name=userInfo.login
    form.settings_form-container.settings_form-container_padding-up(name="user-edit")
      | !{emailInput} 
      | !{loginInput} 
      | !{nameInput} 
      | !{secondNameInput} 
      | !{nameInChatInput} 
      | !{phoneInput} 
      .settings_button-container.settings_button-container_type-save
        button.settings_button.settings_button_type-save Сохранить
    | !{linkButton}
    | !{addAvatarModal}`;
