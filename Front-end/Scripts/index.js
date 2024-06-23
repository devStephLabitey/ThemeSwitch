const modeTr = document.querySelector('.mode'),
    themeTr = document.querySelector('.day'),
    profilTr = document.querySelector('.profil'),
    navbarTr = document.querySelector('.navbar'),
    bodyTr = document.querySelector('body')

modeTr.addEventListener('click', ()=>{
    themeTr.classList.toggle('night');
    modeTr.classList.toggle('modeBlack');
    profilTr.classList.toggle('profilBlack');
    navbarTr.classList.toggle('navbarBlack');
    bodyTr.classList.toggle('bodyBlack')
    console.log(bodyTr);
})