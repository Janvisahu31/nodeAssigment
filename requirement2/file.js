// Importing the promises API from the fs module
import { readFile } from 'fs/promises';

// Path to the poem file
const filePath = 'requirement2/poem.txt'; // Replace 'path/to' with the actual path to your poem.txt file

// Reading the file content using readFile from fs/promises
readFile(filePath, 'utf8')
  .then((data) => {
    console.log(data); // Printing the content of the file to the console
  })
  .catch((err) => {
    console.error('Error reading the file:', err);
  });