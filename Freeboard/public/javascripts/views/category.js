import { getPostController } from '../controllers/category.controller.js'
import { getById, getCateId, getCurrentCategory, isLogin, setBold, toLocation } from '../utils/utils.js'
import { setPage } from './main.js'

window.onload = () => {

    cateTitleSet()
    getById('newPostBtn').addEventListener('click', newPost)
    getPostLists()
    setPage()
    setBold()
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
    let cateId = getCateId()
    let boardNoCnt = 0
    let cntArr = []

    const getPostLists = await new getPostController().getPost(pageNo, numsOfPages, category)
    const trlength = getPostLists.boardList.length
    const boardId = getPostLists.boardList[0].boardId

    // const tdlength = Object.keys(getPostLists.list[0]).length

    // 추가 작업 필요 : 페이지네이션, 컬럼 별 width
    for(let i=0; i<trlength; i++) {
        if(getPostLists.boardList[i].category === category) {
            
            const tr = document.createElement('tr')

            boardNoCnt = boardNoCnt+1
            cntArr.push(boardNoCnt)

            let tdBoardId = document.createElement('td')
            tdBoardId = getPostLists.boardList[i].boardId

            let tdBoardNo = document.createElement('td')
            
            let tdTitle = document.createElement('td')
            tdTitle.setAttribute('id', 'postTitle')

            let tdTitleA = document.createElement('a')
            tdTitleA.setAttribute('href', `/postcontents?boardId=`+tdBoardId)
            let tdTitleAText = document.createTextNode(getPostLists.boardList[i].title)
   
            let tdCommentCount = document.createElement('td')
            tdCommentCount.textContent = getPostLists.boardList[i].commentCount 
            
            let tdViews = document.createElement('td')
            tdViews.textContent = getPostLists.boardList[i].views
    
            let date = (JSON.stringify(getPostLists.boardList[i].date).replace(/\"/gi, "")).substring(0, 10)
            let tdDate = document.createElement('td')
            tdDate.textContent = date           

            let tdNickName = document.createElement('td')
            tdNickName.textContent = getPostLists.boardList[i].nickName

            console.log(tdBoardId)
    
            tr.appendChild(tdBoardNo)
            tr.appendChild(tdTitle)
            tdTitle.appendChild(tdTitleA)
            tdTitleA.appendChild(tdTitleAText)
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
