const fs = require("fs-extra")

const defaultConfig = {
    appPath: "src/index.html"
}

const getConfigExists = async (configPath) => (
    await fs.exists(configPath)
)

const getExternalConfig = async (configPath) => (
    ( await fs.readFile(configPath) )
    .toString()
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