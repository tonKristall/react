import React, { useState } from 'react';
import CardsContainer from './components/cards/cards';
import Form from './components/form/form';
import './styles.scss';

function Container(): JSX.Element {
  const [UsersData, setUsersData] = useState([]);
  return (
    <div className="app-container">
      <Form setUsersData={setUsersData} />
      <CardsContainer UsersData={UsersData} />
    </div>
  );
}

export default function App(): JSX.Element {
  return <Container />;
}
