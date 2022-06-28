import sendRequest from "./API.js"

class RequestGetDetail {
    async checkgetDetailApi(body) { return await sendRequest('/board/detailBoard', 'get', body)}
}

export {
    RequestGetDetail
}