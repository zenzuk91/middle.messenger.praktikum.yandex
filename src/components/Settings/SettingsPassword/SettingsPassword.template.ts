export const settingsPasswordTemplate =
  `section.settings
    .settings_avatar-container
      img.settings_avatar.settings_avatar_type_main(src=userInfo.avatar || 'https://i.gifer.com/Q2RE.gif', alt="Аватар")
    p.settings_user-name=userInfo.login
    form.settings_form-container.settings_form-container_padding-up(name="password-edit")
      | !{oldPasswordInput} 
      | !{newPasswordInput} 
      | !{confirmPasswordInput} 
      .settings_button-container.settings_button-container_type-save
        button.settings_button.settings_button_type-save Сохранить
    | !{linkButton}`;
