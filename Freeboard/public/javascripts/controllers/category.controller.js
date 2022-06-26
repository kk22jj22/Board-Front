import { RequestGetPost } from "../model/API/api.category.js"
import { getPostRequestModel } from "../model/request/auth.js"

class getPostController {
    async getPost(pageNo, numsOfPages, category) {
        const getPostModel = new getPostRequestModel(pageNo, numsOfPages, category)
        const result = await new RequestGetPost().checkGetPostApi(getPostModel)

        console.log(result)
        return result
    }
}

export {
    getPostController
}