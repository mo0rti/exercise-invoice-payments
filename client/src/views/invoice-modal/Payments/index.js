import React from "react";
import { getBankPayments } from "Apis"
import Layout from "./Layout";

export default class Payments extends React.Component {

    state = {
        payments: [],
        selectedPaymentRow: null
    }

    _handleRowClick = (selectedPaymentRow) => {
        const { setInvoiceAmountFromPayment } = this.props;
        this.setState({ selectedPaymentRow });
        if (selectedPaymentRow)
            setInvoiceAmountFromPayment({ iban: selectedPaymentRow.iban, bankAmount: selectedPaymentRow.bankAmount });
    }

    _handleSearch = (e) => {
        let iban = e.target.value;
        if (iban) {
            getBankPayments(iban)
                .then(data =>
                    this.setState({ payments: data })
                )
                .catch(error => console.log(error));
        } else {
            this.setState({ payments: [] })
        }
    }

    render() {
        const { payments, selectedPaymentRow } = this.state;
        return (
            <Layout
                payments={payments}
                handleSearch={this._handleSearch}
                selectedPaymentRow={selectedPaymentRow}
                handleRowClick={this._handleRowClick}
            />
        );
    }
}