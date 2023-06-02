import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../../../actions/ordersActions';

const FormAddOrder = ({ setIsOpen, planSelected }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const pedido = {
      id: new Date().getTime(),
      nome,
      email,
      telefone,
      status: "Progress", 
      dataHora: new Date().toISOString(),
      planSelected: planSelected
    };

    dispatch(addOrder(pedido));
    setNome('');
    setEmail('');
    setTelefone('');
    setIsOpen(false)
    alert("Pedido enviado para análise")
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className="form-group">
        <label htmlFor="nome" className="label">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
          className="input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="label">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="telefone" className="label">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
          required
          className="input"
        />
      </div>
      <button type="submit" className="button">Enviar</button>
    </form>
  );
};

export default FormAddOrder;