const json = `{
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
 }`

 const data = JSON.parse(json);

 const list = data.list;

 console.log(list);

 const res1 = {
    name: list[0].name,
    age:  Number(list[0].age) ,
    prof: list[0].prof
 }
 const res2 = {
    name: list[1].name,
    age:  Number(list[1].age) ,
    prof: list[1].prof
 }


 console.log(res1); 
 console.log(res2);  