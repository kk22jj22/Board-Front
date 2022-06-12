import { setBold, getById, isLogin } from "../utils/utils.js"

window.onload = () => {

    setPage()
    setBold()
}

function setPage(){

    console.log(isLogin());

    //로그인
    if(isLogin()){
        const nickName = sessionStorage.getItem('userNickName')

        getById('navRight').innerHTML = 
        `<li class="nav-right-items" id="welcome"> <span id="welcomeNickname">${nickName}</span>님 반가워요🤗</li> 
        <li class="nav-right-items" id="logOut">Logout</li>` //백틱 -> "" '' 동일한데, 엔터를 쳐도 되는 거야 ${} -> js값을 사용 가능

        getById('logOut').addEventListener('click', ()=>{

            alert('로그아웃 되었습니다.')

            sessionStorage.clear()
            window.location.reload()
        })        
    }
    //비로그인
    else{
        getById('navRight').innerHTML = 
        `<li class="nav-right-items" id="login"><a href="/login">Login</a></li>
        <li class="nav-right-items" id="signup"><a href="/signup">Sign up</a></li>`
    }

}

export {
    setPage
}
