import constants from "../constants";
import HttpClient from "../helpers/Http-Client";
import { mockInvoices, mockInvoicesFailed } from '../store/mock';

const api = () => HttpClient.getAsync(`${constants.SERVER_HOST_URL}/invoices`);

const mock = () => new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve(mockInvoices)
        // reject(mockInvoicesFailed);
        , constants.MOCK_SERVICES_TIMEOUT);
})

const _getList = () => (constants.USE_MOCK_SERVICES) ? mock() : api();

export const getInvoicesList = async () => {
    try {

        let response = await _getList();        
        let { status, data, message } = response
        if (!status) {
            return Promise.reject(message);
        }
        return Promise.resolve(data);
    }
    catch (error) {
        return Promise.reject(error);
    }
};