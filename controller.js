const fs = require('fs')

function addMapping(router, mapping) {
    for (let url in mapping) {
        if(mapping.hasOwnProperty(url)){
            if (url.startsWith('GET ')) {
                let path = url.substring(4)
                router.get(path, mapping[url])
                console.log(`register URL mapping: GET ${path}`)
            } else if (url.startsWith('POST ')) {
                let path = url.substring(5)
                router.post(path, mapping[url])
                console.log(`register URL mapping: POST ${path}`)
            } else {
                console.log(`invalid URL: ${url}`)
            }
        }
    }
}

function addControllers(router) {
    let files = fs.readdirSync(__dirname + '/controllers')
    let js_files = files.filter((f) => {
        return f.endsWith('.js')
    })

    for (let f of js_files) {
        console.log(`process controller: ${f}...`)
        let mapping = require(__dirname + '/controllers/' + f)
        addMapping(router, mapping)
    }
}

module.exports = function() {
    let router = require('koa-router')()
    addControllers(router)
    return router.routes()
}
