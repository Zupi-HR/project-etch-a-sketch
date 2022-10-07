const mainContainer = document.querySelector('.main-container');

function randomColorGenerator() {
  let color = "#";
  let colorRange = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  for(i = 0; i < 6; i++) {
    color += colorRange[Math.floor(Math.random() * colorRange.length)];
  }
  return color;
}

for (i = 1; i <= 16; i++) {
    const container = document.createElement('div');
    mainContainer.appendChild(container).classList.add('container');
    for(j = 1; j <= 16; j++) {
        const grid = document.createElement('div');
        container.appendChild(grid);
        grid.classList.add('grid');
        grid.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = randomColorGenerator();
        })
    }
}



