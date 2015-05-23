'use strict';
var fs = require('fs');
var sassVariables = require('sass-variables');

module.exports = sassVariablesUtilFn;

/**
 * Takes in a javascript object and converts it to SASS variables.
 * The variables are prepended to the top of the file at the inputPath
 * And written to the path of the outputFile.
 * Runs IO operations synchronously.
 * @param {object} variables Javascript object to Sassify.
 * @param {string} inputPath Path to file to read.
 * @param {string} outputPath Path to file to write.
 * @returns {string} Output that was written to file.
 */
function sassVariablesUtilFn(variables, inputPath, outputPath) {
  var inputFile = fs.readFileSync(inputPath);

  var outputFile = sassVariables(variables, inputFile);

  fs.writeFileSync(outputPath, outputFile);

  return outputFile;
}
