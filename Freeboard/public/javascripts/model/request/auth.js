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

class SignUpRequestModel {
    email
    password
    name
    nickName

    constructor(email, password, name, nickName) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.nickName = nickName;
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

    SignUpRequestModel,
    emailCheckRequestModel,
    nicknameCheckRequestModel
}