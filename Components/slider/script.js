let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slide = document.querySelectorAll(".slide");
let counter = 0;
let intervalId;


slide.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideimage = () => {
  slide.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

function handlePrev() {
  counter--;
  if (counter < 0) {
    counter = slide.length - 1;
  }
  slideimage();
}

function handleNext() {
  counter++;
  if (counter >= slide.length) {
    counter = 0;
  }
  slideimage();
}

function startSlider() {
  intervalId = setInterval(() => {
    counter++;
    if (counter >= slide.length) {
      counter = 0;
    }
    slideimage();
  }, 1000); 
}

function stopSlider() {
  clearInterval(intervalId);
}

prev.addEventListener("click", () => {
  stopSlider();
  handlePrev();
});
next.addEventListener("click", () => {
  stopSlider();
  handleNext();
});


startSlider();
