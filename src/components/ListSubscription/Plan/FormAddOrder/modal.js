import React from 'react';
import "./styles.css";
import FormAddOrder from "./FormAddOrder"

const ModalAddOrder = ({ isOpen, onClose, setIsOpen, planSelected }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-close" onClick={onClose}>
              Fechar
            </div>
            <FormAddOrder setIsOpen={setIsOpen} planSelected={planSelected}/>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalAddOrder;