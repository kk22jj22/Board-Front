import { checkEmailController, checkNicknameController, signupCheckController } from "../controllers/signupCheck.controller.js";
import { getById, isLogin, setBold, toLocation } from "../utils/utils.js";
import { setPage } from "./main.js";

let emailCheckisYn = false;
let nicknameCheckisYn = false;
let passwordCheckisYn = false;

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
        getById('passwordInput').addEventListener("keyup", passwordCheck)
        getById('passwordConfirmInput').addEventListener("keyup", passwordCheck)
        getById('signupSubmitBtn').addEventListener("click", signupCheck)
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
        }
        else if(regEmail.test(email.value) === true && emailCheck === true) {
            emailCheckisYn = true;
            emailMsg.textContent = '✔ Success';
            emailMsg.style.color = 'green';
        }
        else if(emailCheck === false) {
            emailMsg.textContent = '❗이미 가입된 이메일입니다'
            emailMsg.style.color = 'red';
        }
    }

    console.log(emailCheckisYn)
}

async function nicknameCheck() {
    const nickname = getById('nicknameInput')
    const nicknameMsg = getById('nicknameMsg')
    const nicknameCheck = await new checkNicknameController().checkNickname(nickname.value)

    if(nickname.value === "") {
        nicknameMsg.textContent = '❗닉네임을 입력해주세요';
        nicknameMsg.style.color = 'red';

    }else if(nicknameCheck === true) {
        nicknameCheckisYn = true;
        nicknameMsg.textContent = '✔ Success';
        nicknameMsg.style.color = 'green';

    }else if(nicknameCheck === false) {
        nicknameMsg.textContent = '❗이미 가입된 닉네임입니다'
        nicknameMsg.style.color = 'red';
    }
    console.log(nicknameCheckisYn)
}

function passwordCheck() {   
    const password = getById('passwordInput')
    const passwordConfirm = getById('passwordConfirmInput')
    const passwordMsg = getById('passwordMsg')

    if(password.value !== passwordConfirm.value) {
        passwordCheckisYn = false;
        passwordMsg.textContent = '❗비밀번호가 일치하지 않습니다'
        passwordMsg.style.color = 'red';
    } else if(password.value !== '' && passwordConfirm.value !== '' 
    && password.value === passwordConfirm.value) {
        passwordCheckisYn = true;
        passwordMsg.textContent = '✔ Success'
        passwordMsg.style.color = 'green';
    }
}

async function signupCheck() {
    const name = getById('nameInput')
    const nickname = getById('nicknameInput')
    const email = getById('emailInput')
    const password = getById('passwordInput')
    const emailMsg = getById('emailMsg')
    const nicknameMsg = getById('nicknameMsg')

    let nicknameCheckisYn = await new checkNicknameController().checkNickname(nickname.value)
    let emailCheckisYn = await new checkEmailController().checkEmail(email.value)

    if(emailCheckisYn === true && nicknameCheckisYn === true && passwordCheckisYn === true) {
        const signupCheck = await new signupCheckController().signupCheck(name.value, nickname.value, email.value, password.value) 
        alert('회원가입 성공! 로그인 해주세요')
        window.location = '/login'

    } else if(emailCheckisYn === false && nicknameCheckisYn === true) {
        alert('입력한 정보를 다시 확인해주세요')
        emailMsg.textContent = '❗ID 중복체크를 해주세요'
        emailMsg.style.color = 'red'
    } else if(emailCheckisYn === true && nicknameCheckisYn === false) {
        alert('입력한 정보를 다시 확인해주세요')
        nicknameMsg.textContent = '❗NICKNAME 중복체크를 해주세요'
        nicknameMsg.style.color = 'red'
    } else if(emailCheckisYn === false && nicknameCheckisYn === false) {
        alert('입력한 정보를 다시 확인해주세요')       
        emailMsg.textContent = '❗ID 중복체크를 해주세요'
        nicknameMsg.textContent = '❗NICKNAME 중복체크를 해주세요'
        emailMsg.style.color = 'red'
        nicknameMsg.style.color = 'red'
    } else {
        alert('입력한 정보를 다시 확인해주세요')
        password.focus();
    }
}