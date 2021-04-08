import React, { useEffect, useState } from "react";

export default function InputField(props) {
  const [pristine, setPristine] = useState(true);
  const [validationClass, setValidationClass] = useState('');

  function handleChange(event) {
    props.onChange({
      key: props.id,
      value: event.target.value
    });
    if (event.target.value) {
      setPristine(false);
    }
  }
  useEffect(() => {
    setValidationClass(props.valid ? 'is-valid' : 'is-invalid');
  }, [props.valid])

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={props.id}>{props.label}</label>
      <input className={`form-control ${!pristine ? validationClass : ''}`}
        type={props.type}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleChange} />
    </div>
  );
};
