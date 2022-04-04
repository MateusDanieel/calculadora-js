// DARK/CLEAR MODE
(function() {

    let body = document.querySelector('body');
    let btn = document.querySelector('.sec-navbar .bt');
    
    btn.addEventListener('click', function() {
        if(body.className == 'js-dark') {
            body.setAttribute('class', 'js-clear');
            btn.innerHTML = '<i class="fa-solid fa-moon fa-2x"></i>';
        } else {
            body.setAttribute('class', 'js-dark');
            btn.innerHTML = '<i class="fa-solid fa-sun fa-2x"></i>';
        }
    }, false);

})();