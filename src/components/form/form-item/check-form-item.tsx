import React from 'react';
import { IFormBooleanItemProps } from '../form';

export default function CheckFormItem(props: IFormBooleanItemProps): JSX.Element {
  return (
    <label htmlFor="subscribe">
      <span>subscribe:</span>
      <input
        type="checkbox"
        name="subscribe"
        checked={props.value}
        onChange={() => {
          props.setValue((prev) => !prev);
        }}
      />
    </label>
  );
}
