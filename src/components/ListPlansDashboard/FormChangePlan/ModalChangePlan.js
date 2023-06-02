import React from 'react';
import "./styles.css";
import FormChangePlan from "./FormChangePlan"

const ModalChangePlan = ({idPlanChange, isOpenChangePlan, onClose, setIsOpenChangePlan }) => {
  return (
    <>
      {isOpenChangePlan && (
        <div className="modal-overlay-addplan">
          <div className="modal-content-addplan">
            <div className="modal-close" onClick={onClose}>
              Fechar
            </div>
            <FormChangePlan idPlanChange={idPlanChange} setIsOpenChangePlan={setIsOpenChangePlan}/>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalChangePlan;