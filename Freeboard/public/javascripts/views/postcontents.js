import { getDetailsController } from "../controllers/postcontents.controller.js"
import { getBoardId, getById, getCateId, setBold } from "../utils/utils.js"
import { setPage } from "./main.js"

window.onload = () => {
    getCateId()
    setBold()
    setPage()
    getPostDetails()
}


async function getPostDetails() {
    const boardId = getBoardId()
    const numOfPage = 20
    const pageNo = 1

    const getPostDetails = await new getDetailsController().getDetails(boardId, numOfPage, pageNo)
   
    const contentsTitle = getById('postcontents-title')
    contentsTitle.textContent = getPostDetails.title

    const contentsDetail = getById('postcontents-detail')
    contentsDetail.textContent = getPostDetails.content

    // 코멘트 없을경우(commentList.length = 0이면, '작성된 코멘트가 없습니다', 있다면 코멘트 리스트 노출)

    // 줄바꿈 \n처리 필요
}

async function newComments() {

}