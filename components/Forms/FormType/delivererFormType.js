import FormBuilder from './../../FormFactory/classes/FormBuilder';

export function delivererFormType() {
  const form = new FormBuilder();
  form.addElement('Input', ['text', 'firstName', 'firstName', 'two']);
  form.addElement('Input', ['text', 'lastName', 'lastName', 'two']);
  form.addElement('Input', ['text', 'phone', 'phone', 'one']);
  form.addElement('Input', ['text', 'email', 'email', 'one']);
  form.addElement('Input', ['password', 'password', 'password', 'one']);
  form.addElement('Input', [
    'password',
    'repeat_password',
    'repeat password',
    'one'
  ]);
  return form.getForm();
}
