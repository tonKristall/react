import React, { useState } from 'react';
import './form.scss';

interface IFormProps {
  setUsersData: any,
  // ((state: Record<string, unknown>[]) => Record<string, unknown>[]);
}

export default function Form(props: IFormProps): JSX.Element {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [country, setCountry] = useState('Russia');
  const [subscribe, setSubscribe] = useState(false);
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.setUsersData((state: Record<string, unknown>[]) => [...state, {
      name, surname, birthdate, country, subscribe,
    }]);
  };

  return (
    <div className="form">
      <div className="form__wrapper">
        <form className="form__form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>
          <label htmlFor="surname">
            surname:
            <input
              type="text"
              name="surname"
              value={surname}
              onChange={(event) => {
                setSurname(event.target.value);
              }}
            />
          </label>
          <label htmlFor="birthdate">
            birthdate:
            <input
              type="date"
              name="birthdate"
              value={birthdate}
              onChange={(event) => {
                setBirthdate(event.target.value);
              }}
            />
          </label>
          <label htmlFor="country">
            country:
            <select
              name="coutry"
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            >
              <option>Russia</option>
              <option>USA</option>
              <option>China</option>
            </select>
          </label>
          <label htmlFor="subscribe">
            subscribe:
            <input
              type="checkbox"
              name="subscribe"
              checked={subscribe}
              onChange={() => {
                setSubscribe((prev) => !prev);
              }}
            />
          </label>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}
