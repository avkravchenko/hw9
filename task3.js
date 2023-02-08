/* Задание 3

Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью request по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.
После получения данных вывести ниже картинки на экран.

 */

/* const log = console.log;

const btn = document.querySelector('#btn');
const output = document.querySelector('.after-form');






function xttpr(url, callback){
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function(){
        if (request.status !== 200){
            console.log(`Статус ответа: ${request.status}`)
        } else {
            const res = JSON.parse(request.response)
            if (callback){
                callback(res);
            }
            console.log('xex')
        }
    }
    request.onerror = function(){
        console.log(`Ошибка. Статус ошибки: ${request.status}`)
    }
}

function displayRes(apiData){
    const cards = '';
    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
            <img 
                src=${item.download_url}
                class="card-img">
            <p>author: ${item.author}</p>
        </div>
        `   
        cards = cards + cardBlock;
    });
    output.innerHTML = cards;
}


btn.addEventListener('click', () => {
    xttpr("https://picsum.photos/v2/list?limit=5", displayRes)
})
 */

const log = console.log;

const btn = document.querySelector('#btn');
const output = document.querySelector('.after-form');

function xttpr(url, callback){
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function(){
        if (request.status !== 200){
            console.log(`Статус ответа: ${request.status}`)
        } else {
            const res = JSON.parse(request.response)
            if (callback){
                callback(res);
            }
        }
    }
    request.onerror = function(){
        console.log(`Ошибка. Статус ошибки: ${request.status}`)
    }
    request.send();
}

function displayRes(apiData){
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
            <img 
                src=${item.download_url}
                class="card-img">
            <p>author: ${item.author}</p>
        </div>
        `   
        cards = cards + cardBlock;
    });
    output.innerHTML = cards;
}


btn.addEventListener('click', () => {
    let userInput = +document.getElementById("numbers").value;
    log(userInput)
    if (userInput < 1 || userInput > 10) {
        output.innerHTML = "<p>The number doesn't fit. Please write a number between 1 - 10</p>"
    } else if (isNaN(userInput)){
        output.innerHTML = '<p>Please enter a number</p>';
    } else {xttpr(`https://picsum.photos/v2/list?limit=${userInput}`, displayRes)}
})

const button = document.getElementById("button");

document.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    btn.click();
  }
});

