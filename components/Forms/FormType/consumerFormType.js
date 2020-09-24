import FormBuilder from '../../FormFactory/classes/FormBuilder.js';

export function consumerFormType() {
  const form = new FormBuilder();
  form.addInput('text', 'firstName', ['two']);
  form.addInput('text', 'lastName', ['two']);
  form.addInput('email', 'email', ['one']);
  form.addInput('password', 'password', ['one']);
  form.addInput('password', 'repeat_password', ['one']);
  return form.getForm();
}

export function consumerAddressFormType() {
  const form = new FormBuilder();
  form.addInput('text', 'firstName', ['two']);
  form.addInput('text', 'lastName', ['two']);
  form.addInput('text', 'street', ['one']);
  form.addInput('text', 'zipCode', ['one']);
  form.addInput('text', 'city', ['one']);
  return form.getForm();
}
