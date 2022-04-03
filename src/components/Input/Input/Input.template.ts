export const inputTemplate = `label.form_label #{labelName}
    input.form_input(
      type=inputType
      name=inputName
      placeholder=inputPlaceholder
      required=required
      value=inputValue
      minlength=minlength
      maxlength=maxlength
      pattern=pattern
    )
    span.form_input-error #{inputErrorText}`;
