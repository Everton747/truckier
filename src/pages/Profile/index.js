import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StringFormatValidation from 'string-format-validation'
import { MdKeyboardArrowLeft } from 'react-icons/md';

import './styles.scss';

import Header from '../../components/Header';

export default function Edit(props) {

  const history = useHistory();
  const dispatch = useDispatch();

  const driver = props.location.driver;

  const [name, setName] = useState(driver ? driver.name : '');
  const [phone, setPhone] = useState(driver ? driver.phone : '');
  const [birthDate, setBirthDate] = useState(driver ? driver.birthDate : '');
  const [cpf, setCpf] = useState(driver ? driver.cpf : '');
  const [cnh, setCnh] = useState(driver ? driver.cnh : '');
  const [cnhType, setCnhType] = useState(driver ? driver.cnhType : '');
  const [isEnable, setIsEnable] = useState(driver ? driver.isEnable : true);

  useEffect(() => { setPhone(StringFormatValidation.format('(##) # ####-####', phone)); }, [phone]);
  useEffect(() => { setBirthDate(StringFormatValidation.format('##/##/####', birthDate)); }, [birthDate]);
  useEffect(() => { setCpf(StringFormatValidation.format('###.###.###-##', cpf)); }, [cpf]);

  function storeDriver(type) {
    const driver = { name, phone, birthDate, cpf, cnh, cnhType, isEnable };
    dispatch({ type, driver });
  }

  function createDriver(e) {
    e.preventDefault();
    storeDriver('ADD_DRIVER');
    history.push('/');
  }

  function updateDriver(e) {
    e.preventDefault();
    storeDriver('UPDATE_DRIVER');
    history.push('/');
  }

  function toggleDriver(e) {
    e.preventDefault();
    setIsEnable(!isEnable);
    storeDriver('TOGGLE_DRIVER', cpf);
  }

  return (
    <div>
      <Header></Header>
      <div className="profile-container">

        <div className="form-header">
          <div className="form-return" onClick={() => history.push('/')}>
            <MdKeyboardArrowLeft size={30} color="#000" />
            <div>Voltar</div>
          </div>
          <div className="container-name">{props.location.driver ? 'Editar Motorista' : 'Novo Motorista'}</div>
        </div>

        <form>
          <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
          <input placeholder="Data de nascimento" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
          <input placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
          <div className="input-group">
            <input placeholder="CNH" value={cnh} onChange={e => setCnh(e.target.value)} />
            <input placeholder="Tipo" value={cnhType} onChange={e => setCnhType(e.target.value)} />
          </div>
          {driver ? <button className={isEnable ? 'second-button' : ''} onClick={toggleDriver}>
            {isEnable ? 'Inativar Motorista' : 'Ativar Motorista'}
          </button> : null}
          {driver ?
            <button onClick={updateDriver}>Atualizar</button> :
            <button onClick={createDriver}>Cadastrar</button>
          }
        </form>
      </div>
    </div>
  );
}
