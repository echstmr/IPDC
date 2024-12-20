const navLinks = document.getElementById('navLinks');
const barBtn = document.getElementById('barIcon');
const closBtn = document.getElementById('closeIcon');

barBtn.addEventListener('click', () =>{
    navLinks.classList.add('active');
});

closBtn.addEventListener('click', ()=>{
    navLinks.classList.remove('active')
});

window.addEventListener('scroll', () =>{
    navLinks.classList.remove('active')
})