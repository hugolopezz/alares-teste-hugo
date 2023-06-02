import "./styles.css";
import React, { useState } from 'react';
import ModalAddOrder from './FormAddOrder/modal';
import {
  WifiSVG,
  ConfigSVG,
  DownloadSVG,
  UploadSVG,
  FourSquaresSVG,
  PlusSignSVG
} from '../../../assets/svgs/svgImports';

const Plan = ({ plans }) => {
  const widthSVG = 16
  const [isOpen, setIsOpen] = useState(false);
  const [planSelected, setPlan] = useState({});

  return (
    <>
      {plans && plans.map((item, index) => (
        <section className={`plan ${item.bestPlan ? 'active' : 'false'}`} key={index}>
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
            {item.bestPlan ?
              <img src={item.service4} alt="logoService" className={`logoService ${item.bestPlan ? '' : 'active'}`} />
              : <PlusSignSVG width={50} />
            }
          </div>
          <div className="plan-price">
            <div className="plan-price-number">
              <span className="plan-text-real">R$</span>
              <div className="integer-part">{item.price?.split(',')[0]}</div>
              <div className="decimal-part"><span>,{item.price?.split(',')[1]}</span>/mês</div>
            </div>
            <span className="plan-text-info">na conta digital</span>
          </div>
          <a className="plan-link" href="#">{"<< Consulte condições >>"}</a>
          <button onClick={() => {
            setIsOpen(true);
            setPlan(item);
          }} className="plan-button">Contrate já</button>
        </section>
      ))}
      {isOpen && (
        <ModalAddOrder setIsOpen={setIsOpen} planSelected={planSelected} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default Plan;
