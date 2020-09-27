const fs = require("fs-extra")

const defaultConfig = {
    appPath: "./src/index.html",
    statePath: "./state",
}

const getConfigExists = async (configPath) => {
    try {
        await fs.access(configPath)
    } catch (err) {
        return false
    }
    return true
}

const getExternalConfig = async (configPath) => (
    (await fs.readFile(configPath)).toString()
)

const getConfig = async (configPath) => {
    const configExists = await getConfigExists()
    const externalConfig = (
        configExists ?
            await getExternalConfig(configPath) : {}
    )
    const compositeConfig = {
        ...defaultConfig,
        ...externalConfig
    }
    return compositeConfig
}

exports.getConfig = getConfig