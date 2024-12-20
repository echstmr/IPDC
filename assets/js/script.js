const navLinks = document.getElementById('navLinks');
const barBtn = document.getElementById('barIcon');
const closBtn = document.getElementById('closeIcon');
const links = document.querySelectorAll('.links');

barBtn.addEventListener('click', () =>{
    navLinks.classList.add('active');
});

closBtn.addEventListener('click', ()=>{
    navLinks.classList.remove('active')
});

window.addEventListener('scroll', () =>{
    navLinks.classList.remove('active')
})

links.forEach((link) =>{
    
   link.addEventListener('click', () =>{

    links.forEach((links) => links.classList.remove('active'));

    link.classList.add('active');
    
   })

});
