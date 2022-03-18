//hamburger code start
const button = document.getElementById('hamburger');

button.addEventListener('click', function(){
    const menu = document.getElementById('navlinks');
    if (navlinks.classList.contains('invis')){
        navlinks.classList.remove('invis');}
        else {navlinks.classList.add('invis');}
    })
//hamburger code end

//form alert code start
function formGrab() {
    const name = document.getElementById("submitform").elements[0].value;
    alert("Thank you " + name + ", your submission has been receieved!");
}
//form alert code end