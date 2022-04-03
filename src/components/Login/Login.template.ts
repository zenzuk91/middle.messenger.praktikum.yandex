export const LoginTemplate = `section.form
  h1.form_title Вход
  form.form_form(name="login")
    | !{loginInput}
    | !{passwordInput}
    button.form_submit-button Авторизоваться
  a.form_link(href=linkTo)=formLinkText
  a.form_link(href="./chats.html") Сразу к чатам`
   