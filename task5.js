/* Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage). */


const inputPage = document.querySelector('#input-page');
const inputLimit = document.querySelector('#input-limit');
const btn5 = document.querySelector('#btn-task5');
const visibleRes = document.querySelector('.after-form-task5');

btn5.addEventListener('click', () => {
  const input1 = +inputPage.value;
  const input2 = +inputLimit.value;

  if ((isNaN(input1) || input1 < 1 || input1 > 10) && (isNaN(input2) || input2 < 1 || input2 > 10)) {
    visibleRes.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    return;
  }

  if (isNaN(input1) || input1 < 1 || input1 > 10) {
    visibleRes.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    return;
  }

  if (isNaN(input2) || input2 < 1 || input2 > 10) {
    visibleRes.innerHTML = "Лимит вне диапазона от 1 до 10";
    return;
  }

 

  const url = `https://picsum.photos/v2/list?page=${input1}&limit=${input2}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('hw9t5', JSON.stringify(data));
      const savedData = JSON.parse(localStorage.getItem('hw9t5'));
      let urlImg = "";
      savedData.forEach((element) => {
        urlImg += `<div><img class="api-images" src="${element.download_url}"></div>`;
      });
      visibleRes.innerHTML = urlImg;
    })
    .catch(error => {
      console.log(error);
    });

    const count = localStorage.length;
    console.log('ls length is ', count)
});

