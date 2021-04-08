import React, { useEffect, useState } from "react";
import InputField from './InputField';
import { SIGNUP_FIELD_KEYS, SIGNUP_FORM_INIT_STATE } from '../constants/forms';
import { validateInputField } from '../utils/validators';

export default function SignUp(props) {
  const formKeys = Object.keys(SIGNUP_FIELD_KEYS);
  const [formValues, setFormValues] = useState({
    [SIGNUP_FIELD_KEYS.firstName]: '',
    [SIGNUP_FIELD_KEYS.lastName]: '',
    [SIGNUP_FIELD_KEYS.password]: '',
    [SIGNUP_FIELD_KEYS.email]: ''
  });
  const [form, setForm] = useState(SIGNUP_FORM_INIT_STATE);
  useEffect(() => {
    const updatedForm = Object.assign({}, form);
    Object.keys(updatedForm.controls).forEach(key => {
      const formControlEntry = Object.assign({}, form.controls[key], {
        valid: validateInputField(formValues[key], form.controls[key].validators)
      });
      updatedForm.controls[key] = formControlEntry;
    });
    setForm(updatedForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues.firstName, formValues.lastName, formValues.email, formValues.password])

  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    setFormValid(Object.values(form.controls).every(control => control.valid === true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues.firstName, formValues.lastName, formValues.email, formValues.password])

  function submitForm(e) {
    e.preventDefault();
    props.onSubmit(formValues);
  }

  function updateFormValue(newValue) {
    const newValues = Object.assign({}, formValues, {
      [newValue.key]: newValue.value
    });
    setFormValues(newValues);
  }

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        {formKeys.map((key, i) => {
          return (
            <InputField
              key={key}
              id={key}
              value={formValues[key]}
              label={form.controls[key].label}
              type={form.controls[key].type}
              valid={form.controls[key].valid}
              placeholder={form.controls[key].placeholder}
              onChange={updateFormValue} />
          );
        })}
        <button type="submit" className="mt-3 btn btn-outline-light btn-lg" disabled={formValid ? null : 'disabled'}>Submit</button>
      </form>
    </div>
  );
};
