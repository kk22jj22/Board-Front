

import { checkEmailController, checkNicknameController } from "../controllers/signupCheck.controller.js";
import { getById, isLogin, setBold, toLocation } from "../utils/utils.js";
import { setPage } from "./main.js";


window.onload = () => {
    if(isLogin()){
        alert('비정상적인 접근입니다.')
        toLocation("/index")
    }
    else{
        setPage()
        setBold()
        getById('emailCheckBtn').addEventListener("click", emailCheck)
        getById('nicknameCheckBtn').addEventListener("click", nicknameCheck)
    }
}

async function emailCheck() {
    let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

    const email = getById('emailInput')
    const emailMsg = getById('emailMsg')
    const emailCheck = await new checkEmailController().checkEmail(email.value)

    if(email.value === "") {
        emailMsg.textContent = '❗id를 입력해주세요';
        emailMsg.style.color = 'red';
    } else {
        if(regEmail.test(email.value) === false) {
            emailMsg.textContent = '❗입력한 ID를 다시 확인해주세요'
            emailMsg.style.color = 'red';
            email.focus();
        }
        else if(regEmail.test(email.value) === true && emailCheck === true) {
            emailMsg.textContent = '✔ Success';
            emailMsg.style.color = 'green';
        }
        else if(emailCheck === false) {
            emailMsg.textContent = '❗이미 가입된 이메일입니다'
            emailMsg.style.color = 'red';
        }
    }
}

async function nicknameCheck() {
    const nickname = getById('nicknameInput');
    const nicknameMsg = getById('nicknameMsg');
    const nicknameCheck = await new checkNicknameController().checkNickname(nickname.value)

    console.log(nicknameCheck);
    
    if(nickname.value === "") {
        nicknameMsg.textContent = '❗닉네임을 입력해주세요';
        nicknameMsg.style.color = 'red';
    }else if(nicknameCheck === true) {
        nicknameMsg.textContent = '✔ Success';
        nicknameMsg.style.color = 'green';
    }else if(nicknameCheck === false) {
        nicknameMsg.textContent = '❗이미 가입된 닉네임입니다'
        nicknameMsg.style.color = 'red';
    }
}

// 닉네임 중복체크 (중복체크 안했으면 팅궈줘야 함)
// submit