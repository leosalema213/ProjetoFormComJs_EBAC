const msgError = document.getElementById('text-error');
const msgSucess = document.querySelector('.msg-sucess');
let btn = document.getElementById('btn-form');
const input1 = document.querySelector('#value1');
const input2 = document.querySelector('#value2');
let value1 = null;
let value2 = null;

btn.addEventListener('click', function(event){
    console.log('clicou')
    input1.value = '';
    input2.value = '';
    msgSucess.style.display = 'block'
    event.preventDefault()
})

input1.addEventListener('keyup', function(element){
    value1 = element.target.value;
    
})

input2.addEventListener('keyup', function(element){
    value2 = element.target.value;
    if(+value1 >= +value2){
        msgError.style.display = 'block'
        btn.disabled = true
        btn.classList.add('btn-disable')
        return
    }
    msgError.style.display = 'none'
    btn.classList.remove('btn-disable')
    btn.disabled = false
})