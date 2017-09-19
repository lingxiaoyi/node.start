/*const Koa = require('koa')

const bodyParser = require('koa-bodyparser')

const controller = require('./controller')

const templating = require('./templating')

const app = new Koa()

const isProduction = process.env.NODE_ENV === 'production'

// log request URL:
app.use(async (ctx, next) => {
    let start = new Date().getTime()
    let execTime
    await next()
    execTime = new Date().getTime() - start
    ctx.response.set('X-Response-Time', `${execTime}ms`)
})

// static file support:
if (!isProduction) {
    let staticFiles = require('./static-files')
    app.use(staticFiles('/static'))
}

// parse request body:
app.use(bodyParser())

// add nunjucks as view:
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}))

// add controller:
app.use(controller())


app.listen(3004)
console.log('app started at port 3004...')*/

// app.js

/*const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log(`${ctx.request.method} ${ctx.request.url}: ${ms}ms`);
    ctx.response.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
    var name = ctx.request.query.name || 'world';
    ctx.response.type = 'text/html';
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

module.exports = app;*/

// 导入WebSocket模块:
const WebSocket = require('ws')

// 引用Server类:
const WebSocketServer = WebSocket.Server

// 实例化:
const wss = new WebSocketServer({
    port: 3009
})

wss.on('connection', function(ws) {
    console.log(`[SERVER] connection()`)
    ws.on('message', function(message) {
        console.log(`[SERVER] Received: ${message}`)
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`)
            }
        })
    })
})



















