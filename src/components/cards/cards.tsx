import React from 'react';
import './cards.scss';

interface ICardProps {
  UsersData: Record<string, unknown>[];
}

export default function CardsContainer(props: ICardProps): JSX.Element {
  const card = props.UsersData.map((user) => (
      <div className="card">
        {Object.entries(user).map((userData) => <span>{userData.join(': ')}</span>)}
      </div>
  ));
  return (
    <div className="cards-container">
      {card}
    </div>
  );
}
