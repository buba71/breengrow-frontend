import FormBuilder from '../../FormFactory/classes/FormBuilder.js';

export function growerFormType() {
  const form = new FormBuilder();
  form.addInput('text', 'firstName', ['two']);
  form.addInput('text', 'lastName', ['two']);
  form.addInput('email', 'email', ['one']);
  form.addInput('password', 'password', ['one']);
  form.addInput('password', 'repeat_password', ['one']);
  return form.getForm();
}

export function growerCompanyAdressType() {
  const form = new FormBuilder();
  form.addInput('text', 'name', ['two']);
  form.addInput('text', 'siret_number', ['two']);
  form.addInput('text', 'street', ['one']);
  form.addInput('text', 'city', ['two']);
  form.addInput('text', 'zip_code', ['two']);
  return form.getForm();
}
