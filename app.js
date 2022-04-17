
const haBtn =  document.querySelector('.tricky');

haBtn.addEventListener('mouseover', nastyBoy)




function nastyBoy(){
    console.log('HaHa');
    const h = Math.floor(Math.random() * window.innerHeight);
    const w = Math.floor(Math.random() * window.innerWidth);
    haBtn.style.left = `${w}px`;
    haBtn.style.top =`${h}px`;
    
  };

const rsetBtn =  document.querySelector('.reset');

rsetBtn.addEventListener('click', reload)

function reload() {
  window.location.reload();
}


const spread = document.querySelector('#total')
const ft =  getComputedStyle(spread)
const fontSize = ft.fontSize
console.log(fontSize)

const big = parseFloat(fontSize)
console.log(big)

var bigOne = big +1
console.log(bigOne)



var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("total").innerHTML = clicks;
  bigOne +=1;
  spread.style.fontSize = `${bigOne}px`;
}