import { isLogin, setBold, toLocation } from "../utils/utils.js";
import { setPage } from "./main.js";


// input
const idinput = document.getElementById('id-input');
const pwinput = document.getElementById('password-input');
const nicknameinput = document.getElementById('nickname-input');
const nameinput = document.getElementById('username-input');

// button
const idcheck = document.getElementById('id-check');
const nicknamecheck = document.getElementById('nickname-check');
const joinsubmit = document.getElementById('join-submit');

// msg
const idmsg = document.getElementById('id-msg');

window.onload = () => {

    if(isLogin()){
        alert('비정상적인 접근입니다.')
        toLocation("/index")
    }
    else{
        setPage()
        setBold()
        getById('signInBtn').addEventListener('click', onClickLogin)
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