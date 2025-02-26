document.getElementById('form-sorteador').addEventListener('submit', event => {

    event.preventDefault();
    let numMax = parseInt(document.getElementById('numero-maximo').value);
    let numAle = Math.floor(Math.random() * numMax) + 1;
    
    document.getElementById('numero-sorteado').innerText = numAle;
    document.querySelector('.resultado').style.display = 'block';
})
