/**
* 2007-2020 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2020 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

// function addMegaSticky()
// {
//     var _header = $('#header').height();
//     if ($(this).scrollTop() > _header) {
//         $('.container_tv_megamenu').addClass('tverMenu-top animated fadeInDown');
//     } else {
//         $('.container_tv_megamenu').removeClass('tverMenu-top animated fadeInDown');
//     }
// } 

// $(window).scroll(function() {
//     if($(window).width() > 1006) {
//         addMegaSticky();
//     }
    
// });

// $(window).resize(function(){
//     if ($(window).width() < 1007) {
//         $('.tv-menu-horizontal').removeClass('tverMenu-top animated');
//     }
// });

$(window).load(function(){
    var isCallMenu = false;
    function getMegaMenuAjax(){        
        if(!isCallMenu){
            $.ajax({
                type: 'POST',
                url: gettvcmsmegamenulink,
                success: function(data){
                    if(document.body.clientWidth <= 991){
                        $('#tvmobile-megamenu').html(data);
                        //customImgLazyLoad('#tvmobile-megamenu');
                    }else{
                        $('#tvdesktop-megamenu').html(data);    
                        //customImgLazyLoad('#tvdesktop-megamenu');
                    }
                    megaMenuSlider();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            });
        }
        isCallMenu = true;
    }
    var isLoad = false;
  $(document).on('mouseenter','#tvdesktop-megamenu li',function(e){
    if(!isLoad){
      customImgLazyLoad('#tvdesktop-megamenu');
      isLoad= true;
    }
  });
    $(document).on('click', '.tv-menu-horizontal .icon-drop-mobile', function() {
        $(this).next().toggle(100);
        $(this).toggleClass('opened');
        customImgLazyLoad('#tvdesktop-megamenu');
    });
    
    setTimeout(function(){ getMegaMenuAjax(); }, 500);
    //getMegaMenuAjax();
    $(window).resize(function(){
        megaMenuSlider();
    });

    //*************************start top-menu js *************************/
    function responsiveMenuPopup($this){
        if (document.body.clientWidth  > 991) {
            var wrapWidthPopup = $($this).find('.tv-sub-menu').outerWidth(true);
            if (wrapWidthPopup !== null && wrapWidthPopup !== undefined) {
                var posliWidth  = $($this).offset();
                var menuLeft = posliWidth.left;
                var menuWidth = $('.tvcms-header-menu').width();
                if($('body').hasClass('lang-rtl')){
                    menuLeft = (menuWidth - (menuLeft));//make right offset
                }
                var posWraper = $('.tvcms-header-menu').offset();
                var pos = $($this).offset();
                var xLeft = 0;
                if ((menuLeft + wrapWidthPopup) > menuWidth) 
                {
                    xLeft = (menuLeft + wrapWidthPopup) - menuWidth;
                    if (menuLeft > ((menuLeft - xLeft)-158)){   
                        xLeft = ((menuLeft - xLeft)-158);
                    }
                    if(xLeft > 0){
                        xLeft = 0;
                    }
                    if($('body').hasClass('lang-rtl')){
                        $($this).find('.tv-sub-menu.menu-dropdown').css('left',xLeft);
                    }else{
                        $($this).find('.tv-sub-menu.menu-dropdown').css('right',xLeft);
                    }
                }
            }
        }
    }
    $(document).on('touchstart mouseover','.container_tv_megamenu ul.menu-content li.level-1', function(e){
        responsiveMenuPopup(this);
    });
//************************************end Top-menu js******************************************************/

    function megaMenuSlider() {
        $('.tv-mega-menu-slider .tv-megamenu-slider-wrapper').trigger('destroy.owl.carousel');        
        $('.tv-mega-menu-slider .tv-megamenu-slider-wrapper').owlCarousel({
            loop: true,
            dots: false,
            autoplay:false,
            autoplayTimeout:5000,
            autoplayHoverPause:false,
            nav: false,
            items : 1, // THIS IS IMPORTANT
            singleItem: true,
            responsive: {
                0: { items: 1, slideBy: 1},
                320:{ items: 1, slideBy: 1},
                400:{ items: 1, slideBy: 1},
                768:{ items: 1, slideBy: 1},
                992:{ items: 2, slideBy: 1},
                1200:{ items: 3, slideBy: 1},
                1600:{ items: 3, slideBy: 1},
                1800:{ items: 4, slideBy: 1}
            },
        });
    }
    $(document).on('click','.tvmega-menu-slider-prev',function(){
        $(this).parent().parent().parent().parent().find('.tv-megamenu-slider-wrapper .owl-nav .owl-prev').trigger('click');
    });

    $(document).on('click','.tvmega-menu-slider-next',function(){
        $(this).parent().parent().parent().parent().find('.tv-megamenu-slider-wrapper .owl-nav .owl-next').trigger('click');
    });

    $(document).on('click', '#tv-menu-horizontal .title-menu-mobile a', function(){
        if (document.body.clientWidth <= 991) {
            megaMenuSlider();
            if($('#tv-menu-horizontal ul.menu-content').hasClass('open')) {
                $('#tv-menu-horizontal ul.menu-content').removeClass('open');
                $('#tv-menu-horizontal .title-menu-mobile').removeClass('open');
            } else {
                $('#tv-menu-horizontal ul.menu-content').addClass('open');
                $('#tv-menu-horizontal .title-menu-mobile').addClass('open');
            }
        }
    });

    $(document).on('click', '#tv-menu-horizontal .menu-content .tvmega-menu-title a', function(){
        $('#tv-menu-horizontal .title-menu-mobile a').trigger('click');
    });   
});