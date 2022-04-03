export const modalTemplate =
  `.modal(data-modal-name=modalName)
     .modal_form-container
       p.modal_form-title #{modalFormTitle}
       form.modal_form(name=formName)
         | !{modalFormContent}
         button.modal_form-submit-button #{modalFormSubmitText}`;
