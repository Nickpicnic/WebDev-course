const request = require('request');

request('http://jsonplaceholder.typicode.com/users/1', (error, response, body) => { // arrow function
    if (!error && response.statusCode == 200) {
      var parsedData = JSON.parse(body);
      console.log(`${parsedData.name} lives in ${parsedData.address.city}`);        // template literals
    }
});
