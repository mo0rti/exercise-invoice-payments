import React from "react";
import { Table, Button, Label, Card, Responsive } from "semantic-ui-react";

const MobileCard = ({ item, editInvoice, deleteInvoice }) =>
    <Card fluid={true}>
        <Card.Content>
            <Card.Header>{item.subject}</Card.Header>
            <Card.Meta>
                <span className='date'>{item.date}</span>
            </Card.Meta>
            <Card.Description>
                {item.iban}
                <br/>
                {item.bankAmount}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button onClick={() => editInvoice(item.id)} >Edit</Button>
            <Button floated="right" color='red' onClick={() => deleteInvoice(item.id)} >Delete</Button>
        </Card.Content>
    </Card>

const InvoicesTableRows = ({ invoices, addInvoice, editInvoice, deleteInvoice }) =>
    <Table>
        <Table.Header fullWidth>
            <Table.Row>
                <Table.HeaderCell colSpan='6'>
                    <Label color='blue' ribbon>Invoices List</Label>
                    <Button color='green' floated='right' onClick={addInvoice}>Add new Invoice</Button>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                invoices.map(item =>
                    <Table.Row key={item.id}>
                        <Responsive as={Table.Cell} maxWidth={599}>
                            <MobileCard item={item} editInvoice={editInvoice} deleteInvoice={deleteInvoice} />
                        </Responsive>
                        <Responsive as={Table.Cell} minWidth={600}>{item.date}</Responsive>
                        <Responsive as={Table.Cell} minWidth={600}>{item.subject}</Responsive>
                        <Responsive as={Table.Cell} minWidth={600}>{item.bankAmount}</Responsive>
                        <Responsive as={Table.Cell} minWidth={600}>{item.iban}</Responsive>
                        <Responsive as={Table.Cell} minWidth={600} collapsing>
                            <Button onClick={() => editInvoice(item.id)} >Edit</Button>
                        </Responsive>
                        <Responsive as={Table.Cell} minWidth={600} collapsing>
                            <Button color='red' onClick={() => deleteInvoice(item.id)} >Delete</Button>
                        </Responsive>
                    </Table.Row>
                )
            }
        </Table.Body>
    </Table>

export default InvoicesTableRows;
