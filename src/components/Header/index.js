import React from 'react';

import './styles.scss';
import logoImg from '../../assets/logo.png';

export default function Header() {
  return (
    <div className="header-component">
      <img src={logoImg} alt="logo" />
    </div>
  );
}
