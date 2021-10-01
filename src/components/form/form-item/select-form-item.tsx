import React from 'react';
import { IFormItemProps } from '../form';

export default function SelectFormItem(props: IFormItemProps): JSX.Element {
  return (
    <label htmlFor={props.nameItem}>
    <span className="name-field">{props.nameItem}:</span>
    <select
      name={props.nameItem}
      value={props.value[props.nameItem] as string}
      onChange={(event) => {
        props.setValue({ ...props.value, [props.nameItem]: event.target.value });
      }}
    >
      <option>Russia</option>
      <option>USA</option>
      <option>China</option>
    </select>
  </label>
  );
}
