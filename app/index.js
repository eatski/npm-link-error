const lib = require("sample-library")
const format = require("string-format")
const colors = require("colors")
lib();
console.log(format("Message: {0}",colors.bgMagenta("App init")))
console.log(format("Message: {0}",colors.bgBlue ("SUCCESS!!")))
