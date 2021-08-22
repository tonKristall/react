import React from 'react';
import { IFormRequiredBooleanItemProps } from '../form';
import InvalidField from './invalid-field';

export default function CheckFormItem(props: IFormRequiredBooleanItemProps): JSX.Element {
  return (
    <label htmlFor="subscribe">
      <span className="name-field">subscribe:</span>
      <input
        type="checkbox"
        name="subscribe"
        checked={props.value}
        onChange={() => {
          props.setValue((prev) => !prev);
        }}
      />
      <InvalidField errors={props.errors} nameItem={props.nameItem} />
    </label>
  );
}
