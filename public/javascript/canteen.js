let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
function f(){
    let ele = document.getElementsByClassName('load-container');
    ele[0].style.visibility = "hidden";
}

setTimeout(f,0);