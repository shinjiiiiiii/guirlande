const red = document.getElementById('rouge')
const green = document.getElementById('vert')
const blue = document.getElementById('bleu')
const yellow = document.getElementById('jaune')
let text = document.getElementById('titre')
color = null;

red.addEventListener('click',()=>{
    color = 'ROUGE'
    text.innerHTML = `VOUS AVEZ CLIQUÉ SUR LE CARRÉ ${color}`
})
green.addEventListener('click',()=>{
    color = 'VERT'
    text.innerHTML = `VOUS AVEZ CLIQUÉ SUR LE CARRÉ ${color}`
})
blue.addEventListener('click',()=>{
    color = 'BLEU'
    text.innerHTML = `VOUS AVEZ CLIQUÉ SUR LE CARRÉ ${color}`
})
yellow.addEventListener('click',()=>{
    color = 'JAUNE'
    text.innerHTML = `VOUS AVEZ CLIQUÉ SUR LE CARRÉ ${color}`
})



