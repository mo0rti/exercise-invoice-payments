import React from "react";
import { DateInput } from 'semantic-ui-calendar-react';
import { Form, Responsive, Accordion, Icon } from "semantic-ui-react";

const MobileLayout = ({ invoice, handleDateInputChange, handleInputChange, activeAccordionIndex, handleAccordionClick }) =>
    <Responsive
        {...Responsive.onlyMobile}
        as={Accordion}
        fluid
        styled
    >
        <Accordion.Title active={activeAccordionIndex === 0} index={0} onClick={handleAccordionClick}>
            <Icon name='dropdown' />
            Date
        </Accordion.Title>
        <Accordion.Content active={activeAccordionIndex === 0}>
            <Form.Field>
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
        </Accordion.Content>

        <Accordion.Title active={activeAccordionIndex === 1} index={1} onClick={handleAccordionClick}>
            <Icon name='dropdown' />
            Subject
        </Accordion.Title>
        <Accordion.Content active={activeAccordionIndex === 1}>
            <Form.Field>
                <label className="input-label">Enter Subject</label>
                <input
                    placeholder='Subject'
                    name="subject"
                    onChange={(e) => handleInputChange(e, 'subject')}
                    value={invoice.subject} />
            </Form.Field>
        </Accordion.Content>

        <Accordion.Title active={activeAccordionIndex === 2} index={2} onClick={handleAccordionClick}>
            <Icon name='dropdown' />
            Account
        </Accordion.Title>
        <Accordion.Content active={activeAccordionIndex === 2}>
            <Form.Field className="form-field" style={invoice.isBankAmount ? { display: 'none' } : null}>
                <input
                    placeholder='Bank Amount'
                    name='bankAmount'
                    onChange={(e) => handleInputChange(e, 'bankAmount')}
                    value={invoice.bankAmount} />
            </Form.Field>
        </Accordion.Content>
    </Responsive>

export default MobileLayout;