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
    if (userInput < 1 || userInput > 10) {
        output.innerHTML = "<p>The number doesn't fit. Please write a number between 1 and 10</p>"
    } else if (isNaN(userInput)){
        output.innerHTML = '<p>Please enter a number instead of the text</p>';
    } else {xttpr(`https://picsum.photos/v2/list?limit=${userInput}`, displayRes)}
})

document.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    btn.click();
  }
});