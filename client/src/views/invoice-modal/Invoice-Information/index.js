import React from "react";
import Layout from "./Layout";

export default class InvoiceInformation extends React.Component {

    state = {
        activeIndex: 0,
        date: '',
        subject: '',
        isBankAmount: false,
        bankAmount: ''
    };

    _handleAccordionClick = (e, titleProps) => {
        let { index } = titleProps;
        const { activeIndex } = this.state
        const newIndex = (activeIndex === index) ? -1 : index;
        this.setState({ activeIndex: newIndex })
    }

    _handleCheckBox = () => {
        const { handleInputChange, invoice } = this.props;
        handleInputChange("isBankAmount", !invoice.isBankAmount);
    }

    _handleDateInputChange = (event, { name, value }) => {
        const { handleInputChange } = this.props;
        handleInputChange(name, value);
    }

    _handleInputChange = (e, name) => {
        const { handleInputChange } = this.props;
        let val = e.target.value;
        handleInputChange(name, val);
    }

    render() {
        const { invoice } = this.props;

        return (
            <Layout
                invoice={invoice}
                handleInputChange={this._handleInputChange}
                handleCheckBox={this._handleCheckBox}
                handleDateInputChange = {this._handleDateInputChange}
                handleAccordionClick={this._handleAccordionClick}
            />
        );
    }
}