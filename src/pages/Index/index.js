import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

import './styles.scss';
import driverShape from '../../assets/driverShape.png';

import Header from '../../components/Header';

export default function Index() {

  const drivers = useSelector(state => state.data);

  return (
    <div>
      <Header />
      <div className="index-container">
        <Link to="/new">
          <button>Adicionar</button>
        </Link>
        <ul>
          {drivers.map((driver, index) => {
            return (
              <li key={index} className={driver.isEnable ? '' : 'disabled'}>
                <img src={driverShape} alt="Foto Motorista" />
                <section>
                  <p>{driver.name}</p>
                  <p>{driver.cpf}</p>
                </section>
                <Link className="button-to-profile" to={{ pathname: "/profile", driver }} >
                  <MdKeyboardArrowRight size={45} color="#000" className="icon"></MdKeyboardArrowRight>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
