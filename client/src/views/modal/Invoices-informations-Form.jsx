import React from "react";
import { DateInput } from 'semantic-ui-calendar-react';
import { Form, Button, Accordion, Icon } from "semantic-ui-react";

const InvoicesInformationForm = ({
    activeIndex,
    handleAccordionClick,
    handleInputChange,
    submit,
    fromFields,
    next
}) =>
    <div style={{ height: '100%' }}>
        <Form className="web-view" id='info-form' autoComplete="off">
            <Form.Field className="form-field">
                <label className="input-label">Date</label>
                <DateInput
                    closable
                    clearable
                    name="date"
                    className="date-input"
                    placeholder="Date"
                    value={fromFields.date}
                    icon={false}
                    onChange={handleInputChange} />
            </Form.Field>
            <Form.Field className="form-field">
                <label className="input-label">Subject</label>
                <input
                    placeholder='Subject'
                    name="subject"
                    onChange={handleInputChange}
                    value={fromFields.subject} />
            </Form.Field>
            <Form.Field className="form-field">
                <label className="radio-label">Retrieve amount from bank account</label>
                <Form.Radio
                    toggle
                    name='isBankAmount'
                    checked={fromFields.isBankAmount}
                    onChange={handleInputChange} />
            </Form.Field>
            <Form.Field className="form-field" style={fromFields.isBankAmount ? { display: 'none' } : null}>
                <label className="input-label">Amount</label>
                <input
                    placeholder='Bank Amount'
                    name='bankAmount'
                    onChange={handleInputChange}
                    value={fromFields.bankAmount} />
            </Form.Field>
            <Form.Field className="button-container">
                <Button
                    onClick={fromFields.isBankAmount ? next : submit}
                    disabled={fromFields.disableButton}
                    fluid>
                    {fromFields.isBankAmount ? "Next" : "Done"}
                </Button>
            </Form.Field>
        </Form>
        {/*MOBILE ACCORDION */}
        <Form className="mobile-view" id='info-form'>
            <Accordion fluid styled>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={handleAccordionClick}>
                    <div className="accordion-row">
                        <div>Date</div>
                        <div>
                            <span style={{ marginRight: '20px' }}>{fromFields.date}</span>
                            <Icon name='dropdown' />
                        </div>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <Form.Field className="form-field" inline>
                        <label className="input-label">Date</label>
                        <DateInput
                            closable
                            clearable
                            name="date"
                            className="date-input"
                            placeholder="Date"
                            value={fromFields.date}
                            icon={false}
                            onChange={handleInputChange} />
                    </Form.Field>
                </Accordion.Content>
                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={handleAccordionClick}>
                    <div className="accordion-row">
                        <div>Subject</div>
                        <div>
                            <span style={{ marginRight: '20px' }}>{fromFields.subject}</span>
                            <Icon name='dropdown' />
                        </div>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <Form.Field className="form-field" inline>
                        <label className="input-label">Subject</label>
                        <input
                            placeholder='Subject'
                            name="subject"
                            onChange={handleInputChange}
                            value={fromFields.subject} />
                    </Form.Field>
                </Accordion.Content>
                <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={handleAccordionClick}>
                    <div className="accordion-row">
                        <div>Retrieve amount from bank account</div>
                        <Icon name='dropdown' />
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <Form.Field className="form-field" inline>
                        <label className="radio-label">Retrieve ? </label>
                        <Form.Radio
                            toggle
                            name='isBankAmount'
                            checked={fromFields.isBankAmount}
                            onChange={handleInputChange} />
                    </Form.Field>
                </Accordion.Content>
                <Accordion.Title
                    style={fromFields.isBankAmount ? { display: 'none' } : null}
                    active={activeIndex === 3}
                    index={3}
                    onClick={handleAccordionClick}>
                    <div className="accordion-row">
                        <div>Amount</div>
                        <div>
                            <span style={{ marginRight: '20px' }}>{fromFields.bankAmount}</span>
                            <Icon name='dropdown' />
                        </div>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                    <Form.Field className="form-field" inline>
                        <label className="input-label">Amount</label>
                        <input
                            placeholder='Bank Amount'
                            name='bankAmount'
                            onChange={handleInputChange}
                            value={fromFields.bankAmount} />
                    </Form.Field>
                </Accordion.Content>
            </Accordion>
            <Form.Field className="accordion-button-container">
                <Button
                    onClick={fromFields.isBankAmount ? next : submit}
                    disabled={fromFields.disableButton}
                    fluid>
                    {fromFields.isBankAmount ? "Next" : "Done"}
                </Button>
            </Form.Field>
        </Form>
    </div>

export default InvoicesInformationForm;