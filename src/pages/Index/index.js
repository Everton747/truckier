import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

import './styles.scss';
import driverShape from '../../assets/driverShape.png';

import Header from '../../components/Header';

export default function Index() {
  return (
    <div>
      <Header />
      <div className="index-container">
        <button>Adicionar</button>
        <ul>
          <li>
            <img src={driverShape} alt="Foto Motorista" />
            <section>
              <p>Rosimeire Fernandes Tabosa Vanzela</p>
              <p>653.617.171-34</p>
            </section>
            <Link className="button-to-profile" to="/Edit">
              <MdKeyboardArrowRight size={45} color="#000" className="icon"></MdKeyboardArrowRight>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
