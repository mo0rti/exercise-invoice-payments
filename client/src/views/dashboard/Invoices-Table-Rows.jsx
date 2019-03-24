import React from "react";

const InvoicesTableRows = ({ invoicesItems, openModalForEdit, deleteInvoice }) =>
    invoicesItems.map(item =>
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
            <td className="add-width">
                <div
                    className="edit-button"
                    onClick={() => openModalForEdit(item.id)}>
                    Edit
                </div>
            </td>
            <td className="add-width">
                <div className="edit-button"
                    onClick={() => deleteInvoice(item.id)}>
                    Delete
                </div>
            </td>
        </tr>
    )
export default InvoicesTableRows;
