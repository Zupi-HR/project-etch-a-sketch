
const mainContainer = document.querySelector('.main-container');
const resetBTN = document.querySelector('.reset-btn');
const clearBTN = document.querySelector('.clear-btn');


resetBTN.addEventListener('click', function () {
  empty(mainContainer);
  let userChoice = Number(prompt('How many squares per side?'));
  if (userChoice <= 100) {
    for (i = 1; i <= userChoice; i++) {
      const container = document.createElement('div');
      mainContainer.appendChild(container).classList.add('container');
      for(j = 1; j <= userChoice; j++) {
          const grid = document.createElement('div');
          container.appendChild(grid);
          grid.classList.add('grid');
          grid.addEventListener("mouseenter", (e) => {
              e.target.style.backgroundColor = randomColorGenerator();
          })
      }
  }
  } else {
    alert('Number is too high');
  }
})

function randomColorGenerator() {
  let color = "#";
  let colorRange = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  for(i = 0; i < 6; i++) {
    color += colorRange[Math.floor(Math.random() * colorRange.length)];
  }
  return color;
}

   function empty(element) {
    while(element.firstElementChild) {
      element.firstElementChild.remove();
    }
   }   
      



