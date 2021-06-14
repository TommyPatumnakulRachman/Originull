'use strict';

'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const ori = document.querySelector('.ori');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const oriAll = document.querySelectorAll('.ori');

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0 ; i < btnOpenModal.length; i++){

    
    btnOpenModal[i].addEventListener('click',openModal);
    btnCloseModal.addEventListener('click',closeModal);
    overlay.addEventListener('click', closeModal);
    oriAll[i].addEventListener('click',closeModal);
}

document.addEventListener('keydown', function(e){

if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();
}

})