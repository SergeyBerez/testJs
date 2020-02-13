window.addEventListener('load', function(e) {
  const circless = document.getElementsByClassName('circle');
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
    console.log(this);
    if (this.dataset.id == 1) {
      // console.log("one");
      // console.log(count);
      this.dataset.id = 0;
      for (let i = 0; i < count.length; i++) {
        console.log(count[i]);
        clearInterval(count[i]);
        btnStart.textContent = 'start';
      }
    } else {
      // console.log("two");
      // console.log(count);
      let timerId = setInterval(addColorCircle, 1000);
      count.push(timerId);
      this.dataset.id = 1;
      btnStart.textContent = 'stop';
    }

    // setInterval запусткает функию раскрашиваня шариков
    let i = 0;

    function addColorCircle() {
      let Arrcircles = [...circless];
      Arrcircles.forEach(el => {
        if (i > arrColor.length) {
          i = 0;
        }
        el.style.backgroundColor = arrColor[i];
        i++;
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
