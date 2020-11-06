import React from 'react'

import '../App.css';

type ModalProps = {
  isVisible: boolean,
  onDismiss(): void;
}
const Modal = ({ isVisible, onDismiss }: ModalProps) => {
  return (    
    <React.Fragment>
      {isVisible && 
        (<div className="modal" onClick={onDismiss}>
          <h2>Error</h2>
          <p>erro ao executar ação!</p>
        </div>)
      }
    </React.Fragment>
  )
}

export default Modal;