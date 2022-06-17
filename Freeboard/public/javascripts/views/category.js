import { getById, isLogin, setBold } from '../utils/utils.js'
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
        window.location = '/login'
    } else {
        if(location.search === '?cateid=1') {
            window.location = '/newpost?cateid=1'
        } else if(location.search === '?cateid=2') {
            window.location = '/newpost?cateid=2'
        }
    }
}

function cateTitleSet() {
    if(location.search === '?cateid=1') {
        getById('cateTitle').textContent = 'Category1'
    } else if(location.search === '?cateid=2') {
        getById('cateTitle').textContent = 'Category2'
    } else if(location.search === '?cateid=3') {
        getById('cateTitle').textContent = 'Notice'       
        if(location.search === '?cateid=3') {
            getById('newPostBtn').style.display = 'none'
        }
    }
}