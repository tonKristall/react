import React from 'react';
import { IFormRequiredItemProps } from '../form';

import InvalidField from './invalid-field';

export default function CheckFormItem(props: IFormRequiredItemProps): JSX.Element {
  return (
    <label htmlFor="subscribe">
      <span className="name-field">subscribe:</span>
      <input
        type="checkbox"
        name="subscribe"
        checked={props.value[props.nameItem] as boolean}
        onChange={() => {
          props.setValue({ ...props.value, [props.nameItem]: !props.value[props.nameItem] });
        }}
      />
      <InvalidField errors={props.errors} nameItem={props.nameItem} />
    </label>
  );
}
