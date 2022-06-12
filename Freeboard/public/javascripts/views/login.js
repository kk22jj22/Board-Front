import UserController from "../controllers/user.controller.js"
import { addEventById, getById, isLogin, setBold, toLocation } from "../utils/utils.js"

const email = getById('email')
const password = getById('password')

window.onload = () => {

    if(isLogin()){
        alert('비정상적인 접근입니다.')
        toLocation("/index")
    }
    else{
        getById('signInBtn').addEventListener('click', onClickLogin)
        setBold()
    }
}

async function onClickLogin(){
    const isLogin = await new UserController().signIn(email.value, password.value)

    if(isLogin){
        alert('로그인이 완료되었습니다!')

        window.location = "/index"

        /*
            1. 화면을 이동해준다.
            2. 로그인이 되었는지 체크를 해야되 -> 이 세션스토리지로 가능하다.
                -> 로그인, 회원가입 버튼을 ~~님 안녕하세요 등의 멘트로 수정해야되기 때문에

            화면을 상황에 따라 변경하는 방법
                -> 물리적으로 코드가 분리되어있는 방법
                -> div등 태그를 사라졌다가 나왔다가 하는 방법
                -> 애초에 비워뒀다가 값을 채우는 방법

                //로그인 시
                do.get("isLogin").innerHTML = `<p>~~님 반갑습니다.</p>`
                //비로그인 시
                do.get("isLogin").innerHTML = `로그인 , 거시기`

                <div id="isLogin"> </div>
        */
    }
    else {
        alert('로그인 정보를 확인해 주세요!')
    }
}