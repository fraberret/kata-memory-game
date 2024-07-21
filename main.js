document.addEventListener('DOMContentLoaded', () => {
    const couples = [
        './assets/images/alien.png', './assets/images/alien.png',
        './assets/images/rocket.png','./assets/images/rocket.png',
        './assets/images/duck.png','./assets/images/duck.png',
        './assets/images/spaceship.png','./assets/images/spaceship.png',
        './assets/images/tiktac.png','./assets/images/tiktac.png',
        './assets/images/bug.png','./assets/images/bug.png'
    ];

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffle(couples);
    console.log(couples);

    const rowElement = document.getElementById("row");
    if (rowElement) {
        couples.forEach(element => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-3';
            const img = document.createElement('img');
            img.src = element;
            img.alt = '';
            colDiv.appendChild(img);
            rowElement.appendChild(colDiv);
        });
    } else {
        console.error('Element with id "row" not found.');
    }
});