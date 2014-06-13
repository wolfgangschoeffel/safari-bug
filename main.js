var offset = 500;

var content = document.getElementById('content');
content.style.marginTop = offset + 'px';


window.addEventListener('scroll', function(e){
    console.log('scroll');
    var top = window.pageYOffset || document.documentElement.scrollTop;

    if( top > offset ){

        content.style.marginTop = 0;
        window.scrollTo(0,0);
        
    }

});