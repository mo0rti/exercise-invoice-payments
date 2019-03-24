import React from "react";
import { Table, Button, Label, Card, Responsive } from "semantic-ui-react";

const MobileRowItem = ({ item, editInvoice, deleteInvoice }) =>
    <Responsive as={Table.Row} {...Responsive.onlyMobile} key={item.id}>
        <Table.Cell>
            <Card fluid={true}>
                <Card.Content>
                    <Card.Header>{item.subject}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{item.date}</span>
                    </Card.Meta>
                    <Card.Description>
                        {item.iban}
                        <br />
                        {item.bankAmount}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={() => editInvoice(item.id)} >Edit</Button>
                    <Button floated="right" color='red' onClick={() => deleteInvoice(item.id)} >Delete</Button>
                </Card.Content>
            </Card>
        </Table.Cell>
    </Responsive>

const DesktopRowItem = ({ item, editInvoice, deleteInvoice }) =>
    <Responsive as={Table.Row} minWidth={Responsive.onlyTablet.minWidth} key={item.id}>
        <Table.Cell>{item.date}</Table.Cell>
        <Table.Cell>{item.subject}</Table.Cell>
        <Table.Cell>{item.bankAmount}</Table.Cell>
        <Table.Cell>{item.iban}</Table.Cell>
        <Table.Cell collapsing>
            <Button onClick={() => editInvoice(item.id)} >Edit</Button>
        </Table.Cell>
        <Table.Cell collapsing>
            <Button color='red' onClick={() => deleteInvoice(item.id)} >Delete</Button>
        </Table.Cell>
    </Responsive>

const RowItem = ({ item, editInvoice, deleteInvoice }) =>
    <React.Fragment>
        <MobileRowItem item={item} editInvoice={editInvoice} deleteInvoice={deleteInvoice} />
        <DesktopRowItem item={item} editInvoice={editInvoice} deleteInvoice={deleteInvoice} />
    </React.Fragment>

const List = ({ invoices, openInvoiceModal, editInvoice, deleteInvoice }) =>
    <Table>
        <Table.Header fullWidth>
            <Table.Row>
                <Table.HeaderCell colSpan='6'>
                    <Label color='blue' ribbon size="large">Invoices List</Label>
                    <Button color='green' floated='right' onClick={openInvoiceModal}>Add new Invoice</Button>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                invoices.map(item => <RowItem key={item.id} item={item} editInvoice={editInvoice} deleteInvoice={deleteInvoice} />)
            }
        </Table.Body>
    </Table>

export default List;
