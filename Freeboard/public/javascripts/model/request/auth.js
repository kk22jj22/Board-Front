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

class postRegisterRequestModel{
    title
    content
    userId
    category


    constructor(title, content, userId, category) {
        this.title = title
        this.content = content
        this.userId = userId
        this.category = category
    }

}

class getPostRequestModel {
    pageNo
    numsOfPages
    category

    constructor(pageNo, numsOfPages, category) {
        this.pageNo = pageNo
        this.numsOfPages = numsOfPages
        this.category = category
    }
}

class getDetailsRequestModel {
    boardId
    numOfPage
    pageNo

    constructor(boardId, numOfPage, pageNo) {
        this.boardId = boardId
        this.numOfPage = numOfPage
        this.pageNo = pageNo
    }

}

export{    
    SignInRequestModel,

    signUpRequestModel,
    emailCheckRequestModel,
    nicknameCheckRequestModel,

    postRegisterRequestModel,
    getPostRequestModel,
    getDetailsRequestModel
}