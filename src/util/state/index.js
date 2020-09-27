const fs = require("fs-extra")


const copyState = async (from, to) => {
    await fs.copy(from, to)
}

exports.copyState = copyState