const testRequestModel = require("../model/request/auth")

class testController{

    test(test1, test2, test3){
        
        const body = new testRequestModel.Test(test1, test2, test3)

        fetch("http://54.213.3.105:3000/test", {
            headers:{
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(this.test1, this.test2, this.test3),
        })
        
    }

}

module.exports = {
    testController
}

/*
    fetch('url', {
        options...
        Ex. 
        method: 'POST'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => { console.log("success", data))};
    .catch((error) => { console.log("error:", error))}; // 예외처리
*/