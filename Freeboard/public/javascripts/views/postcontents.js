import { registerCommentController } from "../controllers/comment.controller.js"
import { getDetailsController } from "../controllers/postcontents.controller.js"
import { getBoardId, getById, getCateId, isLogin, setBold, toLocation } from "../utils/utils.js"
import { setPage } from "./main.js"

window.onload = () => {
    getCateId()
    setBold()
    setPage()
    getPostDetails()
    getById('newCommentBtn').addEventListener('click', newComments)
}


async function getPostDetails() {
    let boardId = getBoardId()
    let numOfPage = 20
    let pageNo = 1

    const getPostDetails = await new getDetailsController().getDetails(boardId, numOfPage, pageNo)
   
    const contentsTitle = getById('postcontents-title')
    contentsTitle.textContent = getPostDetails.title

    const contentsDetail = getById('postcontents-detail')
    contentsDetail.textContent = getPostDetails.content

    // 작성자, 작성일 추가
    const contentsWriter = getById('post-writer')
    contentsWriter.textContent = '작성자 '+getPostDetails.nickName

    const contentsDate = getById('post-date')
    let date = (JSON.stringify(getPostDetails.date).replace(/\"/gi, "")).substring(0, 10)
    contentsDate.textContent = '작성일자 '+date


    // 코멘트 등록 시 내용이 undefined
    // 코멘트 없을경우(commentList.length = 0이면, '작성된 코멘트가 없습니다', 있다면 코멘트 리스트 노출)

    // 조회수
    // 스크롤 스타일 필요
}

async function newComments() {
    let boardId = getBoardId()
    let userId = sessionStorage.getItem('userId')
    let comment = getById('newCommentInput').value
    let categoryId = getCateId()

    console.log(userId)

    if(!isLogin()) {
        alert('로그인 후 코멘트 등록이 가능합니다')
        toLocation('/login?cateId='+categoryId)
    } else if(comment === '') {
        alert('코멘트 내용을 입력해주세요!')
    } else {
        const registerNewComment = await new registerCommentController().registerComment(boardId, userId, comment)
    }
}