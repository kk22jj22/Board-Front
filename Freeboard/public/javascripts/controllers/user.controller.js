import { SignInRequestModel } from "../model/request/auth.js";
import RequestUser from "../model/API/api.user.js"

export default class UserController{
    async signIn(email, password){

        const signInModel = new SignInRequestModel(email, password)

        const result = await new RequestUser().signin(signInModel)

        console.log("signIn \n", result);

        //성공
        if(result.responseCode === 200){

            sessionStorage.setItem("userId", result.userInfo.user_id)
            sessionStorage.setItem("userEmail", result.userInfo.email)
            sessionStorage.setItem("userName", result.userInfo.name)
            sessionStorage.setItem("userNickName", result.userInfo.nick_name)

            return true
        }
        else{
            return false
        }
    }
}