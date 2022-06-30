const categoryList = [``, `1`, `2`, `3`]


function onClickCategoryList(){

    const items = document.querySelectorAll('.nav-left-items')

    // console.log(items);

    for(let i=0;i<items.length;i++){
        const item = items[i]

        if(i===0) {
            item.addEventListener('click',()=>{
                location.href = '/index'
            })
        }else {
            item.addEventListener('click',()=>{
                location.href = '/category?cateid=' + categoryList[i]
            })
        }
    }

}
onClickCategoryList()