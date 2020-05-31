const colors = require("colors")
const format = require("string-format")
console.log(format("Message: {0}",colors.bgCyan("Library init")))

module.exports = () => {
    console.log(format("Message: {0}",colors.bgGreen("Library call")))
}
