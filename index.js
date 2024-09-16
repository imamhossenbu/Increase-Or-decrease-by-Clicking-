const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

let counterValue = 0;


const updateCounter= (value)=>{
    counterValue = counterValue + value;
    counter.innerText = counterValue;
    if(counterValue >= 10){
    plus.setAttribute('disabled',true);        
    }
    else{
    plus.removeAttribute('disabled')
    }


    if(counterValue <= 0){
        minus.setAttribute('disabled',true);
    }
    else{
        minus.removeAttribute('disabled');
    }
}

plus.addEventListener('click',function(){
    
       updateCounter(1);
})


minus.addEventListener('click',function(){
    updateCounter(-1);
   
})