import constants from "Constants";
import HttpClient from "Helpers/Http-Client";

export const addInvoice = async (request) => {
    try {
        let response = await HttpClient.postAsync(`${constants.SERVER_HOST_URL}/invoices/add`, request);
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

export const deleteInvoice = async (id) => {
    try {
        let response = await HttpClient.deleteAsync(`${constants.SERVER_HOST_URL}/invoice/delete/${id}`);
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

export const editInvoice = async (id, request) => {
    try {
        let response = await HttpClient.postAsync(`${constants.SERVER_HOST_URL}/invoice/${id}`, request);
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

export const getInvoiceDetailsById = async (id) => {
    try {
        let response = await HttpClient.getAsync(`${constants.SERVER_HOST_URL}/invoices/${id}`);
        let { status, data, message } = response;
        if (!status) {
            return Promise.reject(message);
        }
        return Promise.resolve(data[0]);
    }
    catch (error) {
        return Promise.reject(error);
    }
};