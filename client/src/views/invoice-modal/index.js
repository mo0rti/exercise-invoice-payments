import React from "react";
import moment from "moment";
import { addInvoice, editInvoice } from "Apis"
import { DEFAULT_IBAN } from "Constants"
import Layout from "./Layout";
import "./style.css";

const defaultInvoice = {
    date: moment().format("DD-MM-YYYY"),
    subject: "",
    isBankAmount: false,
    bankAmount: "",
    iban: DEFAULT_IBAN
};

class InvoiceModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            invoice: defaultInvoice,
            isInPaymentMode: false,
            activeIndex: 0,
            message: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        // If the modal form is shown, to set the "this.state.invoice" object in "Edit mode" we need to retrieve it when modal form props have changed.
        if (nextProps.isModalOpen) {
            this.setState({ invoice: nextProps.selectedInvoice ? nextProps.selectedInvoice : { ...defaultInvoice } });
        }
    }

    _isInvoiceInformationValid = () => {
        const { invoice } = this.state;
        return (invoice.date && invoice.subject && ((!invoice.isBankAmount && invoice.bankAmount) || (invoice.isBankAmount)));
    }

    _setInvoiceInformation = (name, val) => {
        let { invoice } = this.state;
        invoice[name] = val;
        if (name === "isBankAmount") {
            this.setState({ isInPaymentMode: val });
        };

        this.setState({ invoice });
    }

    _invoiceActionButtonPress = () => {
        const { invoice, activeIndex } = this.state;
        // if it's on the invoice information and "FromBackAccount" option is checked then go payment tab
        if ((activeIndex === 0) && invoice.isBankAmount)
            this._goPaymentTab()
        else // otherwise submit the invoice
            this._submitInvoice();
    }

    _goPaymentTab = () => {
        this.setState({ activeIndex: 1 });
    }

    _submitInvoice = () => {
        let { invoice } = this.state;
        if (invoice.id) {
            editInvoice(invoice.id, invoice)
                .then(async () => {
                    this._closeModal({ succeed: true, message: "Invoice updated successfully" });
                })
                .catch(error => this.setState({ message: error.message || error }));
        } else {
            addInvoice(invoice)
                .then(async () => {
                    this._closeModal({ succeed: true, message: "Invoice added successfully" });
                })
                .catch(error => this.setState({ message: error.message || error }));
        }
    }

    _onTabChange = (event, data) => {
        const { activeIndex } = this.state;
        // if invoice information data is invalid don't let the user goes to Payments tab
        if ((activeIndex === 0) && (!this._isInvoiceInformationValid())) return;
        this.setState({ activeIndex: data.activeIndex });
    }

    _closeModal = (refreshTheList) => {
        const { closeModal } = this.props;
        // reset the modal form to its initial state
        this.setState({ activeIndex: 0, invoice: { ...defaultInvoice }, isInPaymentMode: false, message: "" });
        closeModal(refreshTheList);
    }

    _setInvoiceAmountFromPayment = ({ iban, bankAmount }) => {
        let { invoice } = this.state;
        this.setState({ invoice: { ...invoice, iban, bankAmount } });
    }

    render() {
        const { activeIndex, isInPaymentMode, invoice, message } = this.state;
        const { isModalOpen } = this.props;
        const isInvoiceInformationValid = this._isInvoiceInformationValid();

        return (
            <Layout
                invoice={invoice}

                isModalOpen={isModalOpen}
                closeModal={this._closeModal}
                isInPaymentMode={isInPaymentMode}

                activeIndex={activeIndex}
                onTabChange={this._onTabChange}

                setInvoiceAmountFromPayment={this._setInvoiceAmountFromPayment}

                setInvoiceInformation={this._setInvoiceInformation}
                isInvoiceInformationValid={isInvoiceInformationValid}

                invoiceActionButtonPress={this._invoiceActionButtonPress}
                message={message}
            />
        )
    }
}

export default InvoiceModal;