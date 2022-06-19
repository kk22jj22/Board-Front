import sendRequest from "./API.js"


class requestPostRegister {
    async postregiApi(body) { return await sendRequest('/board/registerBoard', 'post', body)}
}

export {
    requestPostRegister
}