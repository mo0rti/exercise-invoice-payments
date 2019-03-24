import React from 'react';
import Headers from "./Invoices-Table-Headers";
import Rows from "./Invoices-Table-Rows";

const Layout = ({
    closeModal,
    openModal,
    isModalOpen,
    invoices,
    handleItemClick,
    activeItem,
    openModalForEdit,
    handleInputChange,
    submit,
    fromFields,
    deleteInvoice,
    handleTabClick,
    activeTab,
    filtered,
    handleSearch,
    handleRowClick,
    next
}) =>
    <article className="container">
        <table className="invoices-table">
            <Headers
                next={next}
                handleRowClick={handleRowClick}
                handleSearch={handleSearch}
                filtered={filtered}
                invoices={invoices}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                fromFields={fromFields}
                submit={submit}
                handleInputChange={handleInputChange}
                closeModal={closeModal}
                openModal={openModal}
                isModalOpen={isModalOpen}
                handleItemClick={handleItemClick}
                activeItem={activeItem} />
            <tbody>
                <Rows
                    deleteInvoice={deleteInvoice}
                    openModalForEdit={openModalForEdit}
                    invoicesItems={invoices} />
            </tbody>
        </table>
    </article>

export default Layout;
