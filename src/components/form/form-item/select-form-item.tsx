import React from 'react';
import { IFormStringItemProps } from '../form';

export default function SelectFormItem(props: IFormStringItemProps): JSX.Element {
  return (
    <label htmlFor={props.nameItem}>
    <span className="name-field">{props.nameItem}:</span>
    <select
      name={props.nameItem}
      value={props.value}
      onChange={(event) => {
        props.setValue(event.target.value);
      }}
    >
      <option>Russia</option>
      <option>USA</option>
      <option>China</option>
    </select>
  </label>
  );
}
