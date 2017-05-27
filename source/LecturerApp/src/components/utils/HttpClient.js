import 'whatwg-fetch'

const API_URL = 'localhost:3000/api'

const HttpClient = {
    get (url, additionalHeaders = {}) {
        return this.request('GET', url, null, additionalHeaders)
    },

    post (url, data, additionalHeaders = {}) {
        return this.request('POST', url, JSON.stringify(data), additionalHeaders)
    },

    patch (uri, data, additionalHeaders = {}) {
        return this.request('PATCH', uri, JSON.stringify(data), additionalHeaders)
    },

    put (uri, data, additionalHeaders = {}) {
        if (data) {
            data = JSON.stringify(data)
        }
        return this.request('PUT', uri, data, additionalHeaders)
    },

    delete (uri, additionalHeaders = {}) {
        return this.request('DELETE', uri, null, additionalHeaders)
    },

    request (method, url, data, additionalHeaders = {}) {
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        Object.assign(headers, additionalHeaders)

        return fetch(API_URL + url, {
            method: method,
            mode: 'cors',
            headers: headers,
            body: data
        }).then(response => {
            return response.json()
        })
    }
}

export default HttpClient