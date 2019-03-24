import React from "react";
import { Grid, Icon, Message, Button, Tab, Modal, Container, Responsive } from "semantic-ui-react";
import InvoicesInformationForm from "./Invoice-Information";
import PaymentsForm from "./Payments";

const paneInfo = (invoice, setInvoiceInformation) => ({
    menuItem: 'Invoice Information',
    render: () =>
        <Tab.Pane attached={false}>
            <InvoicesInformationForm
                invoice={invoice}
                setInvoiceInformation={setInvoiceInformation}
            />
        </Tab.Pane>
});

const panePayment = (setInvoiceAmountFromPayment) => ({
    menuItem: 'Payments',
    render: () =>
        <Tab.Pane attached={false}>
            <PaymentsForm
                setInvoiceAmountFromPayment={setInvoiceAmountFromPayment}
            />
        </Tab.Pane>
});

const Layout = ({
    invoice,

    isModalOpen,
    closeModal,
    isInPaymentMode,

    activeIndex,
    onTabChange,

    setInvoiceAmountFromPayment,

    setInvoiceInformation,
    isInvoiceInformationValid,

    invoiceActionButtonPress,
    message
}) =>
    <Modal
        open={isModalOpen}
        onClose={closeModal}
        className="modal-container"
        style={{ minHeight: '500' }}
        closeIcon
    >
        <Modal.Header color="blue" className="modal-header">Invoices Dialog</Modal.Header>
        <Modal.Content scrolling>
            <Container>
                <Responsive
                    {...Responsive.onlyMobile}
                    as={Tab}
                    activeIndex={activeIndex}
                    menu={{ fluid: true }}
                    onTabChange={onTabChange}
                    panes={[
                        paneInfo(invoice, setInvoiceInformation),
                        isInPaymentMode ? panePayment(setInvoiceAmountFromPayment) : null
                    ]}
                />
                <Responsive
                    minWidth={Responsive.onlyTablet.minWidth}
                    as={Tab}
                    activeIndex={activeIndex}
                    menu={{ fluid: true, vertical: true }}
                    menuPosition='left'
                    onTabChange={onTabChange}
                    panes={[
                        paneInfo(invoice, setInvoiceInformation),
                        isInPaymentMode ? panePayment(setInvoiceAmountFromPayment) : null
                    ]}
                />
            </Container>
        </Modal.Content>
        <Modal.Actions>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        {message ?
                            <Message warning>
                                <Icon name='help' />
                                {message}
                            </Message> : null
                        }
                    </Grid.Column>
                    <Grid.Column>
                        <Button
                            floated='right'
                            primary
                            onClick={invoiceActionButtonPress}
                            disabled={!isInvoiceInformationValid}
                        >
                            {(invoice.isBankAmount && activeIndex === 0) ? "Next" : "Done"}
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Modal.Actions>
    </Modal>

export default Layout;
