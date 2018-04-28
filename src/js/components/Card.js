import React from 'react';
import UserInfo from './UserInfo';

export default function Card(props) {
  const cards = props.data.data.map(kitten => {    
    const stateClass = (props.data.activeItem === kitten.id) ? 'active card' : 'inactive card';
    let decisionClass = '';
    if (!props.data.matched) {
      decisionClass = (props.data.answeredItem === kitten.id) ? props.data.selectType : '';
    }
    
    return <li
      key={kitten.id}
      className={stateClass + decisionClass}>
      <div
        key={kitten.images[0]}
        className="kitten-photo"
        style={{ backgroundImage: `url(${kitten.images[0]})` }}>
      </div>
      <UserInfo user={kitten} />
    </li>
  });

  return (
    <div className='display-wrapper'>
      <ul className='cards-wrapper'>
        {cards}
      </ul>
    </div>
  )
}