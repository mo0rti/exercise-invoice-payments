import React from "react";
//components
import ModalBox from "../modal";

const InvoicesTableHeader = ({
    isModalOpen,
    closeModal,
    openModal,
    handleInputChange,
    submit,
    fromFields,
    handleTabClick,
    activeTab,
    invoices,
    filtered,
    handleSearch,
    handleRowClick,
    next
}) =>
    <thead>
        <tr>
            <th colSpan="100%" className="header-invoices">
                <div>
                    <span>
                        <h3>Invoices List:</h3>
                    </span>
                    <ModalBox
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
                        isModalOpen={isModalOpen} />
                </div>
            </th>
        </tr>
    </thead>

export default InvoicesTableHeader;