
import { RequestEmail, RequestNickname, RequestSignup } from "../model/API/api.signup.js";
import { emailCheckRequestModel, nicknameCheckRequestModel, signUpRequestModel } from "../model/request/auth.js"

class checkEmailController {
    async checkEmail(email) {
        const checkEmailModel = new emailCheckRequestModel(email)
        const result = await new RequestEmail().checkEmailApi(checkEmailModel)

        if(result.responseCode === 200) {
            return true
        } else {
            return false
        }
    }
}

class checkNicknameController {
    async checkNickname(nickName) {
        const checkNicknameModel = new nicknameCheckRequestModel(nickName)
        const result = await new RequestNickname().checkNicknameApi(checkNicknameModel)

        console.log(result);

        if(result.responseCode === 200) {
            return true
        } else {
            return false
        }
    }
}

class signupCheckController {
    async signupCheck(name, nickName, email, password) {
        const signupCheckModel = new signUpRequestModel(name, nickName, email, password)
        const result = await new RequestSignup().checkSignupApi(signupCheckModel)

        console.log(result);

        if(result.responseCode === 200) {
            return true
        } else {
            return false
        }                
    }
}

export {
    checkEmailController,
    checkNicknameController,
    signupCheckController
}