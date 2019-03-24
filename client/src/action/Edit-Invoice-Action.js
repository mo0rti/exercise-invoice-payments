import constants from "../constants";
import HttpClient from "../helpers/Http-Client";

const api = (id, request) => HttpClient.postAsync(`${constants.SERVER_HOST_URL}/invoice/${id}`, request);

const mock = (id, request) => new Promise((resolve, reject) => {
    //TODO: Perform the mock later
})

const _edit = (id, request) => (constants.USE_MOCK_SERVICES) ? mock(id, request) : api(id, request);

export const editInvoice = async (id, request) => {
    try {
        let response = await _edit(id, request);
        let { status, message } = response;
        if (!status) {
            return Promise.reject(message);
        }
        return Promise.resolve(message);
    }
    catch (error) {
        return Promise.reject(error);
    }
};

