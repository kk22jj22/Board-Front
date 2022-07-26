import { getPostController } from "../controllers/category.controller.js"
import { setBold, getById, isLogin, toLocation } from "../utils/utils.js"

window.onload = () => {
    setPage()
    setBold()
    setHotPosts()
    setNewPosts()
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

async function setHotPosts() {

    const hotbody = getById('hotpost-list-body')
    let pageNo = 1
    let numofPages = 999
    let category = 'all'
    let cateId = ''
    let hotSort = 15
    
    const getAllPost2 = await new getPostController().getPost(pageNo, numofPages, category)

    const allListSort = getAllPost2.boardList.sort(function(a,b) {
        return b.views - a.views
    })

    for(let i=0; i<hotSort; i++) {
        const tr = document.createElement('tr')

        let tdBoardId = allListSort[i].boardId

        let hotcategory = document.createElement('td')
        let categoryName = allListSort[i].category
        hotcategory.textContent = categoryName

        if(categoryName === '일상') {
            cateId = 1
        }else if(categoryName === '정보') {
            cateId = 2
        }else if(categoryName === '유머') {
            cateId = 3
        }

        let hotTitle = document.createElement('td')
        hotTitle.setAttribute('id', 'newListTitle')

        let hotTitleA = document.createElement('a')
        hotTitleA.setAttribute('href', `/postcontents?boardId=`+tdBoardId+`&cateId=`+cateId)
        let hotTitleAText = document.createTextNode(allListSort[i].title+` (💭`+allListSort[i].commentCount+`)`)

        let hotViews = document.createElement('td')
        hotViews.textContent = allListSort[i].views

        let date = (JSON.stringify(allListSort[i].date).replace(/\"/gi, "")).substring(0, 10)
        let hotDate = document.createElement('td')
        hotDate.textContent = date

        let hotNickName = document.createElement('td')
        hotNickName.textContent = allListSort[i].nickName
        
        tr.appendChild(hotcategory)
        tr.appendChild(hotTitle)
        hotTitle.appendChild(hotTitleA)
        hotTitleA.appendChild(hotTitleAText)
        tr.appendChild(hotViews)
        tr.appendChild(hotDate)
        tr.appendChild(hotNickName)
        hotbody.appendChild(tr)
    }
}

async function setNewPosts() {
    const newbody = getById('newpost-list-body')

    let pageNo = 1
    let numofPages = 999
    let category = 'all'
    let cateId = ''
    let newSort = 15
    const getAllPost = await new getPostController().getPost(pageNo, numofPages, category)

    for(let i=0; i<newSort; i++) {
        //게시물 타이틀+코멘트, 조회수, 작성일, 날짜, 작성자
        const tr = document.createElement('tr')

        let tdBoardId = getAllPost.boardList[i].boardId

        let newcategory = document.createElement('td')
        let categoryName = getAllPost.boardList[i].category
        newcategory.textContent = categoryName

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
