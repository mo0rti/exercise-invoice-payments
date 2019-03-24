import constants from "../constants";
import HttpClient from "../helpers/Http-Client";

const api = (id) => HttpClient.deleteAsync(`${constants.SERVER_HOST_URL}/invoice/delete/${id}`);

const mock = (id) => new Promise((resolve, reject) => {
    //TODO: Perform the mock later
})

const _delete = (id) => (constants.USE_MOCK_SERVICES) ? mock(id) : api(id);

export const deleteInvoice = async (id) => {
    try {
        let response = await _delete(id);
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

