//button
const catenewpost = document.getElementById('new-post');

//td
const postcontents = document.getElementById('post-contents');


window.onload = () => {
    catenewpost.addEventListener("click", newPost);
}

function newPost() {
    fetch('http://54.213.3.105:3000/test', {
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        const testarea = document.getElementById('testarea');
        const t1 = document.createElement('div');
        testarea.appendChild(t1);
        // t1.textContent = data.test3.test1;

        // var parsejson = JSON.parse(JSON.stringify(data));
        // console.log(typeof parsejson);
        // console.log(parsejson[0]);

        // 생각해보니까 tr 한줄에 data.title.[0], data.detail.[1] 받아오고, 이런식으로 해야할듯? data.length까지로 받아오고.

        // td.textContent = data.test1;
        // for(let i=0; i<data.length; i++){
        // const td = document.createElement('td');
        //     for(let j=0; j<data.length; j++) {
        //         const tr = document.createElement('tr');
        //         tr.appendChild(td);
        //         td.textContent = data.test
        //     }
        //     
        //      postcontents.appendChild(tr);
        // }
    });
        
}