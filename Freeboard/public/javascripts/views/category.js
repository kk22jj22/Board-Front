import { getById, getCurrentCategory, isLogin, setBold, toLocation } from '../utils/utils.js'
import { setPage } from './main.js'

window.onload = () => {
    cateTitleSet()
    getById('newPostBtn').addEventListener('click', newPost)
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
        getById('newPostBtn').style.display = 'none'
    }
}