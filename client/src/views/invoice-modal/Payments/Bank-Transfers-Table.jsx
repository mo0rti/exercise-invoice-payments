import React from 'react';
import { Container, Table } from "semantic-ui-react";

const BankTransfersTable = ({ filtered, handleRowClick }) =>
    <Container>
        <Table>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    filtered.map(item =>
                        
                        <tr key={item.id}>
                            <td className="more">
                                <div className='more-column'>
                                    <span>{item.subject}</span>
                                    <span>({item.bankAmount})</span>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                    {item.date}
                                </div>
                            </td>
                            <td className="no-more">{item.date}</td>
                            <td className="no-more">{item.subject}</td>
                            <td className="no-more">{item.bankAmount}</td>
                            <td >{item.iban}</td>
                        </tr>
                    )
                }
            </Table.Body>
        </Table>
    </Container>

export default BankTransfersTable;
