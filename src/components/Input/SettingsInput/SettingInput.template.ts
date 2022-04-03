export const settingInputTemplate =
 `.settings_input-main-container
    .settings_input-container
      label.settings_label #{labelName}
      input.settings_input(
      type=inputType
      name=inputName
      placeholder=inputPlaceholder
      required=required
      value=value
      minlength=minlength
      maxlength=maxlength
      pattern=pattern
      )
    span.settings_input-error #{inputErrorText}`;
