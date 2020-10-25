const { Command, flags } = require('@oclif/command')
const { getConfig } = require("../util/config")
const { dev } = require('../util/dev')
const { getCnsl } = require('../util/cnsl')

class DevCmd extends Command {
    async run() {
        //Process Flags
        const { flags } = this.parse(DevCmd)
        const configPath = flags.config ?? "./blux-config.json"
        //Get config.
        const config = await getConfig(configPath)
        //Create cnsl fns.
        const cnsl = getCnsl(this)
        //Perform build
        dev(config, cnsl)
    }
}

DevCmd.description = `Build static site.
...
 - Clones blux-app repository.
 - Looks for app config.
 - Performs parcel build.
`

DevCmd.flags = {
    /*
    config: flags.string({ 
        char: 'c', 
        description: 'Path to config.' 
    })
    */
}

module.exports = DevCmd
