import { expect } from 'chai';
import Input from './Input';
import { InputProps } from './Input.types';

describe('Input', () => {
  it('Рендер компонента Input', () => {
    const props: InputProps = {
      labelName: 'название лэйбла',
      inputType: 'text',
      inputName: 'inputName',
      inputPlaceholder: 'placeholder',
      required: 'true',
      inputValue: 'value',
      minlength: '10',
      maxlength: '100',
      pattern: '/[a-z]/gi',
      inputErrorText: 'errorText',
    };
    const component = new Input(props);

    expect(component.props.labelName).to.be.equal(props.labelName);
    expect(component.props.inputType).to.be.equal(props.inputType);
    expect(component.props.inputName).to.be.equal(props.inputName);
    expect(component.props.inputPlaceholder).to.be.equal(props.inputPlaceholder);
    expect(component.props.required).to.be.equal(props.required);
    expect(component.props.inputValue).to.be.equal(props.inputValue);
    expect(component.props.minlength).to.be.equal(props.minlength);
    expect(component.props.maxlength).to.be.equal(props.maxlength);
    expect(component.props.pattern).to.be.equal(props.pattern);
    expect(component.props.inputErrorText).to.be.equal(props.inputErrorText);
  });
});
