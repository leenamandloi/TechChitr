 let menu = document.querySelector('#menu-icon');
 let navlist = document.querySelector('.navlist');

 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
 }

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

window.addEventListener("load",function(){
  showPopup();
})

function showPopup(){
  const timeLimit = 3;
  let i=0;


  setTimeout(() => {
    loginPopup.classList.add('show');
  },3000);

}

close.addEventListener("click",function () {
  loginPopup.classList.remove("show");

})

