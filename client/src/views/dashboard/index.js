import React, { Component } from 'react';
//actions
import {
    getInvoicesList,
    getInvoiceDetailsByID,
    addInvoice,
    editInvoice,
    deleteInvoice
} from "../../action"
//components
import Layout from "./Layout";
import "./style.css";

class InvoicesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoices: [],
            isModalOpen: false,
            selectedRowID: null,
            activeTab: 'information',
            filtered: [],
            //form fields
            date: '',
            subject: '',
            isBankAmount: false,
            bankAmount: '',
            iban: null,
            disableButton: true,
        }
    }

    componentDidMount() {
        getInvoicesList().then(data =>
            this.setState({ invoices: data })
        )
    }

    _handleTabClick = (name) => {
        this.setState({ activeTab: name })
    }

    _handleInputChange = (e, props) => {
        let { data, bankAmount, subject, isBankAmount } = this.state;
        if (props && (props.type === "radio")) {
            this.setState({ [props.name]: props.checked, bankAmount: '' });
        } else if (props && props.name && props.value) {
            this.setState({ [props.name]: props.value });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
        // if (isBankAmount) {
        //     if (data !== '' && subject !== '') {
        //         this.setState({ disableButton: false });
        //     }
        // } else {
        //     if (data !== '' && subject !== '' && bankAmount !== '') {
        //         this.setState({ disableButton: false });
        //     }
        // }
    }

    _handleSearch = (e) => {
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
            currentList = this.state.invoices;
            newList = currentList.filter(item => {
                const lc = item.iban.toLowerCase();
                const filter = e.target.value.toLowerCase();
                if (lc.includes(filter)) {
                    return item
                }
            });
        } else {
            newList = [];
        }
        this.setState({
            filtered: newList
        });
    }

    _handleRowClick = (id) => {
        let { invoices } = this.state;
        let founded = invoices.filter(t => t.id == id);
        this.setState({
            bankAmount: founded[0].bankAmount,
            iban: founded[0].iban
        })
    }
    _next = () => {
        if (this.state.isBankAmount) {
            this.setState({ activeTab: 'payments' })
        }
    }

    _submit = () => {
        let { date, subject, bankAmount, selectedRowID, iban } = this.state;
        let request = { date, subject, bankAmount, iban };
        console.log(request);
        if (selectedRowID !== null) {
            editInvoice(selectedRowID, request)
                .then(async () => {
                    await this._updateList();
                    this._closeModal();
                })
                .catch(error => console.log(error));
        } else {
            addInvoice(request)
                .then(async () => {
                    await this._updateList();
                    this._closeModal();
                })
                .catch(error => console.log(error));
        }
    }

    _deleteInvoice = (id) => {
        deleteInvoice(id)
            .then(() => {
                this._updateList();
            })
            .catch(error => console.log(error));
    }
    _openModalForEdit = (id) => {
        this.setState({ isModalOpen: true, selectedRowID: id });
        getInvoiceDetailsByID(id).then(result => {
            this.setState({
                date: result.date,
                subject: result.subject,
                bankAmount: result.bankAmount,
            })
        })
    }
    _updateList = () => {
        getInvoicesList().then(data =>
            this.setState({ invoices: data })
        )
    }
    _reset = () => {
        this.setState({
            date: '',
            subject: '',
            isBankAmount: false,
            bankAmount: '',
            iban: null,
            selectedRowID: null,
            disableButton: true,
            activeTab: 'information',
            filtered: []
        })
    }
    _openModal = () => {
        this.setState({ isModalOpen: true })
    }
    _closeModal = () => {
        this.setState({ isModalOpen: false }, () => this._reset());
    }

    _isFormValid = () => {
        let { date, subject, isBankAmount, bankAmount } = this.state;
        //console.log((date && subject));
        //return (date && subject && ((!isBankAmount && bankAmount) || (isBankAmount)));
        return false;
    }

    render() {
        let {
            isModalOpen,
            invoices,
            date,
            subject,
            isBankAmount,
            bankAmount,
            activeTab,
            filtered
        } = this.state;

        let disableButton = this._isFormValid();
        console.log(disableButton);

        let fromFields = { date, subject, isBankAmount, bankAmount, disableButton };
        return (
            <Layout
                next={this._next}
                handleRowClick={this._handleRowClick}
                handleSearch={this._handleSearch}
                filtered={filtered}
                activeTab={activeTab}
                handleTabClick={this._handleTabClick}
                updateChild={this.updateChild}
                deleteInvoice={this._deleteInvoice}
                fromFields={fromFields}
                submit={this._submit}
                handleInputChange={this._handleInputChange}
                isModalOpen={isModalOpen}
                openModal={this._openModal}
                openModalForEdit={this._openModalForEdit}
                closeModal={this._closeModal}
                invoices={invoices} />
        )
    }
}

export default InvoicesList;
