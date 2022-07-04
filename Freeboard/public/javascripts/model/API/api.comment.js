import sendRequest from "./API.js"

class requestCommentRegister {
    async commentRegiApi(body) { return await sendRequest('/comment/registercomment', 'post', body)}
}

export {
    requestCommentRegister
}