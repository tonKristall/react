import React from 'react';
import { IFormItemProps } from '../form';

export default function SwitchFormItem(props: IFormItemProps): JSX.Element {
  return (
    <label htmlFor={props.nameItem}>
      <span className="name-field">{props.nameItem}:</span>
      <input
        className="switch"
        type="checkbox"
        name={props.nameItem}
        value={props.value[props.nameItem] as string}
        onChange={() => {
          let value = props.value[props.nameItem] ==="Male" ? "Female" : "Male";
          props.setValue({ ...props.value, [props.nameItem]: value });
          // props.setValue((props.value) => (prev === 'Male' ? 'Female' : 'Male'));
        }}
      />
    </label>
  );
}
