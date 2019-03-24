import React from "react";
import { Form } from "semantic-ui-react";
import BankPaymentsList from "./Bank-Payments-List"

const PaymentForm = ({ payments, handleSearch, handleRowClick, selectedPaymentRow }) =>
    <div style={{ height: '100%' }}>
        <Form style={{ height: '100%' }}>
            <Form.Field className="form-field">
                <label className="search-label">Search IBAN</label>
                <input placeholder='IBAN' onChange={handleSearch} />
            </Form.Field>
            <BankPaymentsList
                payments={payments}
                selectedPaymentRow={selectedPaymentRow}
                handleRowClick={handleRowClick} />
        </Form>
    </div>

export default PaymentForm;