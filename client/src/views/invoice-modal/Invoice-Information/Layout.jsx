import React from "react";
import { DateInput } from 'semantic-ui-calendar-react';
import { Form, Button, Accordion, Icon, Checkbox } from "semantic-ui-react";

const InvoicesInformationForm = ({
    handleAccordionClick,
    handleCheckBox,
    handleInputChange,
    handleDateInputChange,
    invoice
}) =>
    <div style={{ height: '100%' }}>
        <Form autoComplete="off">
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
        </Form>
    </div>

export default InvoicesInformationForm;