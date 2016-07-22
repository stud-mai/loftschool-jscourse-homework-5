// Making akkordeon work using native JavaScript by hanging only one event on the parent element of the target elements

var	akkordeon = document.getElementById('akkordeon');
function openClose(e){
    if (e.target.className == 'text') {
        var link = e.target.parentElement,
            siblings = link.parentElement.children,
            content = link.children[1],
            activeSibling;

        for (var i = 0; i < siblings.length; i++){
            if (siblings[i].classList.contains('active')) activeSibling = siblings[i];
        }

        if (link.classList.contains('active')){
            link.classList.remove('active');
            content.style.display = 'none';
        } else {
            if (activeSibling){
                activeSibling.children[1].style.display = 'none';
                activeSibling.classList.remove('active');
            }
            link.classList.add('active');
            content.style.display = 'block';
        }
    }
}
akkordeon.addEventListener('click', openClose);

// Making akkordeon work using native JavaScript by hanging all events on the target elements
/*
var elem = document.getElementsByClassName('text');
function openClose(e){
    var link = this.parentElement,
        siblings = link.parentElement.children,
        content = link.children[1],
        activeSibling;

    for (var i = 0; i < siblings.length; i++){
        if (siblings[i].classList.contains('active')) activeSibling = siblings[i];
    }

    if (link.classList.contains('active')){
        link.classList.remove('active');
        content.style.display = 'none';
    } else {
        if (activeSibling){
            activeSibling.children[1].style.display = 'none';
            activeSibling.classList.remove('active');
        }
        link.classList.add('active');
        content.style.display = 'block';
    }
}

for (var i = 0; i < elem.length; i++){
    elem[i].addEventListener('click', openClose);
}
*/

// Making akkordeon work using jQuery
/*
 $('.main').on('click', function(){
     var elem = $(this),
         siblings = elem.siblings('.active'),
         time = 300;
     if (elem.hasClass('active')) {
        elem.find('.sub-menu').stop(true,true).slideUp(time);
        elem.removeClass('active');
     } else {
        if(siblings){
             siblings.find('.sub-menu').stop(true,true).slideUp(time);
             siblings.removeClass('active');
        }
         elem.addClass('active');
         elem.find('.sub-menu').stop(true,true).slideDown(time);
     }
     });
*/


