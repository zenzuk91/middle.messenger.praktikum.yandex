export const LoginTemplate = `section.form
    p.form_title Вход
       form.form_form(name="Login")
         | !{loginInput}
         | !{passwordInput}
         button.form_submit-button Авторизоваться
       | !{linkButton}`;
