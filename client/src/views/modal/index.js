import React from "react";
//action
import { getInvoicesList } from "../../action"
//components
import Layout from "./Layout";
import "./style.css";

class ModalBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            filtered: [],
            transfers: []
        }
    }

    componentDidMount() {
        getInvoicesList().then(data =>
            this.setState({ transfers: data })
        )
    }

    _handleAccordionClick = (e, titleProps) => {
        let { index } = titleProps;
        const { activeIndex } = this.state
        const newIndex = (activeIndex === index) ? -1 : index;
        this.setState({ activeIndex: newIndex })
    }

    render() {
        let { activeIndex } = this.state;
        let { isModalOpen,
            closeModal,
            openModal,
            handleInputChange,
            submit,
            fromFields,
            handleTabClick,
            activeTab,
            filtered,
            handleSearch,
            handleRowClick,
            next
        } = this.props;
        console.log(fromFields);
        return (
            <Layout
                next={next}
                handleRowClick={handleRowClick}
                handleSearch={handleSearch}
                submit={submit}
                fromFields={fromFields}
                handleInputChange={handleInputChange}
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
                filtered={filtered}
                activeTab={activeTab}
                activeIndex={activeIndex}
                handleTabClick={handleTabClick}
                handleAccordionClick={this._handleAccordionClick} />
        )
    }
}

export default ModalBox;