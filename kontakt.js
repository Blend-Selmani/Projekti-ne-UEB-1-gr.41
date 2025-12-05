const list = document.querySelector(".list");
const sidebar = document.querySelector(".sidebar");

list.addEventListener('click', function(){
    sidebar.classList.toggle("sidebar-special");
    });