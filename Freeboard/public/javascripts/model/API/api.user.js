import sendRequest from "./API.js";

export default class RequestUser{
    async signin(body){ return await sendRequest('/users/signin', 'post', body) }
}