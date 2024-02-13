const baseURL = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6'; 

// Function to fetch pincode data for a given offset
function fetchPincodeData(offset) {
  return fetch(`${baseURL}${offset}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching data:', error));
}

// Using Promise.all to fetch data for all offsets simultaneously
Promise.all([
  fetchPincodeData(31),
  fetchPincodeData(51),
  fetchPincodeData(61)
]).then(dataArrays => {
  // Combining all the fetched data into one array using the spread operator
  const combinedData = [].concat(...dataArrays);
  // Printing all the received data
  console.log(combinedData);
}).catch(error => {
  console.error('Error in Promise.all:', error);
});