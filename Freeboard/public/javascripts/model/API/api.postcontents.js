import sendRequest from "./API.js";

class RequestgetDetail {
    async checkGetDetailApi(body) { return await sendRequest('/board/detailBoard', 'get', body) }
}

export {
    RequestgetDetail
}