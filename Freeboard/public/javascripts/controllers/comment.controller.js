import { requestCommentRegister } from "../model/API/api.comment.js"
import { registerCommentRequestModel } from "../model/request/auth.js"

class registerCommentController {
    async registerComment(boardId, userId, comment) {
        const registerCommentModel = new registerCommentRequestModel(boardId, userId, comment)
        const result = await new requestCommentRegister().commentRegiApi(registerCommentModel)

        console.log(result)

        if(result.responseCode === 200) {
            return true
        } else {
            return false
        }   
    }
}

export {
    registerCommentController
}