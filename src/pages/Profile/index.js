import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import StringFormatValidation from 'string-format-validation'
import { MdKeyboardArrowLeft } from 'react-icons/md';

import './styles.scss';

import Header from '../../components/Header';

export default function Edit(props) {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnh, setCnh] = useState('');
  const [cnhType, setCnhType] = useState('');

  useEffect(() => { setPhone(StringFormatValidation.format('(##) # ####-####', phone)); }, [phone]);
  useEffect(() => { setBirthDate(StringFormatValidation.format('##/##/####', birthDate)); }, [birthDate]);
  useEffect(() => { setCpf(StringFormatValidation.format('###.###.###-##', cpf)); }, [cpf]);

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
          <div className="container-name">{props.driver ? 'Editar Motorista' : 'Novo Motorista'}</div>
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
          <button>Cadastrar</button>
        </form>

      </div>
    </div>
  );
}
