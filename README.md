# Hey Quest

![npm version](https://img.shields.io/npm/v/hey-quest.svg?style=flat-square)
![install size](https://img.shields.io/bundlephobia/min/hey-quest?label=size&style=flat-square)
![npm downloads](https://img.shields.io/npm/dm/hey-quest.svg?style=flat-square)

A promise based light-weight module that aims to make HTTP requests clean, intuitive, reusable and understandable.

## Features
> ...

## Installing

Using npm:

```bash
$ npm install hey-quest
```

Using yarn:

```bash
$ yarn add hey-quest
```

## Usage

> We don't recommend using .then() and .catch

```javascript
  // Import hey-quest
  const hey = require('hey-quest')
  
  // Declare an async function
  async function example(){
    try{
      // Configure the request and call it with ".do()"
      const res = await hey('https://jsonplaceholder.typicode.com/todos/1').do()
      // Convert the response into a javascript object
      const json = await res.json()
      // Logs the json
      console.log(json)
    }catch(e){
      // Inform an error if the request failed
      console.error(e)
    }
  }
  
  //Call the above function
  example()
```

## Credits

Hey-quest is a library made by Francisco Cidade (@FranckCid).

> Hey-quest is heavily inspired on [axios](https://github.com/axios/axios).

## License

MIT
