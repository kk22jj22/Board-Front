/*
class Auth{
    email
    passward

    constructor(email, passward){
        this.email = email
        this.password = password
    }
}

module.exports = {
    Auth
}
*/

class User {
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

class Test {
    test1
    test2
    test3

    constructor(test1, test2, test3) {
        this.test1 = test1;
        this.test2 = test2;
        this.test3 = test3;
    }

}

module.exports = {
    User, Test
}
