'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', () => openModalFunc());

const openModalFunc = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalFunc = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', () => closeModalFunc());
overlay.addEventListener('click', () => closeModalFunc());

document.addEventListener('keydown', e => {
  console.log(e);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModalFunc();
    }
  }
});
