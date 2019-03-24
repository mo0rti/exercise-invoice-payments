import React from "react";
import { Button, Tab, Modal, Container } from "semantic-ui-react";
import InvoicesInformationForm from "./Invoice-Information";
import PaymentsForm from "./Payments";

const paneInfo = (invoice, goToPayment, handleInputChange, togglePaymentMode) => ({
    menuItem: 'Invoice Information',
    render: () =>
        <Tab.Pane attached={false}>
            <InvoicesInformationForm 
                invoice={invoice}
                handleInputChange={handleInputChange} 
                goToPayment={goToPayment} 
                togglePaymentMode={togglePaymentMode} 
            />
        </Tab.Pane>
});

const panePayment = {
    menuItem: 'Payments',
    render: () =>
        <Tab.Pane active={true} attached={false}>
            <PaymentsForm />
        </Tab.Pane>
};

const Layout = ({
    invoice,
    isFormValid,
    isModalOpen,
    closeModal,
    isInPaymentMode,
    togglePaymentMode,
    goToPayment,
    actionButtonPress,
    handleInputChange,
    onTabChange,
    activeIndex
}) =>
    <Modal
        open={isModalOpen}
        onClose={closeModal}
        className="modal-container"
        closeIcon
    >
        <Modal.Header className="modal-header">Invoices Dialog</Modal.Header>
        <Container>
            <Tab
                activeIndex={activeIndex}
                menu={{ fluid: true, vertical: true }}
                menuPosition='left'
                onTabChange={onTabChange}
                panes={[paneInfo(invoice, goToPayment, handleInputChange, togglePaymentMode), isInPaymentMode ? panePayment : null]}
            />
        </Container>
        <Modal.Actions className="modal-header">
            <Button
                floated='right'
                onClick={actionButtonPress}
                disabled={!isFormValid()}
            >
                {invoice.isBankAmount ? "Next" : "Done"}
            </Button>
        </Modal.Actions>
    </Modal>

export default Layout;
