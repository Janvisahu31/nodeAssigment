// Hypothetical response data
const response = {
    "data": [
      {"name": "Item 1", "year": 2019, "otherProperty": "value1"},
      {"name": "Item 2", "year": 2021, "otherProperty": "value2"},
      {"name": "Item 3", "year": 2022, "otherProperty": "value3"}
    ]
  };
  
  // Use map to transform the array to only include name and year properties
  const mappedData = response.data.map(item => ({
    name: item.name,
    year: item.year
  }));
  
  // Use filter to only include items with year greater than 2020
  const filteredData = mappedData.filter(item => item.year > 2020);
  
  console.log(filteredData);
  