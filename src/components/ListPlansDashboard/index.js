import "./styles.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalAddPlan from "./FormAddPlan/ModalAddPlan";
import ModalChangePlan from "./FormChangePlan/ModalChangePlan";
import { removePlan } from '../../actions/planoActions';
import {
  WifiSVG,
  ConfigSVG,
  DownloadSVG,
  UploadSVG,
  FourSquaresSVG
} from '../../assets/svgs/svgImports';

const ListPlansDashboard = () => {
  const widthSVG = 16
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenChangePlan, setIsOpenChangePlan] = useState(false);
  const [idPlanChange, setIdPlanChange] = useState(false);

  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.plans);
  const pedidos = useSelector((state) => state.pedidos);

  const handleRemovePlan = (id) => {
    dispatch(removePlan(id));
    alert("Plano excluido")
  };

  return (
    <>
      <div className="new-plan">
        <button onClick={() => setIsOpen(true)} className="add-new-plan">Criar novo plano</button>
      </div>
      {isOpen && (
        <ModalAddPlan
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
      {isOpenChangePlan && (
        <ModalChangePlan
          idPlanChange={idPlanChange}
          isOpenChangePlan={isOpenChangePlan}
          setIsOpenChangePlan={setIsOpenChangePlan}
          onClose={() => setIsOpenChangePlan(false)} />
      )}
      <section className="list-plans">
        {plans && plans.map((item, index) => (
          <div className={`plan ${item.bestPlan ? 'active' : 'false'}`} key={index}>
            {item.bestPlan &&
              <div className="bestPlan">Melhor Plano</div>
            }
            <div className="gigas">
              <span className="gigas-number">
                <span>{item.giga}</span>
              </span>
              <span className="gigas-text">Giga</span>
            </div>
            <div className="plan-benefits">
            <WifiSVG width={widthSVG} />
            Super Wi-fi 6
          </div>
          <div className="plan-benefits">
            <ConfigSVG width={widthSVG} />
            Instalação grátis
          </div>
          <div className="plan-benefits">
            <DownloadSVG width={widthSVG} />
            2 Giga de download
          </div>
          <div className="plan-benefits">
            <UploadSVG width={widthSVG} />
            1 Giga de upload
          </div>
          <div className="plan-benefits">
            <FourSquaresSVG width={widthSVG} />
            Apps de conteúdo
          </div>
            <div className="services">
              <img src={item.service1} alt="logoService" className="logoService" />
              <img src={item.service2} alt="logoService" className="logoService" />
              <img src={item.service3} alt="logoService" className="logoService" />
              {item.service4 && <img src={item.service4} alt="logoService" className={`logoService ${item.bestPlan ? '' : 'active'}`} />}
            </div>
            <div className="plan-price">
              <div className="plan-price-number">
                <span className="plan-text-real">R$</span>
                <div className="integer-part">{item.price?.split(',')[0]}</div>
                <div className="decimal-part"><span>,{item.price?.split(',')[1]}</span>/mês</div>
              </div>
            </div>
            <div className="plan-buttons">
              <button onClick={() => { setIdPlanChange(item.id); setIsOpenChangePlan(true); }} className="plan-button">Alterar Plano</button>
              <button onClick={() => { handleRemovePlan(item.id) }} className="plan-button">Remover Plano</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ListPlansDashboard;
