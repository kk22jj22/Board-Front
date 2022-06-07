/*
const LoginController = require("../../controllers/loginController")
const joinController = require("../../controllers/joinController")

function onClick(){

    const email = document.getElementById("email").textContent
    const passward = document.getElementById("passward").textContent

    new LoginController.LoginController().login(email, passward)
}
*/

// const { colors } = require("debug/src/browser");

// import { testController } from "../../controllers/testController.js";

// input
const idinput = document.getElementById('id-input');
const pwinput = document.getElementById('password-input');
const nicknameinput = document.getElementById('nickname-input');
const nameinput = document.getElementById('username-input');

// msg
const idmsg = document.getElementById('id-msg');

// button
const idcheck = document.getElementById('id-check');
const nicknamecheck = document.getElementById('nickname-check');
const catenewpost = document.getElementById('new-post');

// submit
const joinsubmit = document.getElementById('join-submit');

// td
const postcontents = document.getElementById('post-contents');

// idcheck.addEventListener("click", emailYnCheck);
// joinsubmit.addEventListener("click", testRequest);
// catenewpost.addEventListener("click", newPost);

navSelectBold();

function navSelectBold() {
    if(location.search === "?cateid=1") {
        document.getElementById('cate1').style.fontWeight = 'bold';
    }
    
    if(location.search === "?cateid=2") {
        document.getElementById('cate2').style.fontWeight = 'bold';
    }
    
    if(location.search === "?cateid=3") {
        document.getElementById('cate3').style.fontWeight = 'bold';
    }

    if(location.pathname === "/login") {
        document.getElementById('login').style.fontWeight = 'bold';
    }

    if(location.pathname === "/join") {
        document.getElementById('join').style.fontWeight = 'bold';
    }
}


function emailYnCheck() {
    var regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var id = idinput.value;

    if(id === "") {
        idmsg.textContent = '❗id를 입력해주세요';
    } else {
        if(regEmail.test(id) === false) {
            idmsg.textContent = '❗입력한 ID를 다시 확인해주세요'
            idinput.focus();
        }
        if(regEmail.test(id) === true) {
            idmsg.textContent = '✔ Success';
        }
    }
}

function newPost() {
    fetch('http://54.213.3.105:3000/test')
    .then((response) => response.json())
    .then((data) => {
        const testarea = document.getElementById('testarea');
        const t1 = document.createElement('div');
        testarea.appendChild(t1);
        t1.textContent = data.test3.test1;

        const td = document.createElement('td');
        const tr = document.createElement('tr');
        tr.appendChild(td);
        postcontents.appendChild(tr);

        td.textContent = data.test1;
        // for(let i=0; i<data.length; i++){
        //     for(let j=0; j<data.length; j++) {
        //         const tr = document.createElement('tr');
        //         const td = document.createElement('td');
        //         tr.appendChild(td);
        //         postcontents.appendChild(tr);

        //         td.textContent = data.testj.
        //     }
        // }
    });
        
}



// function nicknameOverlapCheck() {
// }

// function joinRequest() {
//     new testController.testController().test(test1, test2, test3);
//     console.log(test1, test2, test3);
// }