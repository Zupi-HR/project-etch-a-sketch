const mainContainer = document.querySelector('.main-container');

function randomColorGenerator() {
   
}

for (i = 1; i <= 16; i++) {
    const container = document.createElement('div');
    mainContainer.appendChild(container).classList.add('container');
    for(j = 1; j <= 16; j++) {
        const grid = document.createElement('div');
        container.appendChild(grid);
        grid.classList.add('grid');
        grid.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "purple";
        })
    }
}



