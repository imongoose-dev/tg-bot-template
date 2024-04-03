const fileSystem = require('fs');
const pathModule = require('path');

function pathHandlers(directoryPath) {
    const filesInDirectory = fileSystem.readdirSync(directoryPath);
    const jsFilesArray = [];

    filesInDirectory.forEach((file) => {
        const filePath = pathModule.join(directoryPath, file);
        const fileStats = fileSystem.statSync(filePath);

        if (fileStats.isDirectory()) {
            jsFilesArray.push(...pathHandlers(filePath));
        } else if (file.endsWith('.js')) {
            jsFilesArray.push(filePath);
        }
    });

    return jsFilesArray;
}

module.exports = pathHandlers;