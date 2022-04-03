import { compile } from 'pug';
<<<<<<< HEAD
import { Block } from '../../../utils/Block/index';
=======
import { Block } from '../../../utils/Block';
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
import { chatMessageFormTemplate } from './ChatMessageForm.template';
import { ChatMessageFormProps } from './ChatMessageForm.types';

export default class ChatMessageForm extends Block<ChatMessageFormProps> {
  public constructor(props: ChatMessageFormProps) {
    super(
      'div',
      {
        ...props,
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
      },
    );
  }

  public handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      message: formData.get('message'),
    };
    this.setProps({
      value: '',
    });
    console.log(data);
  }

  public render() {
    return this.compile(compile(chatMessageFormTemplate), { ...this.props });
  }
}
