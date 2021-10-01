import React from 'react';
import { IFormRequiredItemProps } from '../form';
import InvalidField from './invalid-field';

export default function DateFormItem(props: IFormRequiredItemProps): JSX.Element {
  return (
    <label htmlFor={props.nameItem}>
      <span className="name-field">{props.nameItem}:</span>
      <input
        type="date"
        name={props.nameItem}
        value={props.value[props.nameItem] as string}
        onChange={(event) => {
          props.setValue({ ...props.value, [props.nameItem]: event.target.value });
        }}
      />
      <InvalidField errors={props.errors} nameItem={props.nameItem} />
    </label>
  );
}
