import FormBuilder from '../../FormFactory/classes/FormBuilder.js';

export function growerFormType() {
  const form = new FormBuilder();
  form.addInput('text', 'firstname', ['two']);
  form.addInput('text', 'lastname', ['two']);
  form.addInput('email', 'email', ['one']);
  form.addInput('password', 'password', ['one']);
  form.addInput('password', 'repeat password', ['one']);
  return form.getForm();
}

export function growerCompanyAdressType() {
  const form = new FormBuilder();
  form.addInput('text', 'company name', ['two']);
  form.addInput('text', 'siret number', ['two']);
  form.addInput('text', 'address', ['one']);
  form.addInput('text', 'city', ['two']);
  form.addInput('text', 'zipcode', ['two']);
  return form.getForm();
}
