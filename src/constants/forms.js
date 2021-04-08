export const SIGNUP_FIELD_KEYS = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password'
};

export const VALIDATORS = {
  required: 'required',
  pattern: 'pattern'
};

export const SIGNUP_FORM_INIT_STATE = {
  controls: {
    [SIGNUP_FIELD_KEYS.firstName]: {
      label: 'First Name',
      placeholder: 'Jane',
      type: 'text',
      validators: {
        [VALIDATORS.required]: true
      },
      valid: false,
      error: ''
    }, [SIGNUP_FIELD_KEYS.lastName]: {
      label: 'Last Name',
      placeholder: 'Doe',
      type: 'text',
      validators: {
        [VALIDATORS.required]: true
      },
      valid: false,
      error: ''
    }, [SIGNUP_FIELD_KEYS.email]: {
      label: 'Email',
      placeholder: 'janedoe@email.com',
      type: 'text',
      validators: {
        [VALIDATORS.required]: true,
        [VALIDATORS.pattern]: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm
      },
      valid: false,
      error: ''
    }, [SIGNUP_FIELD_KEYS.password]: {
      label: 'Password',
      placeholder: 'Password (min. 8 characters with lower- and uppercase letters)',
      type: 'password',
      validators: {
        [VALIDATORS.required]: true,
        [VALIDATORS.pattern]: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/gm
      },
      valid: false,
      error: ''
    }
  }
};