import React from "react";
import { addInvoice, editInvoice } from "Actions"
import Layout from "./Layout";
import moment from "moment";
import "./style.css";

const defaultInvoice = {
    date: moment().format("DD-MM-YYYY"),
    subject: "",
    isBankAmount: false,
    bankAmount: ""
};

class ModalBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            invoice: defaultInvoice,
            isInPaymentMode: false,
            activeIndex: 0
        }
    }

    _togglePaymentMode = (isInPaymentMode) => {
        this.setState({ isInPaymentMode });
    }

    _isFormValid = () => {
        const { invoice } = this.state;
        return (invoice.date && invoice.subject && ((!invoice.isBankAmount && invoice.bankAmount) || (invoice.isBankAmount)));
    }

    _actionButtonPress = () => {
        const { invoice } = this.state;
        (invoice.isBankAmount) ? this._next() : this._submit();
    }

    _next = () => {
        this.setState({ activeIndex: 1 });
    }

    _submit = () => {
        let { invoice } = this.state;
        if (invoice.id !== null) {
            editInvoice(invoice.id, invoice)
                .then(async () => {
                    await this._updateList();
                    this._closeModal();
                })
                .catch(error => console.log(error));
        } else {
            addInvoice(invoice)
                .then(async () => {
                    await this._updateList();
                    this._closeModal();
                })
                .catch(error => console.log(error));
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isModalOpen) {
            this.setState({ invoice: nextProps.selectedInvoice ? nextProps.selectedInvoice : defaultInvoice });
        }
    }

    _handleInputChange = (name, val) => {
        let { invoice } = this.state;
        invoice[name] = val;
        if (name === "isBankAmount") {
            invoice.bankAmount = '';
            this._togglePaymentMode(val);
        };

        this.setState({ invoice });
    }

    _onTabChange = (event, data) => {
        this.setState({ activeIndex: data.activeIndex });
    }

    render() {
        const { activeIndex, isInPaymentMode, invoice } = this.state;
        const { isModalOpen, closeModal } = this.props;

        return (
            <Layout
                invoice={invoice}
                isFormValid={this._isFormValid}
                isModalOpen={isModalOpen}
                isInPaymentMode={isInPaymentMode}
                closeModal={closeModal}
                togglePaymentMode={this._togglePaymentMode}
                actionButtonPress={this._actionButtonPress}
                handleInputChange={this._handleInputChange}
                onTabChange={this._onTabChange}
                activeIndex={activeIndex}
            />
        )
    }
}

export default ModalBox;