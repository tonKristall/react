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
  const [subscribe, setSubscribe] = useState(true);
  const [gender, setGender] = useState('Male');
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.setUsersData((state: Record<string, unknown>[]) => [...state, {
      name, surname, gender, birthdate, country, subscribe,
    }]);
  };

  return (
    <div className="form">
      <div className="form__wrapper">
        <form className="form__form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>name:</span>
            <input
              className="input-text"
              type="text"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>
          <label htmlFor="surname">
            <span>surname:</span>
            <input
            className="input-text"
              type="text"
              name="surname"
              value={surname}
              onChange={(event) => {
                setSurname(event.target.value);
              }}
            />
          </label>
          <label htmlFor="gender">
            <span>gender:</span>
            <input
              className="switch"
              type="checkbox"
              name="gender"
              value={gender}
              onChange={() => {
                setGender((prev) => (prev === 'Male')?'Female':'Male');
              }}
            />
          </label>
          <label htmlFor="birthdate">
            <span>birthdate:</span>
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
            <span>country:</span>
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
            <span>subscribe:</span>
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
            <input className="form__button" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}
