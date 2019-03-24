import React from "react";
import { Form, Button } from "semantic-ui-react";
import BankTransfersTable from "./Bank-Transfers-Table"

const PaymentForm = ({ filtered, handleSearch, handleRowClick, submit }) =>
    <div style={{ height: '100%' }}>
        <Form style={{ height: '100%' }}>
            <Form.Field className="form-field">
                <label className="search-label">Search IBAN</label>
                <input placeholder='IBAN' onChange={handleSearch} />
            </Form.Field>
            <BankTransfersTable
                filtered={filtered}
                handleRowClick={handleRowClick} />
            <Form.Field className="button-container">
                <Button
                    onClick={submit}
                    fluid>Done</Button>
            </Form.Field>
        </Form>
    </div>

export default PaymentForm;