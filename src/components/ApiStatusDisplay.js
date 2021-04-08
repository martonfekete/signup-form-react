import React from 'react';

export default function ApiStatusDisplay(props) {
  return (
    <div className={`mt-3 mb-2 fs-3 ${props.success ? 'text-success' : ''} ${props.failed ? 'text-danger' : ''} ${props.other ? 'text-warning' : ''}`}>{props.message}</div>
  );
}
