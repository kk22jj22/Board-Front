import { checkEmailController, checkNicknameController, signupCheckController } from "../controllers/signupCheck.controller.js";
import { setTextColor, getById, isLogin, setBold, setText, toLocation } from "../utils/utils.js";
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
    const emailCheck = await new checkEmailController().checkEmail(email.value)

    if(email.value === "") {
        setText('emailMsg', '❗id를 입력해주세요')
        setTextColor('emailMsg', 'red')
    } else {
        if(regEmail.test(email.value) === false) {
            setText('emailMsg', '❗입력한 ID를 다시 확인해주세요')
            setTextColor('emailMsg', 'red')
        }
        else if(regEmail.test(email.value) === true && emailCheck === true) {
            emailCheckisYn = true;
            setText('emailMsg', '✔ Success')
            setTextColor('emailMsg', 'green')
        }
        else if(emailCheck === false) {
            setText('emailMsg', '❗이미 가입된 이메일입니다')
            setTextColor('emailMsg', 'red')
        }
    }
}

async function nicknameCheck() {
    const nickname = getById('nicknameInput')
    const nicknameCheck = await new checkNicknameController().checkNickname(nickname.value)

    if(nickname.value === "") {
        setText('nicknameMsg', '❗닉네임을 입력해주세요')
        setTextColor('nicknameMsg', 'red')

    }else if(nicknameCheck === true) {
        nicknameCheckisYn = true;
        setText('nicknameMsg', '✔ Success')
        setTextColor('nicknameMsg', 'green')

    }else if(nicknameCheck === false) {
        setText('nicknameMsg', '❗이미 가입된 닉네임입니다')       
        setTextColor('nicknameMsg', 'red')
    }
}

function passwordCheck() {   
    const password = getById('passwordInput')
    const passwordConfirm = getById('passwordConfirmInput')

    if(password.value !== passwordConfirm.value) {
        passwordCheckisYn = false;
        setText('passwordMsg', '❗비밀번호가 일치하지 않습니다')     
        setTextColor('passwordMsg', 'red')
    } else if(password.value !== '' && passwordConfirm.value !== '' 
    && password.value === passwordConfirm.value) {
        passwordCheckisYn = true;
        setText('passwordMsg', '✔ Success')   
        setTextColor('passwordMsg', 'green')
    }
}

async function signupCheck() {
    const name = getById('nameInput')
    const nickname = getById('nicknameInput')
    const email = getById('emailInput')
    const password = getById('passwordInput')

    let nicknameCheckisYn = await new checkNicknameController().checkNickname(nickname.value)
    let emailCheckisYn = await new checkEmailController().checkEmail(email.value)

    if(emailCheckisYn === true && nicknameCheckisYn === true && passwordCheckisYn === true) {
        const signupCheck = await new signupCheckController().signupCheck(name.value, nickname.value, email.value, password.value) 
        alert('회원가입 성공! 로그인 해주세요')
        window.location = '/login'

    } else if(emailCheckisYn === false && nicknameCheckisYn === true) {
        alert('입력한 정보를 다시 확인해주세요')
        setText('emailMsg', '❗ID 중복체크를 해주세요')   
        setTextColor('emailMsg', 'red')
        email.focus()

    } else if(emailCheckisYn === true && nicknameCheckisYn === false) {
        alert('입력한 정보를 다시 확인해주세요')
        setText('nicknameMsg', '❗NICKNAME 중복체크를 해주세요') 
        setTextColor('nicknameMsg', 'red')
        nickname.focus()

    } else if(emailCheckisYn === false && nicknameCheckisYn === false) {
        alert('입력한 정보를 다시 확인해주세요')       
        setText('emailMsg', '❗ID 중복체크를 해주세요') 
        setText('nicknameMsg', '❗NICKNAME 중복체크를 해주세요') 
        setTextColor('emailMsg', 'red')
        setTextColor('nicknameMsg', 'red')
        email.focus()

    } else {
        alert('입력한 정보를 다시 확인해주세요')
        password.focus();
    }
}