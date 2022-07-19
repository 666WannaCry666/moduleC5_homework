const personsStr = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

let personsJSON = JSON.parse(personsStr);

let personsObj = {
    list: personsJSON.list
};

console.log(personsObj);
