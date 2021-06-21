class HttpService {
    setheader(method, data) {
        let opt = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
            },
        }
        if (data)
            opt.body = JSON.stringify(data);

        return opt;
    }
    //
    fetch(url, header) {
        if (typeof url == "undefined")
            return new Promise((resolve, reject) => { reject('Error') });
        else
            url = baseUrl + url;

        return new Promise((resolve, reject) => {
            fetch(url, header)
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result.status == 200 || result.isSuccess)
                            resolve(result);
                        reject(result.errors);
                    },
                    (error) => {
                        reject(error);
                    }
                );
        })

    }
    get(getApi) {
        return this.fetch(getApi, this.setheader('Get', null));
    }
    post(postApi, data) {
        return this.fetch(postApi, this.setheader('Post', data));
    }
}
const http = new HttpService();

