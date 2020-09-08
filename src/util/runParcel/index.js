const { runCmd } = require("../runCmd")

const runParcelBuild = async (inPath, outPath, cnsl) => {
    const command = (
        `npx parcel build ${inPath} ` +
        `-d ${outPath}`
    )
    //
    await runCmd(command, cnsl)
}

exports.runParcelBuild = runParcelBuild