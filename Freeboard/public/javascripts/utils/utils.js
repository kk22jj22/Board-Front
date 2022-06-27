function setBold(){
    if(location.search === "?cateid=1") {
        document.getElementById('cate1').style.fontWeight = 'bold';
    }else if(location.search === "?cateid=2") {
        document.getElementById('cate2').style.fontWeight = 'bold';
    }else if(location.search === "?cateid=3") {
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
    let urlParams = document.location.href.split("=").reverse()[0]
    let category = '';

    switch(urlParams) {
        case '1': {
            category = 'category1'
            break
        }
        case '2': {
            category = 'category2'
            break
        }
        case '3': {
            category = 'category3'
            break
        }
        default: {
            break
        }     
    }

    return category
}

function getCateId() {
    let urlParams = document.location.href.split("=").reverse()[0]
    let categoryId = '';

    switch(urlParams) {
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

export{
    setBold,
    setTextColor,
    setText,
    toLocation,
    getById,
    getCurrentCategory,
    getCateId,
    isLogin
}