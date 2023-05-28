import { Modal as BasicModal, Icon } from "semantic-ui-react";
import "./Modal.scss";

export const Modal = ({show, onClose, title, size, children}) => {
    return (
        <BasicModal 
            open={show} 
            size={size} 
            onClose={onClose} 
            className="basic-modal"
        >
            <BasicModal.Header>
                <div />
                <span>{title}</span>
                <Icon name="close" onClick={onClose} link />
            </BasicModal.Header>
            <BasicModal.Content>{children}</BasicModal.Content>
        </BasicModal>
    );
}
