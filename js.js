const body = document.getElementById('body')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')

p2.style.display = 'none'
p3.style.display = 'none'

function yes(){
    body.style.animation = 'scroll 120s linear infinite'
    p1.style.display = 'none'
    p2.style.display = ''
    var audio = new Audio('halo.mp3');
    audio.play();
}
function no(){
    p1.style.display = 'none'
    p3.style.display = ''
    body.style.animation = 'scroll 4s linear infinite'
    var audio = new Audio('errape.mp3');
    audio.play();
}