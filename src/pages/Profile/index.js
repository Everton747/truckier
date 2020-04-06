import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import './styles.scss';

import Header from '../../components/Header';

export default function Edit(props) {

  const history = useHistory();

  return (
    <div>
      <Header></Header>
      <div className="profile-container">

        <div className="form-header">
          <div className="form-return" onClick={() => history.push('/')}>
            <MdKeyboardArrowLeft size={30} color="#000" />
            <div>Voltar</div>
          </div>
          <div className="container-name">{props.driver ? 'Editar Motorista': 'Novo Motorista'}</div>
        </div>

        <form>
          <input placeholder="Nome" />
          <input placeholder="Telefone" />
          <input placeholder="Data de nascimento" />
          <input placeholder="CPF" />
          <input placeholder="Nome" />
          <div className="input-group">
            <input placeholder="CNH" />
            <input placeholder="Tipo" />
          </div>
          <button>Cadastrar</button>
        </form>

      </div>
    </div>
  );
}
