const JsonSearch = require('search-array').default

const objectArray = [
  {id:1, name: 'Sharik', owner: 'Petr', type: 'dog'},
  {id:2, name: 'Ralpf', owner: 'Steve', type: 'chameleon'},
  {id:3, name: 'Bonnie', owner: 'Mary', type: 'cat'},
  {id:4, name: 'Burenka', owner: 'Ivan', type: 'cow'}
]

const searcher = new JsonSearch(objectArray)
let foundObjects = searcher.query('Burenka')
console.log(foundObjects[0].name) // prints item 4
