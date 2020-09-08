

const getCnsl = (command) => {
    const log = (msg) => command.log(msg)
    const error = (msg) => command.error(msg)
    return {
        log, 
        error
    }
}

exports.getCnsl = getCnsl