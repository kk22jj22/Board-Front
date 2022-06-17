import { getById, setBold } from '../utils/utils.js'
import { setPage } from './main.js'


window.onload = () => {
    setPage()
    setBold()

    getById('newpostBackBtn').addEventListener('click', goBack)
    getById('newpostSubmitBtn').addEventListener('click', newpostSubmit)

}

function goBack() {
    window.history.back()
}

async function newpostSubmit() {

}