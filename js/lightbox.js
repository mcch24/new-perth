$(document).ready(function(){
//show lightbox    
    $(".menu").click(function(){
        $(".lightbox").show();
        $('body').css({
            overflow: 'hidden',
            height: '100%'
        });
    });

//close on click
    $(".lightbox").click(function(){
        $(this).hide();
        $('body').css({
            overflow: 'auto',
            height: 'aut0'
        });
    });

// close on esc
    $(document).keyup(function(e){
        if (e.keyCode == 27){
            $(".lightbox").hide();
            $('body').css({
                overflow: 'auto',
                height: 'aut0'
            });
        }
    });    
});