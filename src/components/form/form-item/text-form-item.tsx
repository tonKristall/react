import React from 'react';
import { IFormRequiredStringItemProps } from '../form';
import InvalidField from './invalid-field';

export default function TextFormItem(props: IFormRequiredStringItemProps): JSX.Element {
  return (
    <label htmlFor={props.nameItem}>
      <span className="name-field">{props.nameItem}:</span>
      <input
        className="input-text"
        type="text"
        name={props.nameItem}
        value={props.value}
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
      />
      <InvalidField errors={props.errors} nameItem={props.nameItem} />
    </label>
  );
}
