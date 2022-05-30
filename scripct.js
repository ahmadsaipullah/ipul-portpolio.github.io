$('.page-scroll').on('click', function(e) {

    // ambil isi href
    let tujuan = $(this).attr('href');
    // tangkap element yang bersangkutan 
    let elementTujuan = $(tujuan);

    //pindahkan scroll 
    $('body').animate({
        scrollTop:elementTujuan.offset().top-100
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
    
});

//about
$(window).on('load', function(){
    $('.paragrafKiri').addClass('muncul');
    $('.paragrafKanan').addClass('muncul');
})

//jumbotron

$(window).scroll(function(){

    let wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px,' + wScroll/4+'%)'
        
    });
    
    $('.jumbotron h1').css({
        'transform' : 'translate(0px,' + wScroll/1+'%)'
        
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px,' + wScroll/0.8+'%)'
        
    });

//portfolio


});

