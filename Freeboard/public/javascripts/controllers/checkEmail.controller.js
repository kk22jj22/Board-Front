import { RequestEmail } from "../model/API/api.user.js";
import { emailCheckRequestModel } from "../model/request/auth.js"

export default class checkEmailController {
    async checkEmail(email) {
        const CheckEmailModel = new emailCheckRequestModel(email)
        const result = await new RequestEmail().checkEmailApi(CheckEmailModel)

        console.log(result.responseCode);


        if(result.responseCode === 200) {
            return true
        } else {
            return false
        }
    }
}