import constants from "../constants";
import HttpClient from "../helpers/Http-Client";

const api = (id) => HttpClient.getAsync(`${constants.SERVER_HOST_URL}/invoices/${id}`);

const mock = (id) => new Promise((resolve, reject) => {
  //TODO: Perform the mock later
})

const _get = (request) => (constants.USE_MOCK_SERVICES) ? mock(request) : api(request);

export const getInvoiceDetailsByID = async (request) => {

  try {
    let response = await _get(request);
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