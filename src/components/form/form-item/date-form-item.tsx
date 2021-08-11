import React from 'react';
import { IFormStringItemProps } from '../form';

export default function DateFormItem(props: IFormStringItemProps): JSX.Element {
  return (
    <label htmlFor={props.nameItem}>
      <span>{props.nameItem}:</span>
      <input
        type="date"
        name={props.nameItem}
        value={props.value}
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
      />
    </label>
  );
}
