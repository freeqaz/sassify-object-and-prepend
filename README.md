# sass-variables-util

A small wrapper around sass-variables for use during builds.

## Example

```javascript
// Input file path to be read from.
// Example Sass input file might look like:
/*
.whatever { color: $blue; }
*/
var inputFilePath = './test/test.scss';

// Output file with variables injected.
var outputFilePath = './test/test-output.scss';

// Variables to be injected into the file.
// This will turn into:
// $blue: "#0000FF";
var sampleVariables = {
  blue: '#0000FF'
};

// Simple call case.
sassVariablesUtil(sampleVariables, inputFilePath, outputFilePath);

// Output contents are returned, in the event you want to use them.
var outputFileContents = sassVariablesUtil(sampleVariables, inputFilePath, outputFilePath);

// Output file would look like:
/*
$blue: "#0000FF";
.whatever { color: $blue; }
*/
```
