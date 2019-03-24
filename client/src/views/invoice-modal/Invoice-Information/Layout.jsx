import React from "react";
import LayoutDesktop from "./Layout-Desktop";
import LayoutMobile from "./Layout-Mobile";

const InvoicesInformationForm = (props) =>
    <React.Fragment>
        <LayoutDesktop {...props} />
        <LayoutMobile {...props} />
    </React.Fragment>

export default InvoicesInformationForm;