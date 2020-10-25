const express = require("express")
const parcel = require("parcel-bundler")
const path = require("path")

const BUNDLER_OPTIONS = {
    outDir: './.dev',
    sourceMaps: true
}

const dev = async (config, cnsl) => {
    // Initialise express app.
    const app = express()
    const port = parseInt(process.env.PORT) || 3000
    // Initialise bundler.
    const srcPath = path.join("./", config.appPath)
    const bundler = new parcel(srcPath, BUNDLER_OPTIONS)
    // Config express app.
    const statePath = path.join("./", config.statePath)
    app.use('/__state', express.static(statePath))
    app.use(bundler.middleware())
    // Run express app.
    app.listen(port, () => cnsl.log(
        `Development server listening on port ${port}.`
    ))
}

exports.dev = dev
