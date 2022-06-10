class SignUp {
    email
    password
    name
    nick_name

    constructor(email, password, name, nick_name) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.nick_name = nick_name;
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
    SignUp,
    SignInRequestModel
}