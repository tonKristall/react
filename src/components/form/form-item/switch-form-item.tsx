import React from 'react';
import { IFormStringItemProps } from '../form';

export default function SwitchFormItem(props: IFormStringItemProps): JSX.Element {
  return (
    <label htmlFor={props.nameItem}>
      <span>{props.nameItem}:</span>
      <input
        className="switch"
        type="checkbox"
        name={props.nameItem}
        value={props.value}
        onChange={() => {
          props.setValue((prev) => (prev === 'Male' ? 'Female' : 'Male'));
        }}
      />
    </label>
  );
}
