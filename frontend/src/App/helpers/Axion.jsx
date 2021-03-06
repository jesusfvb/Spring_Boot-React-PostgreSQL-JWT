export const server = "http://localhost:8080"

function jwt(header) {
    let jwt = window.sessionStorage.getItem("Jwt");
    if (!(jwt === undefined || jwt === null)) {
        header.append("Authorization", jwt);
    }
}
export const GET = (url) => {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        jwt(myHeaders)
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        let status = null
        fetch("" + server + url, requestOptions)
            .then(response => { status = response.status; return response.text() })
            .then(result => {
                try {
                    result = JSON.parse(result);
                } catch (error) {
                    if (status === 200) {
                        resolve(result)
                    } else {
                        reject(result)
                    }
                }
                if (status === 200) {
                    resolve(result)
                } else {
                    reject(result)
                }
            })
            .catch(error => reject(error));
    })
}
export const DELETE = (url, data) => {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        jwt(myHeaders)

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let status = null
        fetch("" + server + url, requestOptions)
            .then(response => { status = response.status; return response.text() })
            .then(result => {
                try {
                    result = JSON.parse(result);
                } catch (error) {
                    if (status === 200) {
                        resolve(result)
                    } else {
                        reject(result)
                    }
                }
                if (status === 200) {
                    resolve(result)
                } else {
                    reject(result)
                }
            })
            .catch(error => reject(error));
    })
}
export const PUT = (url, data) => {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        jwt(myHeaders)
        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let status = null
        fetch("" + server + url, requestOptions)
            .then(response => { status = response.status; return response.text() })
            .then(result => {
                try {
                    result = JSON.parse(result);
                } catch (error) {
                    if (status === 200) {
                        resolve(result)
                    } else {
                        reject(result)
                    }
                }
                if (status === 200) {
                    resolve(result)
                } else {
                    reject(result)
                }
            })
            .catch(error => reject(error));
    })
}
export const POST = (url, data) => {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        jwt(myHeaders)
        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let status = null
        fetch("" + server + url, requestOptions)
            .then(response => { status = response.status; return response.text() })
            .then(result => {
                try {
                    result = JSON.parse(result);
                } catch (error) {
                    if (status === 200) {
                        resolve(result)
                    } else {
                        reject(result)
                    }
                }
                if (status === 200) {
                    resolve(result)
                } else {
                    reject(result)
                }
            })
            .catch(error => reject(error));
    })
}
export const PATCH = (url) => {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        jwt(myHeaders)
        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            redirect: 'follow'
        };
        let status = null
        fetch("" + server + url, requestOptions)
            .then(response => { status = response.status; return response.text() })
            .then(result => {
                try {
                    result = JSON.parse(result);
                } catch (error) {
                    if (status === 200) {
                        resolve(result)
                    } else {
                        reject(result)
                    }
                }
                if (status === 200) {
                    resolve(result)
                } else {
                    reject(result)
                }
            })
            .catch(error => reject(error));
    })
}