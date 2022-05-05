export const fileInputTemplate = `label.form_label #{labelName}
    input.form_input(
      type=inputType
      name=inputName
      placeholder=inputPlaceholder
      required=required
      value=inputValue
      minlength=minlength
      maxlength=maxlength
      pattern=pattern
      enctype=enctype || ''
    )
    span.form_input-error #{inputErrorText}`;
