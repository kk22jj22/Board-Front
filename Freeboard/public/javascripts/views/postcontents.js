import { postContentsController } from "../controllers/postcontents.controller.js"
import { getCateId, setBold } from "../utils/utils.js"
import { setPage } from "./main.js"

window.onload = () => {

    getCateId()
    setBold()
    setPage()

    getPostContents()
}

async function getPostContents() {
    let boardId = 28
    let numOfPage = 20
    let pageNo = 1

    const getPostContents = await new postContentsController().getDetails(boardId, numOfPage, pageNo)
}