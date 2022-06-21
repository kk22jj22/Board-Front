import sendRequest from "./API.js"

class RequestGetPost {
    async checkGetPostApi(body) { return await sendRequest('/board/categoryList', 'get', body)}
}

export {
    RequestGetPost
}