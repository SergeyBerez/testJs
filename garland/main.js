window.addEventListener('load', function(e) {
  const btnStart = document.querySelector('.btn-start');
  const btnRandom = document.querySelector('.btn-random');
  const conteiner = document.querySelector('.conteiner');
  const arrColor = ['green', 'blue', 'red', 'pink'];
  const count = [];
  // создаем радномное число  от 0 до 100 для рисования элементов DOM
  function createRandomNumber() {
    let rand = Math.round(Math.random() * (100 - 0)) + 5;
    return rand;
  }

  // запускаем функцию setInterval , для очистки интервала возвращаемое значение таймера зписываем в массив , по клику на кнопку, через дата атрибуты очищаем интервал

  function startRandomLigting() {
    //проверяем состояние кнопки и получаем в номера таймера который записан в массиве
    if (this.dataset.id == 1) {
      this.dataset.id = 0;
      for (let i = 0; i < count.length; i++) {
        console.log(count[i]);
        clearInterval(count[i]);
        btnStart.textContent = 'start';
      }
    } else {
      // получаем Id функции и сохраняем его в массив что бы потом очитсить интервал
      let timerId = setInterval(addColorCircle, 2000);
      count.push(timerId);
      this.dataset.id = 1;
      btnStart.textContent = 'stop';
    }

    // setInterval запусткает функию раскрашиваня шариков
    let i = 0;
    function addColorCircle() {
      let Arrcircles = [...document.querySelectorAll('.circle')];
      Arrcircles.forEach(el => {
        
        el.style.backgroundColor = arrColor[i];
        i++;
        console.log(i);
        if (i > arrColor.length - 1) {
          i = 0;
        }
      });
    }
  }
  // создаем елемент дом circle
  function createCircle() {
    let div = document.createElement('div');
    div.className = 'circle';
    return div;
  }
  // отрисовываем столько кругов сколько сгенирует фукнция createRandomNumber
  function renderCircle(number) {
    conteiner.textContent = '';
    for (let i = 0; i < number; i++) {
      conteiner.append(createCircle());
    }
  }

  renderCircle(createRandomNumber());
  btnStart.addEventListener('click', startRandomLigting);

  btnRandom.addEventListener('click', function() {
    renderCircle(createRandomNumber());
  });
});
