const list = document.querySelector(".list");
const sidebar = document.querySelector(".sidebar");

list.addEventListener('click', function(){
    sidebar.classList.toggle("sidebar-special");
    });

    const contactBtn = document.querySelector('.button-show');
    const show_hide = dovument.qyerySelector('.show-hide');
    const closeContactForm = document.querySelector('.close-form');

contactBtn.addEventListener('click',function(){
    show_hide.classList.add('show-hide-special');
    show_hide.scrollIntoView({ behavior: 'smooth', block: 'start' });
 });

 closeContactForm.addEventListener('click', function(){
    show_hide.classList.remove('show-hide-special');
 })