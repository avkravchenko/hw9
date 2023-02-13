/* Задание 4

Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
После получения данных вывести ниже картинку на экран.

 */

const input1 = document.querySelector('#width');
const input2 = document.querySelector('#height');
const submit = document.querySelector('#btn-task4');
const visibleResult = document.querySelector('.after-form-task4');
const img = document.querySelector('#img');

submit.addEventListener('click', () => {
    let widthValue = input1.value;
    let heightValue = input2.value;
    let myPromise = new Promise((resolve, reject) => {
        if (widthValue >= 100 && widthValue <= 300 && isNaN(widthValue) === false && heightValue >= 100 && heightValue <= 300 && isNaN(heightValue) === false){
            resolve(console.log('success'))
        }else{
            reject(console.log('error'))
        }
    })

    myPromise
        .then(() => {
            fetch(`https://picsum.photos/${widthValue}/${heightValue}`)
            .then((respone) => {
                const result = respone;
                return result
            })
            .then((data) => {
                img.innerHTML = `<img src="${data.url}" alt=""></img>`
            })
            .catch(() => {
                console.log('something went wrong')
            })
        })
        .catch(() => {
            img.style.color = 'red';
            img.style.textAlign = 'center';
            return img.innerHTML = "<p>an error occure</p>";
        }) 
})

document.addEventListener('keydown', (e) => {
    if (e.code === "Enter"){
        submit.click();
    }
})










