




const runCmd = (cmd) => (
    new Promise((resolve, reject) => {
        const callback = (error, stdout, stderr) => {
            if (stdout) console.log(stdout)
            if (stderr) console.log(stderr)
            if (error) console.error(error)
        }
        const parcelProcess = child.exec(
            cmd, callback
        )
        parcelProcess.addListener("error", reject)
        parcelProcess.addListener("exit", resolve)
    })
)

exports.runCmd = runCmd