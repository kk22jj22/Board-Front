import { getPostController } from '../controllers/category.controller.js'
import { getById, getCurrentCategory, isLogin, setBold, toLocation } from '../utils/utils.js'
import { setPage } from './main.js'

window.onload = () => {

    cateTitleSet()
    getById('newPostBtn').addEventListener('click', newPost)
    getPostLists()
    setPage()
    setBold()

}

function newPost() {
    if(!isLogin()) {
        alert('로그인 상태에서 게시물 등록이 가능합니다.')
         toLocation('/login')
    } else {
        if(location.search === '?cateid=1') {
            toLocation('/newpost?cateid=1')
        } else if(location.search === '?cateid=2') {
            toLocation('/newpost?cateid=2')
        } else if(location.search === '?cateid=3') {
            toLocation('/newpost?cateid=3')
        }
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
    let pageNo = 1
    let numsOfPages = 20
    let category = getCurrentCategory()
    let BoardNoCnt = 1

    const getPostLists = await new getPostController().getPost(pageNo, numsOfPages, category)
    const trlength = getPostLists.list.length
    // const tdlength = Object.keys(getPostLists.list[0]).length
    
    // 추가 작업 필요 : boardNo 수정, 페이지네이션, 작성일자 > 시간 자르기, 상세 이동
    for(let i=0; i<trlength; i++) {
        if(getPostLists.list[i].category === category) {
            const body = getById('post-list-body')
            const tr = document.createElement('tr')
    
            // BoardNoCnt = BoardNoCnt+1
            // if(BoardNoCnt>=2) {
            //     for(let j=BoardNoCnt; j>1; j--) {

            //     }               
            // }

            let tdBoardNo = document.createElement('td')
            tdBoardNo.textContent = BoardNoCnt

            BoardNoCnt = BoardNoCnt+1
    
            let tdTitle = document.createElement('td')
            tdTitle.textContent = getPostLists.list[i].title 
    
            let tdCommentCount = document.createElement('td')
            tdCommentCount.textContent = getPostLists.list[i].commentCount 
            
            let tdViews = document.createElement('td')
            tdViews.textContent = getPostLists.list[i].views
    
            let tdDate = document.createElement('td')
            tdDate.textContent = getPostLists.list[i].date
    
            let tdNickName = document.createElement('td')
            tdNickName.textContent = getPostLists.list[i].nickName
    
            tr.appendChild(tdBoardNo)
            tr.appendChild(tdTitle)
            tr.appendChild(tdCommentCount)
            tr.appendChild(tdViews)
            tr.appendChild(tdDate)
            tr.appendChild(tdNickName)   
            body.appendChild(tr)
        }
    }
}