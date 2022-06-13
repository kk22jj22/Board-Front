import sendRequest from "./API.js";

class RequestUser{
    async signinApi(body) { return await sendRequest('/users/signin', 'post', body) }
}

export {
    RequestUser
}