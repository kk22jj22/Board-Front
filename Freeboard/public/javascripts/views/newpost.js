
import postRegisterController from '../controllers/newpost.controller.js'
import { getById, getCateId, getCurrentCategory, setBold, toLocation } from '../utils/utils.js'
import { setPage } from './main.js'


window.onload = () => {
    setPage()
    setBold()

    getById('newpostBackBtn').addEventListener('click', goBack)
    getById('newpostSubmitBtn').addEventListener('click', newpostRegister)
}

function goBack() {
    window.history.back()
}

async function newpostRegister() {
    const title = getById('newpostTitle')
    const content = getById('newpostContents')
    const category = getCurrentCategory()
    const categoryId = getCateId()
    let userId = sessionStorage.getItem('userId')

    const newpostRegister = await new postRegisterController().postRegister(title.value, content.value, userId, category)

    if(newpostRegister) {
        alert('게시물 등록 성공')

        toLocation('/category?cateId='+categoryId)
    } else {
        alert('제목, 내용을 입력해주세요!')
    }
}