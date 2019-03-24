import constants from "Constants";
import HttpClient from "Helpers/Http-Client";

export const getBankPayments = async (iban) => {
    try {
        let response = await HttpClient.getAsync(`${constants.SERVER_HOST_URL}/payments/${iban}`);
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