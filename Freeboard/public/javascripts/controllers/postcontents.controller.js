import { getDetailsRequestModel } from "../model/request/auth.js"
import { RequestGetDetail } from "../model/API/api.postcontents.js";



class postContentsController {
    async getDetails(boardId, numOfPage, pageNo) {

        const getDetailsModel = new getDetailsRequestModel(boardId, numOfPage, pageNo)
        const result = await new RequestGetDetail().checkgetDetailApi(getDetailsModel)
        
        console.log(result)
        console.log(result.responseCode)
        return result
    }
}

export {
    postContentsController
}