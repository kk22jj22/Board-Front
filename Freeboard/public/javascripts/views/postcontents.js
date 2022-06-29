import { getDetailsController } from "../controllers/postcontents.controller.js"
import { getCateId, setBold } from "../utils/utils.js"
import { setPage } from "./main.js"
// import url from 'url';

window.onload = () => {

    getCateId()
    setBold()
    setPage()
    getPostDetails()

    // let urlStr = window.location.href
    // const u1 = url.parse(urlStr)
    // console.log(u1)
}


async function getPostDetails() {
    const boardId = 28
    const numOfPage = 20
    const pageNo = 1

    const getPostDetails = await new getDetailsController().getDetails(boardId, numOfPage, pageNo)
}