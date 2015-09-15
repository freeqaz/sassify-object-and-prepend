# sassify-object-and-prepend

A small wrapper around sassify-object for use during builds.

## Example

```javascript
import sassifyObjectAndPrepend from 'sassify-object-and-prepend';

// Input file path to be read from.
// Example Sass input file might look like:
/*
.whatever { color: $blue; }
*/
const inputFilePath = './test/test.scss';

// Output file with variables injected.
const outputFilePath = './test/test-output.scss';

// Variables to be injected into the file.
// This will turn into:
// $blue: "#0000FF";
const sampleVariables = {
  blue: '#0000FF'
};

// Simple call case.
sassifyObjectAndPrepend(sampleVariables, inputFilePath, outputFilePath);

// Output contents are returned, in the event you want to use them.
const outputFileContents = 
  sassifyObjectAndPrepend(sampleVariables, inputFilePath, outputFilePath);

// Output file would look like:
/*
$blue: "#0000FF";
.whatever { color: $blue; }
*/
```
