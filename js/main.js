/*
	
	01. Sticky Header Text
	02. Parallax Settings
	03. Sticky Nav Bar + Selected Effect
	04. Members Hover Effect
	05. Portfolio / Works Section
	06. Fade In / Fade Out Elements
	07. Form Sender
	08. Smooth Scrolling
	09. MediaCheck
	10. Initialise Instagram
	11. Videobackground ready
	12. Reading list
	13. Last played (LastFM)
	14. LAZY LOAD IMAGES 

*/

var ajax_form = true;

$(document).ready(function () { // Document ready


    mediaCheck({
        media: '(max-width: 1024px)',  /* If the page is max-width:1024px do the entry */
        entry: function () {
		

        },
        exit: function () { /* If not do the exit function */

/*-----------------------------------------------------------------------------------*/
/*	01. STICKY HEADER TEXT
/*-----------------------------------------------------------------------------------*/
	        

			YUI().use('node', function (Y) {
			  Y.on('domready', function () {
			    
			    var scrolling = false,
			        lastScroll,
			        i = 0;
			    
			    Y.on('scroll', function () {
			      if (scrolling === false) {
			        fade();
			      }
			      scrolling = true;
			      setTimeout(function () {
			        scrolling = false;
			        fade();
			      }, 0);
			    });
			    
			    function fade() {
			      
			      lastScroll = window.scrollY;
			      
			      Y.one('.huge-title').setStyles({
			        'transform' : 'translate3d(0,' + Math.round(lastScroll/2) + 'px,0)',
			        'opacity' : (100 - lastScroll/4)/100
			      });
			      
			      if (scrolling === true) {
			        window.requestAnimationFrame(fade);
			      }
			    }
			    
			  });
			});


/*-----------------------------------------------------------------------------------*/
/*	02. PARALLAX SETTINGS
/*-----------------------------------------------------------------------------------*/
	

			//.parallax(xPosition, speedFactor, outerHeight) options:
			//xPosition - Horizontal position of the element
			//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
			//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
			$('#header').parallax("1%", -0.4);	
   
        }
    }); /* END OF THE MEDIACHECK */



/*-----------------------------------------------------------------------------------*/
    /*	03. NAVBAR STICKY + SELECTED
/*-----------------------------------------------------------------------------------*/

    var cbpAnimatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('.cbp-af-header'),
            didScroll = false,
            changeHeaderOn = 500;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 0);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                classie.add(header, 'cbp-af-header-shrink');
            } else {
                classie.remove(header, 'cbp-af-header-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();



	var sections = $("section");
	var navigation_links = $("nav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("selected");
			active_link.addClass("selected");

		},
		offset: '0'
	});


/*-----------------------------------------------------------------------------------*/
/*	04. MEMBERS HOVER EFFECT
/*-----------------------------------------------------------------------------------*/
	
	mediaCheck({
	    media: '(max-width: 1024px)', /* If the page is max-width:1024px do the entry */
	    entry: function () { 
		
	
	    },
	    exit: function () {  /* If not do the exit function */
			
			$(".member").hover(
			    function(e){ 
				 $(this).children(".image").css("opacity", "0.1");   
				 $(this).children(".text").css("opacity", "1");   
				    
			    }, // over
			    function(e){
			     $(this).children(".text").css("opacity", "0");
				 $(this).children(".image").css("opacity", "1");   
			     }  // out
			);
			
		}});


/*-----------------------------------------------------------------------------------*/
/*	05. PORTFOLIO / WORKS SECTION
/*-----------------------------------------------------------------------------------*/

/* Open Action don't remove */

function openAction() {

	$('body').css("overflow","hidden");
	
	var $shadow;
	
	$shadow = $('.shadow:visible');
	for ( var i = 0; i < $shadow.length; i++ ) {
		el = $shadow.eq(i);
		el.children('.content-left').delay(800).addClass('show');
		el.children('.content-right').delay(800).addClass('show');
	}
}

/* Close Action don't remove */


function closeAction() {

	$('body').css("overflow","auto");

	var $list;
	
	$list = $('.content-left:visible, .content-right:visible');
	for ( var i = 0; i < $list.length; i++ ) {
		el = $list.eq(i);
		el.removeClass('show');
	}

	$list = $('.shadow');
	for ( var i = 0; i < $list.length; i++ ) {
		$list.eq(i).delay(800).fadeOut("slow");
	}
			
}

