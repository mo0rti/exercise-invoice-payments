import React from 'react';
import { Grid, Container } from "semantic-ui-react";
import List from "./List";
import InvoiceModal from "Views/invoice-modal";

const Layout = ({
    selectedInvoice,
    invoices,

    editInvoice,
    deleteInvoice,

    openInvoiceModal,
    closeInvoiceModal,
    isInvoiceModalOpen
}) =>

    <Grid style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column>
            <Container>
                <InvoiceModal
                    selectedInvoice={selectedInvoice}
                    isModalOpen={isInvoiceModalOpen}
                    closeModal={closeInvoiceModal}
                />
                <List
                    openInvoiceModal={openInvoiceModal}
                    deleteInvoice={deleteInvoice}
                    editInvoice={editInvoice}
                    invoices={invoices} />
            </Container>
        </Grid.Column>
    </Grid>

export default Layout;
