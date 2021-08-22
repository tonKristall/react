import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import './form.scss';
import TextFormItem from './form-item/text-form-item';
import SwitchFormItem from './form-item/switch-form-item';
import DateFormItem from './form-item/date-form-item';
import SelectFormItem from './form-item/select-form-item';
import CheckFormItem from './form-item/check-form-item';
import Validate from '../../service/validation/validation';

const DEFAULT_DATA_FORM: Record<string, unknown> = {
  name: '',
  surname: '',
  gender: 'Male',
  birthdate: '',
  country: 'Russia',
  subscribe: true,
};

const FORM_ITEMS_NAMES = {
  nameItem: 'name',
  surnameItem: 'surname',
  genderItem: 'gender',
  birthdateItem: 'birthdate',
  countryItem: 'country',
  subscribeItem: 'subscribe',
};

interface IFormProps {
  setUsersData: Dispatch<SetStateAction<Record<string, unknown>[]>>;
}
export interface IFormItemProps {
  value: Record<string, unknown>;
  setValue: Dispatch<SetStateAction<Record<string, unknown>>>;
  nameItem: string;
}
export interface IFormRequiredItemProps extends IFormItemProps {
  errors: Record<string, unknown>;
  setErrors: Dispatch<SetStateAction<Record<string, unknown>>>;
}

export default function Form(props: IFormProps): JSX.Element {
  const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM);

  const [errors, setErrors] = useState({});

  const requiredFields = {
    name: dataForm.name,
    surname: dataForm.surname,
    birthdate: dataForm.birthdate,
    subscribe: dataForm.subscribe,
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      props.setUsersData((state: Record<string, unknown>[]) => [...state, dataForm]);
    }
  };

  useEffect(() => {
    Validate(setErrors, requiredFields);
  }, Object.values(requiredFields));

  return (
    <div className="form">
      <div className="form__wrapper">
        <form className="form__form" onSubmit={handleSubmit}>
          <TextFormItem
            value={dataForm}
            setValue={setDataForm}
            nameItem={FORM_ITEMS_NAMES.nameItem}
            errors={errors}
            setErrors={setErrors}
          />
          <TextFormItem
            value={dataForm}
            setValue={setDataForm}
            nameItem={FORM_ITEMS_NAMES.surnameItem}
            errors={errors}
            setErrors={setErrors}
          />
          <SwitchFormItem
            value={dataForm}
            setValue={setDataForm}
            nameItem={FORM_ITEMS_NAMES.genderItem}
          />
          <DateFormItem
            value={dataForm}
            setValue={setDataForm}
            nameItem={FORM_ITEMS_NAMES.birthdateItem}
            errors={errors}
            setErrors={setErrors}
          />
          <SelectFormItem
            value={dataForm}
            setValue={setDataForm}
            nameItem={FORM_ITEMS_NAMES.countryItem}
          />
          <CheckFormItem
            value={dataForm}
            setValue={setDataForm}
            nameItem={FORM_ITEMS_NAMES.subscribeItem}
            errors={errors}
            setErrors={setErrors}
          />
          <div>
            <input className="form__button" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}
