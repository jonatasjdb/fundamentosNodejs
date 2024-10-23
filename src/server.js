import http from 'http'

const users = [];
const server = http.createServer((req,res) => {
    const {url, method} = req;

    if(method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-type','application/json')
        .end(JSON.stringify(users))
    }
    if(method == 'POST' && url == '/users'){
        users.push({
            id: 1,
            name: 'JD',
            email: 'jd@yahoo.com',
            age: '28'
        })

        return res.end('Cadastro realizado!')
    }
})

server.listen(3333)