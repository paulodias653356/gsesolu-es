let index = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function changeSlide(next = true) {
  slides[index].classList.remove('active');
  indicators[index].classList.remove('active');
  index = next ? (index + 1) % slides.length : (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
  indicators[index].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => changeSlide(false));
document.querySelector('.next').addEventListener('click', () => changeSlide(true));

setInterval(() => changeSlide(), 5000);

document.querySelector('.options button').addEventListener('click', () => {
  const cep = prompt("Digite seu CEP:");
  if (cep && /^[0-9]{5}-[0-9]{3}$/.test(cep)) {
    alert("CEP válido!");
  } else {
    alert("CEP inválido!");
  }
});
