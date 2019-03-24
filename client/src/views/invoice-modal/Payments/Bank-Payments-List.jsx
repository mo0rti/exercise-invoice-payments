import React from 'react';
import { Container, Table, Responsive } from "semantic-ui-react";

const BankPaymentsList = ({ payments, handleRowClick, selectedPaymentRow }) =>
    <Container>
        <Table>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                        Found bank transfers
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    payments.map(item =>
                        <Table.Row
                            key={item.id}
                            onClick={() => handleRowClick(item)}
                            active={(selectedPaymentRow) ? (selectedPaymentRow.id === item.id) : false}
                        >
                            <Responsive as={Table.Cell} minWidth={600}>{item.subject}</Responsive>
                            <Responsive as={Table.Cell} minWidth={600}>{item.bankAmount}</Responsive>
                            <Responsive as={Table.Cell} minWidth={600}>{item.iban}</Responsive>
                        </Table.Row>
                    )
                }
            </Table.Body>
        </Table>
    </Container>

export default BankPaymentsList;
