import React from "react";
import { DateInput } from 'semantic-ui-calendar-react';
import { Form, Checkbox, Responsive } from "semantic-ui-react";

const DesktopLayout = ({
    handleCheckBox,
    handleInputChange,
    handleDateInputChange,
    invoice
}) =>
    <Responsive as={Form} minWidth={Responsive.onlyTablet.minWidth} autoComplete="off">
        <Form.Field className="form-field">
            <label className="input-label">Date</label>
            <DateInput
                closable
                clearable
                name="date"
                className="date-input"
                placeholder="Date"
                value={invoice.date}
                icon={false}
                onChange={handleDateInputChange} />
        </Form.Field>
        <Form.Field className="form-field">
            <label className="input-label">Subject</label>
            <input
                placeholder='Subject'
                name="subject"
                onChange={(e) => handleInputChange(e, 'subject')}
                value={invoice.subject} />
        </Form.Field>
        <Form.Field className="form-field">
            <label className="radio-label">Retrieve amount from bank account</label>
            <Checkbox
                toggle
                name='isBankAmount'
                checked={invoice.isBankAmount}
                onChange={handleCheckBox} />
        </Form.Field>
        <Form.Field className="form-field" style={invoice.isBankAmount ? { display: 'none' } : null}>
            <label className="input-label">Amount</label>
            <input
                placeholder='Bank Amount'
                name='bankAmount'
                onChange={(e) => handleInputChange(e, 'bankAmount')}
                value={invoice.bankAmount} />
        </Form.Field>
    </Responsive>

export default DesktopLayout;