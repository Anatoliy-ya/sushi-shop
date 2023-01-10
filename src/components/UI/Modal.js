import React from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideModal}></div>;
};

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onHideModal={props.onHideModal} />,
        document.getElementById('overlays'),
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        document.getElementById('overlays'),
      )}
    </React.Fragment>
  );
}
