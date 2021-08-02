const express = require('express');
const csvData = require('./csvData');
const app = express();

app.get('/', (req,res) => {
    // console.log(results);
    res.send('Tresor Server running');
});

app.get('/data', (req,res,next) => {
    // for filters
    const filters = req.query;
    const filteredData = csvData.filter(chart => {
      let isValid = true;
      for (key in filters) {
        // console.log(key, chart[key], filters[key]);
        isValid = isValid && chart[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredData);
});

module.exports = app;