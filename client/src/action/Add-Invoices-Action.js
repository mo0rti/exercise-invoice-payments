import constants from "../constants";
import HttpClient from "../helpers/Http-Client";

const api = (request) => HttpClient.postAsync(`${constants.SERVER_HOST_URL}/invoices/add`, request);

const mock = (request) => new Promise((resolve, reject) => {
    //TODO: implement it later    
})

const _add = (request) => (constants.USE_MOCK_SERVICES) ? mock(request) : api(request);

export const addInvoice = async (request) => {
    try {
        let response = await _add(request);
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