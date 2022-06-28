import { getPostController } from '../controllers/category.controller.js'
import { getById, getCateId, getCurrentCategory, isLogin, setBold, toLocation } from '../utils/utils.js'
import { setPage } from './main.js'

window.onload = () => {

    cateTitleSet()
    getById('newPostBtn').addEventListener('click', newPost)
    getPostLists()
    setPage()
    setBold()

    // 게시물 제목 클릭 시 게시물 상세로 이동 추가
    // getById('postTitle').addEventListener('click', goToContents)
}

function newPost() {
    let categoryId = ''

    if(!isLogin()) {
        alert('로그인 상태에서 게시물 등록이 가능합니다.')
        toLocation('/login')
    } else {
        if(location.search === '?cateid=1') {
            categoryId = 1
        } else if(location.search === '?cateid=2') {
            categoryId = 2
        } else if(location.search === '?cateid=3') {
            categoryId = 3
        }
        toLocation('/newpost?cateid='+categoryId)
    }
}

function cateTitleSet() {
    let currentCategory = getCurrentCategory()
    getById('cateTitle').textContent = currentCategory

    if(currentCategory === 'category3') {
        getById('cateTitle').textContent = 'Notice'
    }
}

async function getPostLists() {
    const table = getById('post-list-table')
    const body = getById('post-list-body')

    let pageNo = 1
    let numsOfPages = 20
    let category = getCurrentCategory()
    let boardNoCnt = 0
    let cntArr = []

    const getPostLists = await new getPostController().getPost(pageNo, numsOfPages, category)
    const trlength = getPostLists.boardList.length
    let boardId = ''
    // const tdlength = Object.keys(getPostLists.list[0]).length

    // 추가 작업 필요 : 페이지네이션, 컬럼 별 width
    // 현재 이슈 사항 : 
    // 1. 포스트타이틀 클릭 시 이벤트 작동되어야 하는데, 페이지 호출 시 작동되어버림
    // 2. 클릭한 타이틀의 boardId를 어떻게 지정해서 넘겨줄 수 있을까..? 게시글과 boardid 매칭해서 넘겨줘야 함.

    for(let i=0; i<trlength; i++) {
        if(getPostLists.boardList[i].category === category) {

            const tr = document.createElement('tr')
            boardNoCnt = boardNoCnt+1
            cntArr.push(boardNoCnt)

            let tdboardId = document.createElement('td')
            tdboardId.textContent = getPostLists.boardList[i].boardId
            console.log(tdboardId)

            let tdBoardNo = document.createElement('td')
            
            let tdTitle = document.createElement('td')
            tdTitle.setAttribute('id', 'postTitle')
            tdTitle.textContent = getPostLists.boardList[i].title 
            tdTitle.addEventListener('click', goToContents)

            let tdCommentCount = document.createElement('td')
            tdCommentCount.textContent = getPostLists.boardList[i].commentCount 
            
            let tdViews = document.createElement('td')
            tdViews.textContent = getPostLists.boardList[i].views
    
            let date = (JSON.stringify(getPostLists.boardList[i].date).replace(/\"/gi, "")).substring(0, 10)
            let tdDate = document.createElement('td')
            tdDate.textContent = date           

            let tdNickName = document.createElement('td')
            tdNickName.textContent = getPostLists.boardList[i].nickName

            tr.appendChild(tdBoardNo)
            tr.appendChild(tdTitle)
            tr.appendChild(tdCommentCount)
            tr.appendChild(tdViews)
            tr.appendChild(tdDate)
            tr.appendChild(tdNickName)   
            body.appendChild(tr)
        }
    }

    let rows = document.getElementById('post-list-body').getElementsByTagName('tr');
    const reverse = cntArr.reverse()

    for(let i=0; i<rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td')

        rows[i].cells[0].textContent = reverse[i]
    }
}

function goToContents(event){
    event.preventDefault()
    let cateId = getCateId()
    
    console.log(event)
    console.log(event.target)
    // toLocation('/postcontents?cateid='+cateId+'&boardId='+boardId)
}
