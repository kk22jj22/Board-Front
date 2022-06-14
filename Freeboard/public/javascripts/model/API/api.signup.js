import sendRequest from "./API.js"

class RequestEmail {
    async checkEmailApi(body) { return await sendRequest('/users/checkemail', 'post', body) }
}

class RequestNickname {
    async checkNicknameApi(body) { return await sendRequest('/users/checknickname', 'post', body) }
}

class RequestSignup {
    async checkSignupApi(body) { return await sendRequest('/users/signup', 'post', body) }
}

export {
    RequestEmail,
    RequestNickname,
    RequestSignup
}