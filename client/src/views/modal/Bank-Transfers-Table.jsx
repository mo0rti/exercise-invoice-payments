import React from 'react';

const BankTransfersTable = ({ filtered, handleRowClick }) =>
    <article className='founded-table-container'>
        <table className="founded-table">
            <thead>
                <tr>
                    <th colSpan="100%" className="header-invoices">
                        <div>
                            <span>
                                <h3>Found bank transfers</h3>
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {filtered.map(item =>
                    <tr
                        key={item.id}
                        className="selection"
                        onClick={() => handleRowClick(item.id)}
                    >
                        <td className="more">
                            <div className='more-column'>
                                <span>{item.subject}</span>
                                <span>({item.bankAmount})</span>
                            </div>
                        </td>
                        <td className='no-more'>{item.subject}</td>
                        <td className='no-more'>{item.bankAmount}</td>
                        <td >{item.iban}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </article>

export default BankTransfersTable;
