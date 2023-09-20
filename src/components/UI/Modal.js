import React from 'react';
import classes from './Modal.module.css';
import { createPortal } from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};
const ModalOverplay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
const portalElement = document.getElementById('overlays');
function Modal(props) {
    return <>
        {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {createPortal(<ModalOverplay>{props.children}</ModalOverplay>, portalElement)}
    </>
}

export default Modal;