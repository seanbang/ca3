var main = function() {
    $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();
    $(this).addClass('current');
    $(this).children('.description').show();
    });
    
    $(document).keypress(function(event) {
        if(event.which === 111) {
        $('.current').children('.description').toggle();
        }

        else if(event.which === 110) {
        var currentArticle = $('.current');
        var nextArticle = currentArticle.next();
        
        currentArticle.removeClass('current');
        nextArticle.addClass('current');
        }

        else if(event.which === 112) {
        var currentArticle = $('.current');
        var prevArticle = currentArticle.prev();
        
        currentArticle.removeClass('current');
        prevArticle.addClass('current');
        }

    });
    
};

$(document).ready(main);