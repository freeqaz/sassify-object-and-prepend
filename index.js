'use strict';
var fs = require('fs');
var sassifyObject = require('sassify-object');

module.exports = sassVariablesUtilFn;

/**
 * Takes in a javascript object and converts it to SASS variables.
 * The variables are prepended to the top of the file at the inputPath
 * And written to the path of the outputFile.
 * Runs IO operations synchronously.
 * @param {object} variables Javascript object to Sassify.
 * @param {string} inputPath Path to file to read.
 * @param {string} outputPath Path to file to write.
 * @param {object} xfs Optional fake filesystem module to call writeFileSync on.
 * @returns {string} Output that was written to file.
 */
function sassVariablesUtilFn(variables, inputPath, outputPath, xfs) {
  xfs = xfs || fs;

  var inputFile = xfs.readFileSync(inputPath);

  var outputFile = sassifyObject(variables, inputFile);

  xfs.writeFileSync(outputPath, outputFile);

  return outputFile;
}
