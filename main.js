var offset = 500,
    open = true,
    content = document.getElementById('content');

content.style.marginTop = offset + 'px';

window.addEventListener('scroll', function(e){
    
    if( !open ){
        return;
    }

    var top = window.pageYOffset || document.documentElement.scrollTop;

    if( top > offset ){

        content.style.marginTop = 0;
        window.scrollTo(0,0);
        open = false;

    }

});