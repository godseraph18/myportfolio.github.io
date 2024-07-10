const menuIcon = document.querySelector('#menu-icon'); 
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click",()=>{
    window.location.replace('index2.html')
})
