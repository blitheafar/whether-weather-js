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
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2020 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/

var mobileViewSize  = 991;

$(window).load(function(){

  /****************** Start Footer Product Slider Js *******************************************/
  function footerproductslider(){
  var customFooterproductSlider = [
    //['slider className','navigation nextClass','navigation prevClass']
    ['.tvcmsfooter-featured-product .tvmain-featured-product-wrapper-info-box','.tvfooter-featured-product-next','.tvfooter-featured-product-prev'],
    ['.tvcmsfooter-new-product .tvmain-new-product-wrapper-info-box','.tvfooter-new-product-next','.tvfooter-new-product-prev'],
    ['.tvcmsfooter-best-seller-product .tvmain-new-product-wrapper-info-box','.tvfooter-best-seller-product-next','.tvfooter-best-seller-product-prev'],
  ];

  for (var i = 0; i < customFooterproductSlider.length; i++) {
     var owl = $(customFooterproductSlider[i][0]).owlCarousel({
      loop: false,
      dots: false,
      nav: false,
      responsive: {
        0: { items: 1},
        320:{ items: 1, slideBy: 1},
        576:{ items: 1, slideBy: 1},
        768:{ items: 1, slideBy: 1},
        992:{ items: 1, slideBy: 1},
        1200:{ items: 1, slideBy: 1},
        1600:{ items: 2, slideBy: 1},
        1800:{ items: 2, slideBy: 1}
      }
    });

    $(customFooterproductSlider[i][1]).on('click', function(e){
      e.preventDefault();
      $('.'+$(this).attr('data-parent')+' .owl-nav .owl-next').trigger('click');
    });
    
    $(customFooterproductSlider[i][2]).on('click', function(e){
      e.preventDefault();
      $('.'+$(this).attr('data-parent')+' .owl-nav .owl-prev').trigger('click');
    });
  }
}
  /****************** End Footer Product Slider Js *******************************************/
  

  function gettvcmsfooterproductsajax(){
      $.ajax({
        type: 'POST',
        url: gettvcmsfooterproductlink,
        success: function(data)
        {
            $('.tvfooter-product-box-layout').html(data);
            footerproductslider();
            customImgLazyLoad('.tvfooter-product-box-layout');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
 } 
 //setTimeout(function(){gettvcmsfooterproductsajax()},500);
  gettvcmsfooterproductsajax();
});