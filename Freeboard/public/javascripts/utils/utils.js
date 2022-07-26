function setBold(){
    let params = new URLSearchParams(location.search)
    let paramsCateId = params.get('cateId')

    if(paramsCateId === "1") {
        document.getElementById('cate1').style.fontWeight = 'bold';
    }else if(paramsCateId === "2") {
        document.getElementById('cate2').style.fontWeight = 'bold';
    }else if(paramsCateId === "3") {
        document.getElementById('cate3').style.fontWeight = 'bold';
    }
    
    else if(location.pathname === "/login") {
        document.getElementById('login').style.fontWeight = 'bold';
    }else if(location.pathname === "/signup") {
        document.getElementById('signup').style.fontWeight = 'bold';
    }
}

function getById(id){
    return document.getElementById(id)
}

function isLogin(){
    return (sessionStorage.getItem("userId") != null)
}

function toLocation(url){
    window.location = url
}

function setTextColor(id, color) {
    return document.getElementById(id).style.color = color;
}

function setText(id, text) {
    return document.getElementById(id).textContent = text;
}

function getCurrentCategory() {
    let params = new URLSearchParams(location.search)
    let paramsCateId = params.get('cateId')

    let category = '';

    switch(paramsCateId) {
        case '1': {
            category = '일상'
            break
        }
        case '2': {
            category = '정보'
            break
        }
        case '3': {
            category = '유머'
            break
        }
        default: {
            break
        }     
    }

    return category
}

function getCurrentCategory2() {
    let params = new URLSearchParams(location.search)
    let paramsCateId = params.get('cateId')

    let category = '';

    switch(paramsCateId) {
        case '1': {
            category = 'Category1'
            break
        }
        case '2': {
            category = 'Category2'
            break
        }
        case '3': {
            category = 'Category3'
            break
        }
        default: {
            break
        }     
    }

    return category
}
function getCateId() {
    let params = new URLSearchParams(location.search)
    let paramsCateId = params.get('cateId')

    let categoryId = '';

    switch(paramsCateId) {
        case '1': {
            categoryId = '1'
            break
        }
        case '2': {
            categoryId = '2'
            break
        }
        case '3': {
            categoryId = '3'
            break
        }
        default: {
            break
        }     
    }
    return categoryId
}

function getBoardId() {
    let params = new URLSearchParams(location.search)
    let paramsBoardId = params.get('boardId')

    return paramsBoardId
}

export{
    setBold,
    setTextColor,
    setText,
    toLocation,
    getById,
    getCurrentCategory,
    getCurrentCategory2,
    getCateId,
    getBoardId,
    isLogin
}