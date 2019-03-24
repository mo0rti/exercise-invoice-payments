import React from "react";
import { Form } from "semantic-ui-react";
import BankTransfersTable from "./Bank-Transfers-Table"

const PaymentForm = ({ transfers, handleSearch, handleRowClick, submit }) =>
    <div style={{ height: '100%' }}>
        <Form style={{ height: '100%' }}>
            <Form.Field className="form-field">
                <label className="search-label">Search IBAN</label>
                <input placeholder='IBAN' onChange={handleSearch} />
            </Form.Field>
            <BankTransfersTable
                filtered={transfers}
                handleRowClick={handleRowClick} />
        </Form>
    </div>

export default PaymentForm;