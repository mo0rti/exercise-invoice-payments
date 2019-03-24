import React from "react";
import { getBankPaymentsList } from "Actions"
import Layout from "./Layout";

export default class Payments extends React.Component {

    state = {
        transfers: [],
        selectedPaymentRow: null
    }

    _handleRowClick = (selectedPaymentRow) => {
        this.setState({ selectedPaymentRow });
    }

    _handleSearch = (e) => {
        let iban = e.target.value;
        getBankPaymentsList(iban).then(data =>
            this.setState({ transfers: data })
        )
    }

    _done = () => {

    }

    render() {
        const { transfers, selectedPaymentRow } = this.state;
        return (
            <Layout
                transfers={transfers}
                handleSearch={this._handleSearch}
                selectedPaymentRow={selectedPaymentRow}
                handleRowClick={this._handleRowClick}
            />
        );
    }
}