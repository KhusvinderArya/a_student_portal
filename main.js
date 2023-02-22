const modal = document.querySelectorAll('.mod');
const main = document.querySelector('.main')
const hide_part = document.querySelector(".content");
const overl = document.querySelector('.overlay')
const body = document.querySelector('body')
const cross = document.getElementById('cross')
for(let i = 0;i<modal.length;i++){
    modal[i].addEventListener('click',function(){
        console.log(modal[i].textContent)
        hide_part.classList.remove('hide')
        overl.classList.add('blur')
        main.classList.add('blur')
        body.addEventListener('keyup',(event)=>{
            if(event.key == 'Escape'){
                hide_part.classList.add('hide')
                main.classList.remove('blur')
            }
          
        })
        body.addEventListener('click',(event)=>{
            console.log(event)
        })
    })
}

cross.addEventListener('click',function(){
    hide_part.classList.add('hide')
        main.classList.remove('blur')
})
