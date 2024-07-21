/* Generare 12 caselle */
for (let i = 1; i <= 12; i++) {
    document.getElementById('row').insertAdjacentHTML('beforeend', ` <div class="col-3">
                <img src="./assets/images/back.png" alt=""></div>`)
}