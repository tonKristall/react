import React, { Dispatch, SetStateAction, useState } from 'react';
import './form.scss';
import TextFormItem from './form-item/text-form-item';
import SwitchFormItem from './form-item/switch-form-item';
import DateFormItem from './form-item/date-form-item';
import SelectFormItem from './form-item/select-form-item';
import CheckFormItem from './form-item/check-form-item';

interface IFormProps {
  setUsersData: Dispatch<SetStateAction<Record<string, unknown>[]>>;
}

export interface IFormStringItemProps {
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  nameItem: string,
}

export interface IFormBooleanItemProps {
  value: boolean,
  setValue: Dispatch<SetStateAction<boolean>>,
  nameItem: string,
}

export default function Form(props: IFormProps): JSX.Element {
  const formItemsNames = {
    nameItem: 'name',
    surnameItem: 'surname',
    genderItem: 'gender',
    birthdateItem: 'birthdate',
    countryItem: 'country',
    subscribeItem: 'subscribe',
  };
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('Male');
  const [birthdate, setBirthdate] = useState('');
  const [country, setCountry] = useState('Russia');
  const [subscribe, setSubscribe] = useState(true);
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    props.setUsersData((state: Record<string, unknown>[]) => [
      ...state,
      {
        name,
        surname,
        gender,
        birthdate,
        country,
        subscribe,
      },
    ]);
  };

  return (
    <div className="form">
      <div className="form__wrapper">
        <form className="form__form" onSubmit={handleSubmit}>
          <TextFormItem
            value={name}
            setValue={setName}
            nameItem={formItemsNames.nameItem}
          />
          <TextFormItem
            value={surname}
            setValue={setSurname}
            nameItem={formItemsNames.surnameItem}
          />
          <SwitchFormItem
            value={gender}
            setValue={setGender}
            nameItem={formItemsNames.genderItem}
          />
          <DateFormItem
            value={birthdate}
            setValue={setBirthdate}
            nameItem={formItemsNames.birthdateItem}
          />
          <SelectFormItem
            value={country}
            setValue={setCountry}
            nameItem={formItemsNames.countryItem}
          />
          <CheckFormItem
            value={subscribe}
            setValue={setSubscribe}
            nameItem={formItemsNames.subscribeItem}
          />
          <div>
            <input className="form__button" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}
