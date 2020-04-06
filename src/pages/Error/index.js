import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';


import './styles.scss';

import logoImg from '../../assets/logo.png';

export default function Error() {
  return (
    <div className="error-container">
      <img src={logoImg} alt="logo" />
      <h1 className="error-code">404</h1>
      <h3 className="error-message">Página não encontrada</h3>
      <Link className="back-link" to="/">
        <MdArrowBack className="back-icon" size={25} color="#BE1E2D"/>
        Página Inicial
      </Link>
    </div>
  );
}
