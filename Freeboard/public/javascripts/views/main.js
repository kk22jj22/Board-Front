import { getPostController } from "../controllers/category.controller.js"
import { setBold, getById, isLogin, toLocation } from "../utils/utils.js"

window.onload = () => {

    setPage()
    setBold()
    getAllPostLists()
}

function setPage(){
    //로그인
    if(isLogin()){
        const nickName = sessionStorage.getItem('userNickName')
        getById('navRight').innerHTML = 
        `<li class="nav-right-items" id="welcome"> <span id="welcomeNickname">${nickName}</span>님 반가워요🤗</li> 
        <li class="nav-right-items" id="logOut">Logout</li>` //백틱 -> "" '' 동일한데, 엔터를 쳐도 되는 거야 ${} -> js값을 사용 가능

        getById('logOut').addEventListener('click', ()=>{
            alert('로그아웃 되었습니다.')
            toLocation('/index')

            sessionStorage.clear()
        })        
    }
    //비로그인
    else{
        getById('navRight').innerHTML = 
        `<li class="nav-right-items" id="login"><a href="/login">Login</a></li>
        <li class="nav-right-items" id="signup"><a href="/signup">Sign up</a></li>`
    }

}

async function getAllPostLists() {

    const hotbody = getById('hotpost-list-body')
    const newbody = getById('newpost-list-body')

    let pageNo = 1
    let numofPages = 999
    let category = 'all'
    let cateId = ''
    let hotSort = 10
    let newSort = 10
    const getAllPost = await new getPostController().getPost(pageNo, numofPages, category)

    let totalCount = getAllPost.totalCount

    // 인기게시물
    // 인기는 조회수, 조회수 같을 경우 코멘트 수 높은 순 정렬
    // for(let i=0; i<hotSort; i++){
    //     console.log(getAllPost.boardList[i].views)
    // }

    // 최신게시물
    for(let i=0; i<newSort; i++) {
        //게시물 타이틀+코멘트, 조회수, 작성일, 날짜, 작성자
        const tr = document.createElement('tr')

        let tdBoardId = getAllPost.boardList[i].boardId

        let newcategory = document.createElement('td')
        let categoryName = getAllPost.boardList[i].category
        newcategory.textContent = categoryName
        console.log(categoryName)

        if(categoryName === 'category1') {
            cateId = 1
        }else if(categoryName === 'category2') {
            cateId = 2
        }else if(categoryName === 'category3') {
            cateId = 3
        }

        let newTitle = document.createElement('td')
        newTitle.setAttribute('id', 'newListTitle')

        let newTitleA = document.createElement('a')
        newTitleA.setAttribute('href', `/postcontents?boardId=`+tdBoardId+`&cateId=`+cateId)
        let newTitleAText = document.createTextNode(getAllPost.boardList[i].title+` (💭`+getAllPost.boardList[i].commentCount+`)`)

        let newViews = document.createElement('td')
        newViews.textContent = getAllPost.boardList[i].views

        let date = (JSON.stringify(getAllPost.boardList[i].date).replace(/\"/gi, "")).substring(0, 10)
        let newDate = document.createElement('td')
        newDate.textContent = date

        let newNickName = document.createElement('td')
        newNickName.textContent = getAllPost.boardList[i].nickName
        
        tr.appendChild(newcategory)
        tr.appendChild(newTitle)
        newTitle.appendChild(newTitleA)
        newTitleA.appendChild(newTitleAText)
        tr.appendChild(newViews)
        tr.appendChild(newDate)
        tr.appendChild(newNickName)
        newbody.appendChild(tr)
    }
    
}
export {
    setPage
}
