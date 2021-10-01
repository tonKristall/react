import React from 'react';

interface IInvalidFieldProps {
  errors: Record<string, unknown>;
  nameItem: string;
}

export default function InvalidField(props: IInvalidFieldProps): JSX.Element {
  return (
    <span className="invalid-field">
      {props.errors[props.nameItem] !== undefined && 'It`s required field'}
    </span>
  );
}
