
const { Command, flags } = require('@oclif/command')
const { getConfig } = require("../util/config")
const { build } = require('../util/build')
const { getCnsl } = require('../util/cnsl')

class BuildCmd extends Command {
    async run() {
        //Process Flags
        const { flags } = this.parse(BuildCmd)
        //const configPath = flags.config || './blux-config.json'
        const configPath = "./blux-config.json"
        //Get config.
        const config = await getConfig(configPath)
        //Perform build
        build(config)
    }
}

BuildCmd.description = `Build static site.
...
 - Clones blux-app repository.
 - Looks for app config.
 - Performs parcel build.
`

BuildCmd.flags = {
    /*
    config: flags.string({ 
        char: 'c', 
        description: 'Path to config.' 
    })
    */
}

module.exports = BuildCmd
