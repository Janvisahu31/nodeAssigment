// Required modules
import { readFile } from 'fs';
import { promisify } from 'util';

// Promisify the fs.readFile function
const readFileAsync = promisify(readFile);

// Attach an 'exit' event listener to the process
process.on('exit', (code) => {
  console.log(`Process is exiting with code: ${code}`);
});

// Attach an 'unhandledRejection' event listener to the process
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

// Call the promisified readFile function with an incorrect file name
readFileAsync('nonExistentFile.txt', 'utf8').then((data) => {
  console.log(data);
}).catch((error) => {
  console.error('Error reading file:', error.message);
  // Throw a new error to trigger 'unhandledRejection'
  throw new Error('This error is from the catch handler');
});
