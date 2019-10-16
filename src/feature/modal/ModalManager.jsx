import {connect} from 'react-redux';
import React from 'react'
import ConfirmModal from "./ConfirmOwnerModal/ConfirmModal";

const modalLookup = {
    ConfirmModal,
}

const mapState = (state) => ({
    currentModal: state.modals
})

const ModalManager = ({currentModal}) => {
    let rendereddModal;
    if (currentModal){
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modalType];
        rendereddModal = <ModalComponent {...modalProps}/>
    }
    return (
       <span>{rendereddModal}</span>
    )
}

export default connect(mapState)(ModalManager)
