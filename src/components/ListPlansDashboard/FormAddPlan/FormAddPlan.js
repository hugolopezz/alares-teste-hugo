import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlan } from '../../../actions/planoActions';

import LevEduca from '../../../assets/levEduca.png';
import Paramount from '../../../assets/paramount.png';
import McAfee from '../../../assets/mcAfee.png';
const FormAddPlan = ({setIsOpen}) => {
  const [giga, setGiga] = useState('');
  const [pricePlan, setPricePlan] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^\d,]/g, '');
    setPricePlan(numericValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const plano = {
      id: new Date().getTime(),
      giga,
      service1: LevEduca,
      service2: Paramount,
      service3: McAfee,
      service4: LevEduca,
      price: pricePlan,
      bestPlan: event.target.checkbox.checked
    };

    dispatch(addPlan(plano));

    setGiga('');
    setPricePlan('');
    setIsOpen(false)
    alert("Plano criado")
  };

  return (
    <form onSubmit={handleSubmit} className="form-addplan">
      <div className="form-addplan-group">
        <label htmlFor="nome" className="label">Quantidades de gigas</label>
        <input
          type="text"
          id="nome"
          value={giga}
          onChange={(event) => setGiga(event.target.value)}
          required
          className="input"
        />
      </div>
      <div className="form-addplan-group">
        <label htmlFor="pricePlan" className="label">Preço do plano</label>
        <input
          type="text"
          className="pricePlan"
          value={pricePlan}
          onChange={handleChange}
        />
      </div>
      <div className="form-addplan-group">
        <label>
          <input name="checkbox" type="checkbox" className="checkbox-addplan"/>
          Melhor Plano?
        </label>
      </div>
      <button type="submit" className="submit-add-plan">Criar Plano</button>
    </form>
  );
};

export default FormAddPlan;