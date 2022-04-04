// DARK/CLEAR MODE
(function() {

    let body = document.querySelector('body');
    let btn = document.querySelector('.sec-navbar .bt');
    
    btn.addEventListener('click', ()=> {
        if(body.className == 'js-dark') {
            body.setAttribute('class', 'js-clear');
            btn.innerHTML = '<i class="fa-solid fa-moon fa-2x"></i>';
        } else {
            body.setAttribute('class', 'js-dark');
            btn.innerHTML = '<i class="fa-solid fa-sun fa-2x"></i>';
        }
    });

})();

// CALCULADORA
(function() {

    let screen = document.querySelector('.sec-main .calc .screen');
    let keys = document.querySelectorAll('.sec-main .calc .keys .nmr');
    let alert = document.querySelector('.sec-main .alert');

    document.addEventListener('keypress', (e)=> {
        const keyName = e.key;
        
        if (keyName >= 0 && keyName <= 9 || keyName == '/' || keyName == '*' || keyName == '-' || keyName == '+') {
            screen.innerHTML += keyName;
        } else if (keyName == ',' || keyName == '.') {
            screen.innerHTML += '.';
        } else if (keyName == '=') {
            try {
                if(alert.getAttribute('style', 'display: block')) {
                    alert.setAttribute('style', 'display: none;');
                }

                const res = screen.innerHTML;
                screen.innerHTML = eval(res);
            } catch {
                alert.setAttribute('style', 'display: block;');
                screen.innerHTML = '';
            }
        }
        
        
    });
    
})();