const { runCmd } = require("../runCmd")

const runParcelBuild = async (inPath, outPath) => {
    const command = (
        `npx parcel build ${inPath} ` +
        `-d ${outPath}`
    )
    //
    await runCmd(command)
}

exports.runParcelBuild = runParcelBuild