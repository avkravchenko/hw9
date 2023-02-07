/* Задание 2.

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

JSON:

{
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
}
JS-объект:

{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
} */
/* 
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
 console.log(res2);  */