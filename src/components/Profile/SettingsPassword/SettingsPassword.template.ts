export const settingsPasswordTemplate = `form.settings_form-container.settings_form-container_padding-up(name="password-edit")
     | !{oldPasswordInput} 
     | !{newPasswordInput} 
     | !{confirmPasswordInput} 
     .settings_button-container.settings_button-container_type-save
       button.settings_button.settings_button_type-save Сохранить
     a.settings_link(href=linkTo)
       .settings_link-img`;