/* Close Action don't remove */

$('.closex').on('click', function() {	
	closeAction();
});


/* Close Action when Escape is pressed */

$(window).keyup(function(e) {

	switch( e.keyCode ) {
		
		case 27:			
			closeAction();
	}});


/* WORK 1 */

$('.work1').on('click', function() {
    $('.work1-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 2 */

$('.work2').on('click', function() {
    $('.work2-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 3 */

$('.work3').on('click', function() {
    $('.work3-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 4 */

$('.work4').on('click', function() {
    $('.work4-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 5 */

$('.work5').on('click', function() {
    $('.work5-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 6 */

$('.work6').on('click', function() {
    $('.work6-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 7 */

$('.work7').on('click', function() {
    $('.work7-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 8 */

$('.work8').on('click', function() {
    $('.work8-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/*-----------------------------------------------------------------------------------*/
/*	06. Fade In / Fade Out Class Elements ( used in Portfolio )
/*-----------------------------------------------------------------------------------*/


		// project is in view
		
		var project = $('.fade');
		
		project.addClass('outOfView');
		
		function projectInView() {
			var windowTop = $(window).scrollTop();
			var	windowBtm = windowTop + $(window).height();
		    project.each(function(){
		        projectTop = $(this).offset().top + $(this).height() / 5;
		        projectBtm = $(this).offset().top + $(this).height() / 4;
		        projectTop <= windowBtm && projectBtm >= windowTop ? $(this).removeClass('outOfView').addClass('inView') : $(this).removeClass('inView').addClass('outOfView')
		    });
		}
		
		$(window).scroll(function(){ projectInView(); });
		$(window).resize(function(){ projectInView(); });

/*-----------------------------------------------------------------------------------*/
/*	07. FORM SENDER
/*-----------------------------------------------------------------------------------*/

    /* Form Submission */
    $('form').submit(function () {

        var form_data = $(this).serialize();

        if (validateEmail($('input[name=email]').attr('value'))) {

            if (typeof ajax_form !== "undefined" && ajax_form === true) {

                $.post($(this).attr('action'), form_data, function (data) {
                    $('form').show('slow', function () {
                        $(this).after('<div class="clear"></div> <p class="msg-ok">' + data + '</p>');
                    });
                    $('.spam').hide();
                    $('.msg-ok').delay(100).effect("pulsate", {
                        times: 1
                    }, 1000).hide();
                });

                return false;

            }

        } else {
            $('p.spam').text('Please enter a valid e-mail').delay(100).effect("pulsate", {
                times: 2
            }, 1000);
            return false;
        }

    });


    /* Validate E-Mail */

    function validateEmail(email) {
        // http://stackoverflow.com/a/46181/11236

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }



/*-----------------------------------------------------------------------------------*/
/*	08. SMOOTH SCROLLING
/*-----------------------------------------------------------------------------------*/
	

$('.goto').click(function(e){
    $('html,body').scrollTo(this.hash,this.hash,  {'axis':'y'});
    e.preventDefault();
});


/*-----------------------------------------------------------------------------------*/
/*	09. MEDIACHECK
/*-----------------------------------------------------------------------------------*/


    mediaCheck({
        media: '(max-width: 768px)',
        entry: function () {



/*-----------------------------------------------------------------------------------*/
/*	10. INITIALISE INSTAGRAM
/*-----------------------------------------------------------------------------------*/

		/* SHOW ONLY 2 PICS ON MOBILE DEVICE */

	    // $("#instagram").instagram({
	    //     clientId: 'f7e36e8b1b6a4c32a5371a2b015b87c5',
	    //     show: '1',
	    //     updateInterval: 960*60*2,
	    //     //username: 'ericpuigmarti', /* DOESN'T WORK */
	    //     hash: 'ui design', /* HERE IS THE HASHTAG USED */
	    //     image_size: 'standard_resolution'
	    // })
			

     //    },
     //    exit: function () {
        

	    // $("#instagram").instagram({
	    //     clientId: 'f7e36e8b1b6a4c32a5371a2b015b87c5',
	    //     show: '12',
	    //     updateInterval: 960*60*2,
     //        // username: 'ericpuigmarti', /* DOESN'T WORK */
	    //     hash: 'ui design', /* HERE IS THE HASHTAG USED */
	    //     image_size: 'standard_resolution'
	    // })
			
		

/*-----------------------------------------------------------------------------------*/
            /*	11. VIDEOBACKGROUND READY
/*-----------------------------------------------------------------------------------*/


            var videobackground = new $.backgroundVideo($('.page1'), {
                "align": "centerXY",
                "width": 1280,
                "height": 720,
                "path": "http://www.baribal.be/exho/video/", /* Folder wich contain the mp4, ogg and webm video */
                "filename": "desktop",
                "types": ["mp4", "ogg", "webm"]
            });

        }


    }); /* END OF THE MEDIACHECK */


}); /* END OF Document Ready */


/*-----------------------------------------------------------------------------------*/
            /*	12. READING LIST
            code source: http://www.alatechsource.org/blog/2012/05/using-the-google-spreadsheets-data-api-to-build-a-recommended-reading-list-code-words.h
/*-----------------------------------------------------------------------------------*/

// $(document).ready(function() {	
// 		//source file is https://docs.google.com/spreadsheet/ccc?key=0Ak0qDiMLT3XddHlNempadUs1djdkQ0tFLWF6ci1rUUE	
// 		$(function listArticles() {	
// 		$.getJSON( "https://spreadsheets.google.com/feeds/list/1ogwuw8oFsujXiwyKS6Z2xipTCD97mzmroKYf5CUfbjc/od6/public/values?alt=json-in-script&callback=?&",
// 			function (data) {	
// 				$('div#feed').append('<ul class="items"></ul>');
// 				$.each(data.feed.entry, function(i,entry) {	
// 					var item = '<span style="display:none">' + entry.id.$t + '</span>';	
// 					// URL image source append # to base url below
// 					// item += '<img src="http://covers.openlibrary.org/b/isbn/' + entry.gsx$isbn.$t + '-S.jpg"/>';
// 					// URL link to source
// 					item += '<span class="meta"><h2><a href="http://www.worldcat.org/isbn/' + entry.gsx$isbn.$t + '">' + entry.title.$t + '</a></h2>';	
// 					// Author name
// 					item += '<br/>Author: ' + entry.gsx$author.$t;	
// 					// Description from column
// 					// if (entry.gsx$notes.$t) {	
// 					// 	item += '<br/>Description: ' + entry.gsx$notes.$t;	
// 					// }	
// 					$('.items').append('<li>' + item + '</span></li>');	
// 					});
// 				});
// 			});
// 		});


/*-----------------------------------------------------------------------------------*/
            /*	13. LAST PLAYED (LastFM)
/*-----------------------------------------------------------------------------------*/

	//    If you use this, be sure to get your own API key!
	// -> http://www.last.fm/api/account/create

	$(document).ready(function() {
	  var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ericpuigmarti&api_key=b88a785049d6bd2a7c92fb9948c72b1b &format=json";
	  $.getJSON(url, function(data) {
	    var artist = data.recenttracks.track[0].artist["#text"];
	    var song = data.recenttracks.track[0]["name"];
	    var cover = data.recenttracks.track[0].image[3]["#text"];
	    
	    $('.track').html("\
	      "+song+" by \
	      "+artist+"\
	    ");
		//alert(data.recenttracks.track[1].artist["#text"]);
	  });
	});


/*-----------------------------------------------------------------------------------*/
            /*	14. LAZY LOAD IMAGES 
/*-----------------------------------------------------------------------------------*/

$(window).scroll(function(){
var st = $(this).scrollTop(),
    winH = $(this).height(),
    /* you can set this add, 
    depends on where you want the animation to start
    for example if the section height is 100 and you set add of 50,
    that means if 50% of the section is revealed 
    on the bottom of viewport animate text
    */
    add = 150;

$('.lazy').each(function(){
    var pos = $(this).position().top;

    if(st + winH >= pos + add){
        $(this).stop().animate({opacity:1, marginTop:-20},'fast');
    }else{
        $(this).stop().animate({opacity:0, marginTop:0},'fast');
    }
});
});


/*-----------------------------------------------------------------------------------*/
            /*	15. IMAGE FADE-IN ON SCROLL
/*-----------------------------------------------------------------------------------*/

$(document).ready(function(){
 
  // hide our element on page load
  $('#element-to-animate').css('opacity', 0);
 
  $('#element-to-animate').waypoint(function() {
      $('#element-to-animate').addClass('fadeInLeft');
  }, { offset: '50%' });
 
});




