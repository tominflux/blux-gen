const { runCmd } = require("../runCmd")


const installDependencies = async (dependencies, cnsl) => {
    for (const dependency of dependencies) {
        await runCmd(
            `npm install ${dependency} --save`,
            cnsl
        )
    }
}

exports.installDependencies = installDependencies