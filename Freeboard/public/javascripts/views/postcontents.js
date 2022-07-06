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

    const contentsWriter = getById('post-writer')
    contentsWriter.textContent = '작성자 '+getPostDetails.nickName

    const contentsDate = getById('post-date')
    let date = (JSON.stringify(getPostDetails.date).replace(/\"/gi, "")).substring(0, 10)
    contentsDate.textContent = '작성일자 '+date

    // 코멘트 리스트 불러오기
    // 코멘트 없을경우(commentList.length = 0이면, '작성된 코멘트가 없습니다', 있다면 코멘트 리스트 노출)  
    if(getPostDetails.commentList.length === 0) {
        getById('commentNone').style.display = 'flex';
    } else {
        const body = getById('comment-list-body')

        for(let i=0; i<getPostDetails.commentList.length; i++) {
            const tr = document.createElement('tr')

            let tdNickName = document.createElement('td')
            tdNickName.textContent = getPostDetails.commentList[i].nickName
            tdNickName.setAttribute('id', 'tdNickName')

            let tdDetails = document.createElement('td')
            tdDetails.textContent = getPostDetails.commentList[i].comment

            let date = (JSON.stringify(getPostDetails.commentList[i].date).replace(/\"/gi, "")).substring(0, 10)
            let tdDate = document.createElement('td')
            tdDate.textContent = date
            tdDate.setAttribute('id', 'tdDate')

            tr.appendChild(tdNickName)
            tr.appendChild(tdDetails)
            tr.appendChild(tdDate)
            body.appendChild(tr)
        }
        
    }

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
        alert('코멘트를 등록했습니다!')
        history.go(0)
        // refreshComment()
        // 코멘트 리스트를 새로 불러오려면 게시물 상세를 다시 불러와야되는데.. 그럼 게시물 view가 증가함.
    }
}

function refreshComment(){
    $("#postcontents-comment-area").load(window.location.href +" #postcontents-comment-area");
  }