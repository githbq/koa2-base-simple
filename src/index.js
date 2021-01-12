const appBootstrap = require('./app')

const run = async () => {
    await appBootstrap.start()
}

run()