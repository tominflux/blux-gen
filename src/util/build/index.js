const path = require("path")
const { runParcelBuild } = require("../runParcel")
const { copyState } = require("../state")


const build = async (config, cnsl) => {
    //Perform Parcel Build
    cnsl.log("Building app...")
    const inPath = path.join("./", config.appPath)
    const outPath = "./public"
    await runParcelBuild(inPath, outPath)
    //Copy state.
    cnsl.log("Copying app state...")
    const stateInPath = path.join("./", config.statePath)
    const stateOutPath = "./public/__state"
    await copyState(stateInPath, stateOutPath)
    //
    cnsl.log("Build Complete.")
}

exports.build = build