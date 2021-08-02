const csv = require('csv-parser')
const fs = require('fs')
const csvData = [];

fs.createReadStream('data/Data.csv')
  .pipe(csv())
  .on('data', (data) => csvData.push(data))
  .on('end', () => {
    console.log(csvData);
  });

module.exports = csvData;
