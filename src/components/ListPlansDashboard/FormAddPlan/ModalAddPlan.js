import React from 'react';
import "./styles.css";
import FormAddPlan from "./FormAddPlan"

const Modal = ({ isOpen, onClose, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay-addplan">
          <div className="modal-content-addplan">
            <div className="modal-close" onClick={onClose}>
              Fechar
            </div>
            <FormAddPlan setIsOpen={setIsOpen}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;