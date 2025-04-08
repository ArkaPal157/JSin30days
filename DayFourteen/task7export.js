//Install a third-party module (e.g., axios) using npm.
//Import and use this module to make a network request in a script.
//axios is a popular library to make http requests.

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));