import React from 'react';
import { Grid, Container } from "semantic-ui-react";
import InvoicesTable from "./Invoices-Table";
import InvoiceModal from "Views/invoice-modal";

const Layout = ({
    selectedInvoice,
    invoices,
    addInvoice,
    editInvoice,
    deleteInvoice,
    isModalOpen,
    closeModal
}) =>

    <Grid style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column>
            <Container>
                <InvoiceModal
                    selectedInvoice={selectedInvoice}
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                />
                <InvoicesTable
                    addInvoice={addInvoice}
                    deleteInvoice={deleteInvoice}
                    editInvoice={editInvoice}
                    invoices={invoices} />
            </Container>
        </Grid.Column>
    </Grid>

export default Layout;
