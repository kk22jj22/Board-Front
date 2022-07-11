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
    let categoryId = getCateId()

    if(!isLogin()) {
        alert('로그인 상태에서 게시물 등록이 가능합니다.')
        toLocation('/login?cateId='+categoryId)
    } else {
        toLocation('/newpost?cateId='+categoryId)
    }
}

function cateTitleSet() {
    let currentCategory = getCurrentCategory()
    getById('cateTitle').textContent = currentCategory
}

async function getPostLists() {
    const table = getById('post-list-table')
    const body = getById('post-list-body')

    let params = new URLSearchParams(location.search)
    let pageNo = params.get('page')
    let numsOfPages = 20 // 한 페이지 내 불러올 게시글 수
    let category = getCurrentCategory()
    let cateId = getCateId()
    let boardNoCnt = 0
    let cntArr = []

    const getPostLists = await new getPostController().getPost(pageNo, numsOfPages, category)
    const trlength = getPostLists.boardList.length
    const boardId = getPostLists.boardList[0].boardId

    let totalCount = getPostLists.totalCount
    let perPage = 5 
    let lastPage = getPostLists.lastPage 
    let pageGroup = totalCount / perPage 

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
            tdTitleA.setAttribute('href', `/postcontents?boardId=`+tdBoardId+`&cateId=`+cateId)
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
    paging(pageNo,lastPage)
}


function paging(pageNo, lastPage, event) {
    const cateId = getCateId()
    const pageArea = getById('pagination-area')

    // 이전버튼, 다음버튼 추가 필요
    for(let i=1; i<=lastPage; i++) {

        let page = document.createElement('a')
        page.setAttribute('href', `/category?cateId=`+cateId+`&page=`+i)
        page.setAttribute('id', 'pagination')
        page.textContent = i

        pageArea.appendChild(page)
    }
    
    // 다음버튼
    if(lastPage > 5) {
        let nextPageBtn = document.createElement('a')
        nextPageBtn.setAttribute('id', 'nextPageBtn')
        nextPageBtn.textContent = '>'

        pageArea.appendChild(nextPageBtn)
    }

}
