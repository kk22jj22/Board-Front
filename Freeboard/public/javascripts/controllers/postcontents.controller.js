import { RequestgetDetail } from "../model/API/api.postcontents.js"
import { getDetailsRequestModel } from "../model/request/auth.js"

class getDetailsController {
    async getDetails(boardId, numOfPage, pageNo) {
        const getDetailsModel = new getDetailsRequestModel(boardId, numOfPage, pageNo)
        const result = await new RequestgetDetail().checkGetDetailApi(getDetailsModel)

        console.log(result)
        return result
    }
}

export {
    getDetailsController
}