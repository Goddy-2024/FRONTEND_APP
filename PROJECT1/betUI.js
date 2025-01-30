let cash = document.querySelector('#cash');
let multiplier = document.getElementById('times');
const body = document.querySelector('body');
const bet = document.querySelector('#bet');

const placeAmnt = document.querySelector('#amount');
let accAmnt = document.querySelector('#mtimes');
let amount = 50;
let count = 1.00;
function update(){
    cash.style.display = 'flex';
    body.style.background = 'radial-gradient(rgb(7, 2, 131), black)';
    placeAmnt.style.display = 'none';
    bet.style.background = 'orange';
    count = count + 0.0001;
    multiplier.textContent = count.toFixed(2);
    accAmnt.textContent = (amount * count).toFixed(2);
    
    if(count >= 2 && count < 10){
        multiplier.style.color = 'rgb(100, 37, 247)';
        count = count + 0.0001;
    }else if(count >= 10){
        count = count + 0.001;
        multiplier.style.color = 'purple';
        body.style.background = 'radial-gradient(rgb(47, 2, 131), black)'
    }
    setInterval(() => {
        update();
    }, 5);
}
function win(){
    bet.style.background = 'orange';

}

cash.onclick = win;
bet.onclick = update;
