/**
* galslidereverywhere module javascript file.
*
* @author    Webproggi <webproggi@gmail.com>
* @copyright Copyright &copy; 2010-2021
* @license   http://www.opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
* @version 0.2
*/

//when document is loaded...
$(document).ready(function(){
    if ((".galslidereverywhere_gallery").length > 0) {
        $(".galslidereverywhere_gallery").fancybox({
            maxWidth    : 820,
            maxHeight   : 670,
            helpers : {
                overlay : {
                    opacity: 0.4,
                    locked: false
                }
            }
        });    
    }
    if ((".galslider_slider_wrapper").length > 0) {
   	    $('.galslider_slider_wrapper ul.galslidereverywhere_block').each(function(index, element) {
   	        var idElemSlider = parseInt($(element).attr("data-id"));
   	        
            var galslider_controls = true;
    	    if ($('#galslider_controls_' + idElemSlider).val()=='0')
    		   galslider_controls = false;
    	
    	    var galslider_pager = true;
            if ($('#galslider_pager_' + idElemSlider).val()=='0')
               galslider_pager = false;
               
            var galslider_loop = true;
            if ($('#galslider_loop_' + idElemSlider).val()=='0')
               galslider_loop = false;               
        
    	    if (parseInt($('#galslider_cnt_' + idElemSlider).val()) <= 1){
    		   galslider_pager = false;
    		   galslider_loop = false;
               galslider_controls = false;
    	    }
    		
    	    var galslider_width = $('#galslider_width_' + idElemSlider).val();
    	    var galslider_speed = $('#galslider_speed_' + idElemSlider).val();
			var galslider_anim = $('#galslider_anim_' + idElemSlider).val();
            var galslider_slide_count = $('#galslider_slide_count_' + idElemSlider).val();
            var galslider_slide_margin = $('#galslider_slide_margin_' + idElemSlider).val();
            var windowWidth = $(window).width();

            if (windowWidth < 768) {
                galslider_slide_count = 1;
            }

            if (parseInt(galslider_width) == 0){
                $('.galslider_slider_wrapper ul#obj_sld_' + idElemSlider).bxSlider({
            		auto: galslider_loop,
            		pause: parseInt(galslider_speed),
            		mode: galslider_anim,
              		captions: true,
              		controls: galslider_controls,
              		pager: galslider_pager,
              		autoHover: true,
        	   });
            } else {
                $('.galslider_slider_wrapper ul#obj_sld_' + idElemSlider).bxSlider({
            		auto: galslider_loop,
            		slideWidth: parseInt(galslider_width),
            		pause: parseInt(galslider_speed),
            		mode: galslider_anim,
              		captions: true,
              		controls: galslider_controls,
              		pager: galslider_pager,
              		autoHover: true,
                    minSlides: galslider_slide_count,
                    maxSlides: galslider_slide_count,
                    moveSlides: 1,
                    slideMargin: parseInt(galslider_slide_margin),
        	   });
               
               if (windowWidth < 768) {
                   $(".galslidereverywhere_slider_popup").fancybox({
                        maxWidth    : 820,
                        maxHeight   : 670,
                        helpers : {
                            overlay : {
                                opacity: 0.4,
                                locked: false
                            },
                            title : {
                                type : 'inside',
                                position: 'bottom'
                            }
                        }
                    });   
                } else {
                    $(".galslidereverywhere_slider_popup").fancybox({
                        maxWidth    : 820,
                        maxHeight   : 670,
                        helpers : {
                            overlay : {
                                opacity: 0.4,
                                locked: false
                            }
                        }
                    });
                } 
            }
        });
    }
});