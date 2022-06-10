import UserController from "../controllers/user.controller.js"
import { addEventById, getById, setBold } from "../utils/utils.js"

const email = getById('email')
const password = getById('password')

window.onload = () => {
    setBold()
    getById('signInBtn').addEventListener('click', onClickLogin)
}

async function onClickLogin(){
    const isLogin = await new UserController().signIn(email.value, password.value)

    if(isLogin){
        alert('로그인이 완료되었습니다!')
    }
    else {
        alert('로그인 정보를 확인해 주세요!')
    }
}