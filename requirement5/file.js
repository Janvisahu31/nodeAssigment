import { promises as fs } from 'fs';

async function processData() {
  try {
    
    const rawData = await fs.readFile('requirement5/response.json', 'utf8');
   
    const response = JSON.parse(rawData);

    
    const mappedData = response.data.map(item => ({
      name: item.name,
      year: item.year
    }));

    const filteredData = mappedData.filter(item => item.year > 2020);

    console.log(filteredData);
  } catch (error) {
    console.error('Error processing data:', error);
  }
}

processData();
