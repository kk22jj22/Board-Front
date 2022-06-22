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

    const getPostLists = await new getPostController().getPost(pageNo, numsOfPages, category)
    const trlength = getPostLists.list.length
    const tdlength = Object.keys(getPostLists.list[0]).length
      
    for(let i=0; i<trlength; i++) {
        const body = getById('post-list-body')
        const tr = document.createElement('tr')

        let tdBoardId = document.createElement('td')
        tdBoardId.textContent = getPostLists.list[i].boardId

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

        tr.appendChild(tdBoardId)
        tr.appendChild(tdTitle)
        tr.appendChild(tdCommentCount)
        tr.appendChild(tdViews)
        tr.appendChild(tdDate)
        tr.appendChild(tdNickName)

        body.appendChild(tr)
    }


    
}