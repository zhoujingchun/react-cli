const jsonServer = require('json-server')
// const ip = require('ip').address()
const ip = '0.0.0.0'
const port = 3003
const generator = require('./generator')
const rewriterJSON = require('./rewriterJSON')
const server = jsonServer.create()
// const router = jsonServer.router(path.join(__dirname, 'db.json'))
const router = jsonServer.router(generator())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(jsonServer.rewriter(rewriterJSON))


        server.use("/api", (req, res, next) => {
            router({ ...req, method: 'get' }, res, next)
        })


server.listen(
    {
        host: ip,
        port,
    },
    () => {
        console.log(`JSON Server is running in http://${ip}:${port}`)
    },
)
