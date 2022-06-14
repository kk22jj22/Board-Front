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

export{
    setBold,
    setTextColor,
    setText,
    toLocation,
    getById,
    isLogin
}