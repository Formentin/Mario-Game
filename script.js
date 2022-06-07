const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if (pipePosition <= 124 && pipePosition > -15 && marioPosition <= 100){
        
        pipe.style.animation = 'none';
        mario.style.animation = 'none';

        pipe.style.left = `${pipePosition}px`;
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '85px';
        mario.style.animation = 'game-over 20ms linear'
        mario.style.marginLeft = '40px';
    }
},10);


document.addEventListener('keydown', jump);
