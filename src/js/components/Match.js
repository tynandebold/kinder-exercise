import React from 'react';

export default function Match(props) {
  let match;    

  if (props.data.matched) {
    match = 
    <div className='match-overlay'>
      <div className='match-overlay__message'>It's a match!</div>
      <div className='match-overlay__users'>
        <div className="match-overlay__user-info">
          <div className="profile-photo profile-photo--user"></div>
          <small>You</small>
        </div>
        <div className="match-overlay__user-info">
          <div 
            className="profile-photo"
            style={{ backgroundImage: `url(${props.data.matchedUser.images[0]})` }}>
          </div>
          <small>{props.data.matchedUser.name}</small>
        </div>
      </div>
      <button className='match-overlay__continue' onClick={props.continuePlaying}>Continue playing</button>
    </div>;
  }

  return (
    <div>
      {match}
    </div>
  )
}