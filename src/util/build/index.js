const git = require("nodegit")
const path = require("path")
const { runParcelBuild } = require("../runParcel")
const { runCmd } = require("../runCmd")
const { installDependencies } = require("../dependencies")

/*
const bluxAppUrl = (
    "https://github.com/tominflux/blux-app"
)


const dependencies = [
    "blux-app"
]

const bluxAppDir = (
    "./node_modules/blux-app"
)
*/


const build = async (config, cnsl) => {
    /*
    //Clone Blux App
    await git.Clone(
        bluxAppUrl,
        bluxAppDir
    )
    */
    //Install Dependencies
    /*
    await runCmd(`cd ${bluxAppDir}`, cnsl)
    await runCmd("npm install", cnsl)
    await runCmd("cd ../", cnsl)
    */
    //await installDependencies(dependencies, cnsl)
    //Perform Parcel Build
    const inPath = path.join(
        "./", config.appPath
    )
    const outPath = "./public"
    await runParcelBuild(
        inPath, outPath, cnsl
    )
    //
    cnsl.log("Build Complete.")
}

exports.build = build