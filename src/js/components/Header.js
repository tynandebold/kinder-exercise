import React from 'react';

export default function Header() {
  return (
    <header className="product-header">
      <h1 className="product-header__name">
        <i className="icon-fire" style={{marginRight: .2 + 'em'}}></i>Kittens
      </h1>
      <div className="profile-photo profile-photo--user"></div>
    </header>
  )
}