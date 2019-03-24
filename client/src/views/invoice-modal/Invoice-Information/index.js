import React from "react";
import Layout from "./Layout";

export default class InvoiceInformation extends React.Component {

    state = {
        activeAccordionIndex: 0,
        date: '',
        subject: '',
        isBankAmount: false,
        bankAmount: ''
    };

    _handleAccordionClick = (e, titleProps) => {
        let { index } = titleProps;
        const { activeAccordionIndex } = this.state
        const newIndex = (activeAccordionIndex === index) ? -1 : index;
        this.setState({ activeAccordionIndex: newIndex })
    }

    _handleCheckBox = () => {
        const { setInvoiceInformation, invoice } = this.props;
        setInvoiceInformation("isBankAmount", !invoice.isBankAmount);
    }

    _handleDateInputChange = (event, { name, value }) => {
        const { setInvoiceInformation } = this.props;
        setInvoiceInformation(name, value);
    }

    _handleInputChange = (e, name) => {
        const { setInvoiceInformation } = this.props;
        let val = e.target.value;
        setInvoiceInformation(name, val);
    }

    render() {
        const { invoice } = this.props;
        const { activeAccordionIndex } = this.state;

        return (
            <Layout
                invoice={invoice}
                activeAccordionIndex={activeAccordionIndex}
                handleInputChange={this._handleInputChange}
                handleCheckBox={this._handleCheckBox}
                handleDateInputChange={this._handleDateInputChange}
                handleAccordionClick={this._handleAccordionClick}
            />
        );
    }
}