const button = document.getElementById('hamburger');

button.addEventListener('click', function(){
    const menu = document.getElementById('navlinks');
    if (navlinks.classList.contains('invis')){
        navlinks.classList.remove('invis');}
        else {navlinks.classList.add('invis');}
    })