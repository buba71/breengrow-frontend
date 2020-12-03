import FormBuilder from '../../FormFactory/classes/FormBuilder.js';

export function consumerFormType() {
  const form = new FormBuilder();
  form.addElement('Input', ['text', 'firstName', 'firstName', 'two']);
  form.addElement('Input', ['text', 'lastName', 'lastName', 'two']);
  form.addElement('Input', ['email', 'email', 'email', 'one']);
  form.addElement('Input', ['password', 'password', 'password', 'one']);
  form.addElement('Input', [
    'password',
    'repeat_password',
    'repeat password',
    'one'
  ]);
  return form.getForm();
}

export function consumerAddressFormType() {
  const form = new FormBuilder();
  form.addElement('Input', ['text', 'firstName', 'firstName', 'two']);
  form.addElement('Input', ['text', 'lastName', 'lastName', 'two']);
  form.addElement('Input', ['text', 'street', 'street', 'one']);
  form.addElement('Input', ['text', 'zipCode', 'zipCode', 'one']);
  form.addElement('Input', ['text', 'city', 'city', 'one']);
  return form.getForm();
}
