import checkEmailController from "../controllers/checkEmail.controller.js";
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
    }
}

async function emailCheck() {
    let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

    const email = getById('emailInput')
    const emailMsg = getById('emailMsg')
    const emailCheck = await new checkEmailController().checkEmail(email.value);

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

// 닉네임 중복체크 (중복체크 안했으면 팅궈줘야 함)
// submit