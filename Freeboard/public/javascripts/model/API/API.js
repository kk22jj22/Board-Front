const baseUrl = 'http://54.213.3.105:3000'

export default function sendRequest(url, method, body){
    return new Promise(resolve =>{
        const myHeaders = {'Content-Type': 'application/json'}

        const myInit = {method: method, body: JSON.stringify(body), headers: myHeaders};

        if(method === 'post') {
            // console.log("requestBody \n", body);

            url = baseUrl + url + getQueryString(body)
    
            console.log(body)
            fetch(url, myInit)
            .then(response => {
                resolve(response.json())
            }).catch(error => {
                resolve(false)
                console.error(error)
            });
        }else if(method === 'get') {
            url = baseUrl + url + getQueryString(body)
            // console.log('requestBody \n', body)

            fetch(url)
            .then(response => {
                resolve(response.json())
            }).catch(error => {
                resolve(false)
                console.error(error)
            })
        }

    })
}

function getQueryString(body){
    
    let qs = `?`

    for(const key in body){
        if(qs !== `?`) qs += `&`
        qs += `${key}=${body[key]}`
        // console.log('qs = '+qs)
        // console.log('key = '+key)
    }
    return qs
}