import { requestPostRegister } from "../model/API/api.newpost.js"
import { postRegisterRequestModel } from "../model/request/auth.js"


export default class postRegisterController {
    async postRegister(title, value, userId, category) {
        const postRegisterModel = new postRegisterRequestModel(title, value, userId, category)
        const result = await new requestPostRegister().postregiApi(postRegisterModel)

        console.log(result)

        if(result.responseCode === 200) {
            return true
        } else {
            return false
        }   
    }
}