/* Задание 1.

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль. 

<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
*/

const parser = new DOMParser();
const xml = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>

    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`;
const xmlDOM = parser.parseFromString(xml, 'text/xml');
const listNode = xmlDOM.querySelector('list');
const studentNodes = listNode.querySelectorAll('student');

const createStudentObject = (studentNode) => {
  const nameNode = studentNode.querySelector('name');
  const firstNameNode = nameNode.querySelector('first');
  const secondNameNode = nameNode.querySelector('second');
  const ageNode = studentNode.querySelector('age');
  const profNode = studentNode.querySelector('prof');
  const langAttr = nameNode.getAttribute('lang');

  return {
    student: studentNode,
    lang: langAttr,
    firstName: firstNameNode.textContent,
    secondName: secondNameNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent
  };
}

const resultOne = createStudentObject(studentNodes[0]);
const resultTwo = createStudentObject(studentNodes[1]);

console.log(resultOne);
console.log(resultTwo);



const list = [resultOne, resultTwo];

console.log(list);
