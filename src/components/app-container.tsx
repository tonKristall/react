import React, { useState } from 'react';
import CardsContainer from './cards/cards';
import Form from './form/form';

export default function Container(): JSX.Element {
  const initialUserData: Record<string, unknown>[] = [];
  const [UsersData, setUsersData] = useState(initialUserData);
  return (
    <div className="app-container">
      <Form setUsersData={setUsersData} />
      <CardsContainer UsersData={UsersData} />
    </div>
  );
}
