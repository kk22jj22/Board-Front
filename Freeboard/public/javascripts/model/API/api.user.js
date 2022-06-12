import sendRequest from "./API.js";

class RequestUser{
    async signinApi(body) { return await sendRequest('/users/signin', 'post', body) }
}

class RequestEmail {
    async checkEmailApi(body) { return await sendRequest('/users/checkemail', 'post', body) }
}

export {
    RequestUser,
    RequestEmail
}