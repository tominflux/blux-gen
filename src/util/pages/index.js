
export const discoverPages = async (onlyPublic=false, topDirectory, relativeDirectory="") => {
    const jsonFilter = /\.json$/
    const absDirectory = path.join(topDirectory, relativeDirectory)
    let accumulatedFileIds = []
    const immediateFilePaths = await fs.readdir(absDirectory)
    for (const fileName of immediateFilePaths) {
        const filePath = path.join(absDirectory, fileName)
        const stat = await fs.lstat(filePath)
        if (stat.isDirectory()) {
            const nextDirectory = path.join(relativeDirectory, fileName)
            const nextPageFilePaths = await discoverPages(onlyPublic, nextDirectory)
            accumulatedFileIds = [
                ...accumulatedFileIds,
                ...nextPageFilePaths
            ]
        } else if (jsonFilter.test(filePath)) {
            const relativeFilePath = path.join(relativeDirectory, fileName)
            const fileId = relativeFilePath.replace(".json", "")
            if (onlyPublic) {
                const pageData = await fs.readFile(filePath)
                const pageJson = pageData.toString()
                const page = JSON.parse(pageJson)
                const isPublic = (!page.isDraft)
                if (isPublic) {
                    accumulatedFileIds.push(fileId)
                }
            } else {
                accumulatedFileIds.push(fileId)
            }
        }
    }
    return accumulatedFileIds
}