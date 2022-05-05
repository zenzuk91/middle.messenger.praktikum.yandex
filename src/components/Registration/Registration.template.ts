export const registrationTemplate = `section.form
    p.form_title Регистрация
       form.form_form(name="registration")
         | !{emailInput}
         | !{loginInput}
         | !{nameInput}
         | !{secondNameInput}
         | !{phoneInput}
         | !{passwordInput}  
         | !{passwordSubmitInput}          
         button.form_submit-button Зарегистрироваться
       | !{linkButton}`;
