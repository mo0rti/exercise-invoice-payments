import React, { Component } from 'react';
import { withToastManager } from 'react-toast-notifications';
import { getInvoices, getInvoiceById, deleteInvoice } from "Apis"
import Layout from "./Layout";
import "./style.css";

class InvoicesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invoices: [],
            isInvoiceModalOpen: false,
            selectedInvoice: null,
            selectedRowId: null,
        }
    }

    componentDidMount() {
        this._load();
    }

    _deleteInvoice = (id) => {
        deleteInvoice(id)
            .then(() => {
                this._load();
                this.props.toastManager.add("Invoice deleted!!", {
                    appearance: 'success',
                    autoDismiss: true,
                });
            })
            .catch(error => {
                this.props.toastManager.add(error.message || error, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            });
    }

    _editInvoice = (id) => {
        getInvoiceById(id)
            .then(selectedInvoice => {
                this.setState({ selectedInvoice, isInvoiceModalOpen: true, selectedRowId: id });
            })
            .catch(error => {
                this.props.toastManager.add(error.message || error, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            });
    }

    _load = () => {
        getInvoices()
            .then(data =>
                this.setState({ invoices: data })
            )
            .catch(error => {
                this.props.toastManager.add(error.message || error, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            });
    }

    _openInvoiceModal = () => {
        this.setState({ isInvoiceModalOpen: true, selectedInvoice: null })
    }

    _closeInvoiceModal = (invoiceModalResult) => {
        this.setState({ isInvoiceModalOpen: false });
        if (invoiceModalResult && invoiceModalResult.succeed) {
            this._load();
            this.props.toastManager.add(invoiceModalResult.message, {
                appearance: 'success',
                autoDismiss: true,
            });
        }
    }

    render() {
        let {
            isInvoiceModalOpen,
            invoices,
            selectedInvoice
        } = this.state;

        return (
            <Layout
                selectedInvoice={selectedInvoice}
                invoices={invoices}

                editInvoice={this._editInvoice}
                deleteInvoice={this._deleteInvoice}

                openInvoiceModal={this._openInvoiceModal}
                closeInvoiceModal={this._closeInvoiceModal}
                isInvoiceModalOpen={isInvoiceModalOpen}
            />
        )
    }
}

export default withToastManager(InvoicesList);
