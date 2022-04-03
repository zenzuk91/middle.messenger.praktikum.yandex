export const registrationTemplate = `section.form
  h1.form_title Регистрация
  form.form_form(name="registration")
    | !{emailInput}
    | !{loginInput}
    | !{nameInput}
    | !{secondNameInput}
    | !{phoneInput}
    | !{passwordInput}  
    | !{passwordSubmitInput}          
    button.form_submit-button Зарегистрироваться
  a.form_link(href=linkTo)=formLinkText`