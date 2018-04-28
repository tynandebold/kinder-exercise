import React from 'react';

export default function Buttons(props) {
  return (
    <div className='btns-wrapper'>
      <button id='pass' onClick={() => props.handleChange('pass')}>
        <i className="icon-cancel"></i>
      </button>
      <button id='super-like' onClick={() => props.handleChange('super')}>
        <i className="icon-star"></i>
      </button>
      <button id="like" onClick={() => props.handleChange('like')}>
        <i className="icon-heart"></i>
      </button>
    </div>
  )
}