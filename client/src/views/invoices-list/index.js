import React, { Component } from 'react';
import { getInvoicesList, getInvoiceDetailsById, deleteInvoice } from "Actions"
import Layout from "./Layout";
import "./style.css";

class InvoicesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invoices: [],
            isModalOpen: false,
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
            })
            .catch(error => console.log(error));
    }

    _editInvoice = (id) => {
        getInvoiceDetailsById(id)
            .then(selectedInvoice => {
                this.setState({ selectedInvoice, isModalOpen: true, selectedRowId: id });
            })
            .catch(error => console.log(error));
    }

    _load = () => {
        getInvoicesList().then(data =>
            this.setState({ invoices: data })
        )
    }

    _addInvoice = () => {
        this.setState({ isModalOpen: true, selectedInvoice: null })
    }

    _closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    render() {
        let {
            isModalOpen,
            invoices,
            selectedInvoice
        } = this.state;

        return (
            <Layout
                selectedInvoice={selectedInvoice}
                invoices={invoices}
                addInvoice={this._addInvoice}
                editInvoice={this._editInvoice}
                deleteInvoice={this._deleteInvoice}
                closeModal={this._closeModal}
                isModalOpen={isModalOpen}
            />
        )
    }
}

export default InvoicesList;
