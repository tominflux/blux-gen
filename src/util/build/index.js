const git = require("nodegit")

const bluxAppUrl = (
    "https://github.com/tominflux/blux-app"
)

const bluxAppDir = (
    "./.blux-app"
)

const build = async (config, log) => {
    //Clone Blux App
    await git.Clone(
        bluxAppUrl,
        bluxAppDir
    )
    //
    log("Build Succeeded.")
}

exports.build = build