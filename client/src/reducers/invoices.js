import * as actiontype from 'Constants/Action-Types';

const initState = {
    isLoading: false,
    error: { code: "", message: "" },
    selectedInvoice: {
        id: '',
        date: '',
        subject: '',
        isBankAmount: false,
        bankAmount: ''
    },
    items: []
};

const invoices = (state = initState, action) => {
    switch (action.type) {
        //------------------- INVOICES DATA
        case actiontype.INVOICES.DATA_REQUESTED: {
            return Object.assign({}, state, { isLoading: true });
        }
        case actiontype.INVOICES.DATA_FAILED: {
            return Object.assign({}, state, { isLoading: false, error: action.payload.error });
        }
        case actiontype.INVOICES.DATA_SUCCEEDED: {
            return Object.assign({}, state, { isLoading: false, items: action.payload });
        }
        //------------------- INVOICE DETAILS BY ID
        case actiontype.INVOICE.DATA_REQUESTED: {
            return Object.assign({}, state, { isLoading: true });
        }
        case actiontype.INVOICE.DATA_FAILED: {
            return Object.assign({}, state, { isLoading: false, error: action.payload.error });
        }
        case actiontype.INVOICE.DATA_SUCCEEDED: {
            return Object.assign({}, state, { isLoading: false, selectedInvoice: action.payload });
        }
        default: return state;
    }
}
export default invoices;