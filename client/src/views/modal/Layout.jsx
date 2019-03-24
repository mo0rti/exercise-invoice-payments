import React from "react";
import { Modal, Menu, Button } from "semantic-ui-react";
//components
import InvoicesInformationForm from "./Invoices-informations-Form";
import PaymentForm from "./Payment-Form";

const Layout = ({
    isModalOpen,
    openModal,
    closeModal,
    handleTabClick,
    handleAccordionClick,
    activeTab,
    activeIndex,
    filtered,
    handleInputChange,
    submit,
    fromFields,
    handleSearch,
    handleRowClick,
    next
}) =>
    <Modal
        open={isModalOpen}
        onClose={closeModal}
        className="modal-container"
        closeIcon
        trigger={<Button onClick={openModal}> Add new invoices</Button>}>
        <Modal.Header className="modal-header">Invoices Dialog</Modal.Header>
        <article className="invoice-dialog">
            <section className="tabs web-view">
                <Menu vertical>
                    <Menu.Item
                        id='information'
                        name='Invoice Information'
                        active={activeTab === 'information'}
                        onClick={(e) => handleTabClick(e.target.id)} />
                    <Menu.Item
                        id='payments'
                        name='Payments'
                        disabled={!fromFields.isBankAmount}
                        active={activeTab === 'payments'}
                        onClick={(e) => handleTabClick(e.target.id)}
                    />
                </Menu>
            </section>
            <section className="tabs-contents">
                {activeTab === "information" ?
                    <InvoicesInformationForm
                        next={next}
                        submit={submit}
                        fromFields={fromFields}
                        handleInputChange={handleInputChange}
                        activeIndex={activeIndex}
                        handleAccordionClick={handleAccordionClick} /> :
                    <PaymentForm
                        submit={submit}
                        handleRowClick={handleRowClick}
                        handleSearch={handleSearch}
                        filtered={filtered} />
                }
            </section>
        </article>
    </Modal>
export default Layout;