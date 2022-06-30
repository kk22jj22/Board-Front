import { getDetailsController } from "../controllers/postcontents.controller.js"
import { getCateId, setBold } from "../utils/utils.js"
import { setPage } from "./main.js"
// import url from 'url';

window.onload = () => {

    getCateId()
    //setBold 안붙는거 수정 필요.
    setBold()
    setPage()
    getPostDetails()

}


async function getPostDetails() {
    const boardId = 28
    const numOfPage = 20
    const pageNo = 1

    const getPostDetails = await new getDetailsController().getDetails(boardId, numOfPage, pageNo)
}