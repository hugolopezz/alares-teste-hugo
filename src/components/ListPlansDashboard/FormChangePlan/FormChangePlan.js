import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeInfosPlan } from '../../../actions/planoActions';

const FormChangePlan = ({ idPlanChange, setIsOpenChangePlan }) => {
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
    const newPlan = {
      id: new Date().getTime(),
      giga,
      price: pricePlan,
      bestPlan: event.target.checkbox.checked
    };

    dispatch(changeInfosPlan(idPlanChange, newPlan));
    setIsOpenChangePlan(false)
    alert("Plano alterado")
  };

  return (
    <form onSubmit={handleSubmit} className="form-addplan">
      <div className="form-addplan-group">
        <label htmlFor="nome" className="label">Quantidade de gigas</label>
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
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-addplan-group">
        <label>
          <input name="checkbox" type="checkbox" className="checkbox-addplan" />
          Melhor Plano?
        </label>
      </div>
      <button type="submit" className="submit-add-plan">Alterar Plano</button>
    </form>
  );
};

export default FormChangePlan;