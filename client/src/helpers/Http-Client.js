class HttpClient {
    getAsync = async (url) => {
        let options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
        return await http(url, options)
    }
    postAsync = async (url, reqBody) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody),
        };
        return await http(url, options)
    }
    deleteAsync = async (url) => {
        let options = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
        return await http(url, options)
    }
}

const http = async (url, options) =>
    fetch(url, options)
        .then(response => response.json())
        .then(data => Promise.resolve(data))
        .catch(error => Promise.reject(error));

export default new HttpClient;
