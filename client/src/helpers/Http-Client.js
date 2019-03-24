const HttpClient = {
    getAsync: async (url) => {
        let options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
        return await http(url, options)
    },
    postAsync: async (url, reqBody) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody),
        };
        return await http(url, options)
    },
    deleteAsync: async (url) => {
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

const http = async (url, options) => {
    // TODO: possible extra work before calling api
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.json();
        return await Promise.resolve(data);
    }
    catch (error) {
        // TODO: log the errors
        return Promise.reject({ message: "Unexpected error!! Contact support team" });
    }
}

export default HttpClient;
