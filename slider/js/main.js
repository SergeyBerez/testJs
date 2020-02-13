const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const slides = document.querySelectorAll('.slides');
const inputs = document.querySelectorAll('.input');
let i = 0;

for (let j = 0; j < inputs.length; j++) {
  inputs[j].addEventListener('click', function(e) {
    clearInterval(loop);

    let slide = document.querySelector(`[data-count="${this.id}"]`);

    if (slide.classList.contains('pos-right')) {
      i = j;
      slides.forEach(element => {
        element.classList.add('pos-right');
      });
      slide.classList.remove('pos-right');
    }
  });
}

function slideNext() {
  console.log(i + 'slider');

  slides[i].classList.add('pos-right');
  i++;
  if (i > slides.length - 1) {
    i = 0;
  }
  inputs[i].checked = true;

  slides[i].classList.remove('pos-right');
}
function slidePrev() {
  slides[i].classList.add('pos-right');
  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  inputs[i].checked = true;
  slides[i].classList.remove('pos-right');
}
function stopLoop() {
  clearInterval(loop);
}
btnNext.addEventListener('click', slideNext);
btnPrev.addEventListener('click', slidePrev);
btnNext.addEventListener('click', stopLoop);
btnPrev.addEventListener('click', stopLoop);

const loop = setInterval(() => {
  slideNext();
}, 2000);

// inputs.forEach(item => {
// 	console.log(item.checked);
// });
