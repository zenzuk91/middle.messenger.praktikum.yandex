export const settingsTemplate = `section.settings
  .settings_avatar-container
    img.settings_avatar.settings_avatar_type_main(src=userInfo.avatar ? userInfo.avatar : 'https://i.gifer.com/Q2RE.gif', alt="Аватар")
  p.settings_user-name=(userInfo.login ? userInfo.login : '')
    form.settings_form-container(name="settings-user-info")
      .settings_input-container
        label.settings_label Почта
        input.settings_input(
        type="email"
        name="email"
        placeholder="Email"
        value=userInfo.email
        disabled=disabledUserInfoForm
        )
      .settings_input-container
        label.settings_label Логин
        input.settings_input(
        type="text"
        name="login"
        placeholder="Логин"
        value=userInfo.login
        disabled=disabledUserInfoForm
        )
      .settings_input-container
        label.settings_label Имя
        input.settings_input(
        type="text"
        name="first_name"
        placeholder="Имя"
        value=userInfo.first_name
        disabled=disabledUserInfoForm
        )
      .settings_input-container
        label.settings_label Фамилия
        input.settings_input(
        type="text"
        name="second_name"
        placeholder="Фамилия"
        value=userInfo.second_name
        disabled=disabledUserInfoForm
        )
      .settings_input-container
         label.settings_label Имя в чате
         input.settings_input(
         type="text"
         name="display_name"
         placeholder="Имя в чате"
         value=userInfo.display_name
         disabled=disabledUserInfoForm
         )        
      .settings_input-container
        label.settings_label Телефон
        input.settings_input(
        type="text"
        name="phone"
        placeholder="Телефон"
        value=userInfo.phone
        disabled=disabledUserInfoForm
        )
    .settings_button-container
      .settings_button-border-container
        | !{buttonChangeInfo}
      .settings_button-border-container
        | !{buttonChangePassword}
      .settings_button-border-container
        | !{buttonLogout}      
    | !{linkButton}`;
