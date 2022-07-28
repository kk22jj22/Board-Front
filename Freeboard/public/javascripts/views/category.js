import { getPostController } from '../controllers/category.controller.js'
import { getById, getCateId, getCurrentCategory, getCurrentCategory2, isLogin, setBold, toLocation } from '../utils/utils.js'
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

    if(currentCategory === 'category1') {
        getById('cateTitle').textContent = '🤟'+'일상'
    } else if(currentCategory === 'category2') {
        getById('cateTitle').textContent = '🤟'+'정보'
    } else if(currentCategory === 'category3') {
        getById('cateTitle').textContent = '🤟'+'유머'
    }
}

async function getPostLists() {
    const body = getById('post-list-body')

    let params = new URLSearchParams(location.search)
    let pageNo = params.get('page')
    let numsOfPages = 20 // 한 페이지 내 불러올 게시글 수
    let category = getCurrentCategory()
    let category2 = getCurrentCategory2()
    let cateId = getCateId()

    const getPostLists = await new getPostController().getPost(pageNo, numsOfPages, category)
    const trlength = getPostLists.boardList.length

    let totalCount = getPostLists.totalCount
    let perPage = 5 
    let lastPage = getPostLists.lastPage 
    let pageGroup = totalCount / perPage 

    if(totalCount === 0) {
        getById('post-list-body-none').style.display = 'block';
        getById('post-list-body-none').innerHTML = '작성된 게시물이 없습니다'
        console.log('없지롱')
    }
    
    for(let i=0; i<trlength; i++) {
        if(getPostLists.boardList[i].category === category || category2) {    
            const tr = document.createElement('tr')

            let tdBoardId = getPostLists.boardList[i].boardId

            let tdBoardNo = document.createElement('td')
            
            let tdTitle = document.createElement('td')
            tdTitle.setAttribute('id', 'postTitle')

            let tdTitleA = document.createElement('a')
            tdTitleA.setAttribute('href', `/postcontents?boardId=`+tdBoardId+`&cateId=`+cateId)
            let tdTitleAText = document.createTextNode(getPostLists.boardList[i].title + ' (💭' + getPostLists.boardList[i].commentCount+')')
             
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
            tr.appendChild(tdViews)
            tr.appendChild(tdDate)
            tr.appendChild(tdNickName)   
            body.appendChild(tr)
        }
    }

    let rows = document.getElementById('post-list-body').getElementsByTagName('tr');
    let r = 0;

    for(let i=totalCount-((pageNo*numsOfPages)-numsOfPages); i>totalCount-(pageNo*numsOfPages); i--) {
        if (i < 0) {
            break
        } else if(rows[r] === undefined) {
            break
        } else {
            let cells = rows[r].getElementsByTagName('td')
            rows[r].cells[0].textContent = i
    
            r = r+1;
            console.log(i)
        }
    }
    paging(lastPage)
}


function paging(lastPage) {
    const cateId = getCateId()
    const pageArea = getById('pagination-area')
    let params = new URLSearchParams(location.search)
    let selectedPage = params.get('page')

    for(let i=1; i<=lastPage; i++) {
        let page = document.createElement('a')
        page.setAttribute('href', `/category?cateId=`+cateId+`&page=`+i)
        page.setAttribute('class', 'pagination')
        page.setAttribute('id', 'pagination'+i)
        page.textContent = i

        pageArea.appendChild(page)
    }
    
    if((lastPage > 5) && (lastPage % 5) === 0) {
        let nextPageBtn = document.createElement('a')
        nextPageBtn.setAttribute('id', 'nextPageBtn')
        nextPageBtn.textContent = '>'

        pageArea.appendChild(nextPageBtn)
    }

    for(let i=1; i<=lastPage; i++) {
        if(selectedPage == i) {
            getById('pagination'+i).style.background = '#911C99'
            getById('pagination'+i).style.color = 'white'
        }
    }
}
