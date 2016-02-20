$(document).ready(function(){
//all code that should run after the DOM loads goes here
     $('.navbar').removeClass('open');
     $('.menu-button').on('click', function(){
         $('.navbar').toggleClass('open');
     });
    // $.webshims.polyfill(); // added 12112015 for the form page 80
      $('#slider').nivoSlider({
        effect: 'fade', //Specify sets like: 'fold,fade,sliceDown'
        animSpeed: 500, //Slide transition speed = 500
        pauseTime: 5000, //3000
        startSlide: 0, //Set starting Slide (0 index)
        directionNav: true, //Next & Prev
        directionNavHide: true, //Only show on hover
        controlNav: false //1,2,3...
    });
    
     /* $(function () { /* to make sure the script runs after page load */
     /*$('a.read_more').click(function (event) { /* find all a.read_more elements and bind the following code to them */

       /*event.preventDefault(); /* prevent the a from changing the url */
       /* $(this).parents('.item').find('.more_text').show(); /* show the .more_text span */
        /* $(this).parents('.item').find('.more_text').show(); /* show the .more_text span */

     /*});  */ 
    

   // });

     

});


$(window).load(function () { 
$('.item').each(function(event){ /* select all divs with the item class */

      var max_length = 320; /* set the max content length before a read more link will be added */

  if ($(this).html().length > max_length){ /* check for content length */

        var short_content = $(this).html().substr(0, max_length); /* split the content in two parts */    
        var long_content = $(this).html().substr(max_length);
        $(this).html(short_content +
        '<a href="#" class="read_more"><br/>Read More</a>' +
        '<span class="more_text" style="display:none;">' + long_content + '</span>'); /* Alter the html to allow the read more functionality */

        $(this).find('a.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */

              event.preventDefault(); /* prevent the a from changing the url */
              $(this).hide(); /* hide the read more button */
              $(this).parents('.item').find('.more_text').show(); /* show the .more_text span */

        });
   }

});
});
    
    
    
    
/* }); */