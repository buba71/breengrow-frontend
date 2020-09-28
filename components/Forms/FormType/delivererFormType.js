import FormBuilder from './../../FormFactory/classes/FormBuilder';

export function delivererFormType() {
  const form = new FormBuilder();
  form.addInput('text', 'firstName', ['two']);
  form.addInput('text', 'lastName', ['two']);
  form.addInput('text', 'phone', ['one']);
  form.addInput('email', 'email', ['one']);
  form.addInput('password', 'password', ['one']);
  form.addInput('password', 'repeat_password', ['one']);
  return form.getForm();
}
