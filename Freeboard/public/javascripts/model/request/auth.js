class emailCheckRequestModel {
    email

    constructor(email) {
        this.email = email;
    }
}

class nicknameCheckRequestModel {
    nickName

    constructor(nickName) {
        this.nickName = nickName;
    }
}

class signUpRequestModel {
    name
    nickName
    email
    password

    constructor(name, nickName, email, password) {
        this.name = name;
        this.nickName = nickName;
        this.email = email;
        this.password = password;
    }
}

class SignInRequestModel{
    email
    password

    constructor(email, password){
        this.email = email
        this.password = password
    }
}

export{    
    SignInRequestModel,

    signUpRequestModel,
    emailCheckRequestModel,
    nicknameCheckRequestModel
}