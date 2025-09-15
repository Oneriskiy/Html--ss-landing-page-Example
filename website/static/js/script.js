const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let position = 0;

nextBtn.addEventListener('click', () => {
  position -= 250;
  if (Math.abs(position) >= track.scrollWidth - track.parentElement.offsetWidth) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener('click', () => {
  position += 250;
  if (position > 0) {
    position = -(track.scrollWidth - track.parentElement.offsetWidth - 20);
  }
  track.style.transform = `translateX(${position}px)`;
});
