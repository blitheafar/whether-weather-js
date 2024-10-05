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
*/

var mobileViewSize  = 1199;
var dropDownParentClass = '.tvcmsvertical-menu .tvallcategories-wrapper';
var dropDownClass = '.tvcmsvertical-menu .tvverticalmenu-dropdown';

$(window).load(function(e){

  function getVerticalMenuAjax(){
     $.ajax({
        type: 'POST',
        url: gettvcmsverticalmenulink,
        success: function(data)
        {
            $('.tvcmsvertical-menu-wrapper-data').html(data);
            verticalMenuMobileView();
            verticalMenuLengthCategory();            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
  }
  //customImgLazyLoad('.tvcmsvertical-menu-wrapper-data');
  setTimeout(function(){getVerticalMenuAjax()},500);
  //getVerticalMenuAjax();
  var isLoad = false;
  $(document).on('mouseenter','#tvverticalmenu li',function(e){
    if(!isLoad){
      customImgLazyLoad('.tvcmsvertical-menu-wrapper-data');
      isLoad= true;
    }
  });
  /******************** Start Vertical Menu Js ******************************/
  //Toggle dropdown
  function tvDropDown(parentClass, dropdownClass)
  {
    $(document).on('click',parentClass,function(e){
      e.preventDefault();
      if ($(dropdownClass).hasClass('open')) {
        $(parentClass).removeClass('open');
        if(document.body.clientWidth <= mobileViewSize){
          $(dropdownClass).removeClass('open');
          $('.modal-backdrop.fade.in').remove();
        } else {
          $(dropdownClass).removeClass('open').stop(false).slideUp(500, "swing");
        }
      } else {
        removeDefaultDropdown();
        $(parentClass).addClass('open');
        if(document.body.clientWidth <= mobileViewSize){
          $(dropdownClass).addClass('open');
          if ($('body').find('.modal-backdrop.fade').html() === undefined){
            $('body').append('<div class="modal-backdrop fade in"></div>');
          }
        } else {
          $(dropdownClass).addClass('open').stop(false).slideDown(500, "swing");
        }
      }
    });
  }
  

  $(document).on('click','.modal-backdrop.fade',function(){
    // console.log('asdasd');
    $('.tvcmsvertical-menu .tvallcategories-wrapper, .tvcmsvertical-menu .tvverticalmenu-dropdown').removeClass('open');
    $(this).remove();
  });

  //hide vertical menu
  function hideTvcmsVerticalCategory(vertical_menu_length)
  {
    var count_cat = 0; 
    var total = vertical_menu_length + 2;
    $('.tvverticalmenu-dropdown li.level-1').each(function(){
      count_cat++;
      if(count_cat >= total){
        $(this).hide();
      }
    });
    if ('.tvvertical-menu-show-hide-category')
    $('.tvvertical-menu-show-hide-category').removeClass('open');
    $('.tvvertical-menu-show-hide-category .tvvertical-hide-category').hide();
    $('.tvvertical-menu-show-hide-category .tvvertical-show-category').show();
  }

  //show vertical menu
  function showTvcmsVerticalCategory()
  {
    $('.tvverticalmenu-dropdown li.level-1').each(function(){
      $(this).show();
    });

    $('.tvvertical-menu-show-hide-category').addClass('open');
    $('.tvvertical-menu-show-hide-category .tvvertical-hide-category').show();
    $('.tvvertical-menu-show-hide-category .tvvertical-show-category').hide();
  }
 
  
  // $(".tvallcategories-wrapper .tvleft-right-title-toggle").on('click',function(e){
  //   // $('.tv-dropdown').removeClass('open').stop(false).slideUp(500, "swing");
  //   var obj = $(this).parent().parent().parent().parent();
  //   if (obj.find('.tvverticalmenu-dropdown').hasClass('open')) {
  //     obj.find('.tvverticalmenu-dropdown').removeClass('open').stop(false).slideUp(500, "swing");
  //   } else {
  //     obj.find('.tvverticalmenu-dropdown').addClass('open').stop(false).slideDown(500, "swing");
  //   }
  //   e.stopPropagation();
  // });

  $('.tvverticalmenu-dropdown .tvvertical-menu-dropdown-icon').on('click',function(e){
    mobileViewDropdownSubMenu(this);      
  });


  function mobileViewDropdownSubMenu(obj) {
    if(document.body.clientWidth > mobileViewSize) { 
      $(obj).parent().find('.tvvertical-menu-dropdown-wrapper').first().slideToggle(500,function() {
        if($(obj).is(":hidden")) {
          $(obj).parent().find('.tvvertical-toggle-up').first().show();
          $(obj).parent().find('.tvvertical-toggle-down').first().hide();
        }else{
          $(obj).parent().find('.tvvertical-toggle-up').first().hide();
          $(obj).parent().find('.tvvertical-toggle-down').first().show();
        }
      });
      customImgLazyLoad('.tvcmsvertical-menu-wrapper-data');
    }
  }


  // $(window).resize(function(){
  //   verticalMenuLengthCategory();
  // });
  function verticalMenuLengthCategory(){
    var vertical_menu_length = 6;
    /*if(document.body.clientWidth >= 1400){ 
      vertical_menu_length = 6;
    } else if (document.body.clientWidth <= 1399 && document.body.clientWidth >= 1200) {
      vertical_menu_length = 4;
    } else if (document.body.clientWidth <= 1199 && document.body.clientWidth >= 992) {
      vertical_menu_length = 5;
    } else if (document.body.clientWidth <= 991 && document.body.clientWidth >= 768) {
      vertical_menu_length = 4;
    } else {
      vertical_menu_length = 4;
    }*/
    

    if($('.tvverticalmenu-dropdown li.level-1').length > vertical_menu_length){
      hideTvcmsVerticalCategory(vertical_menu_length);
      if ($('.tvcmsverticalmenu .tvverticalmenu-dropdown').find('.tvvertical-menu-show-hide-category').html() === undefined) {
         var more_cat = $('.more_title').text();
         var less_cat = $('.less_title').text();
          $('.tvcmsverticalmenu .tvverticalmenu-dropdown').append('<li class="tvvertical-menu-show-hide-category"><a href="#"><div class=\'tvvertical-show-category\'><span>'+  more_cat +'</span><span class="tvvertical-menu-dropdown-icon1"><i class=\'material-icons tvvertical-menu-dropdown-icon tvvertical-menu-more-hide\'>&#xe313;</i></span></div><div class=\'tvvertical-hide-category\'><span>'+ less_cat +'</span><span class="tvvertical-menu-dropdown-icon1"><i class=\'material-icons tvvertical-menu-dropdown-icon tvvertical-menu-more-hide\'>&#xe316;</i></span></div></a></li>');
          $('.tvverticalmenu-dropdown .tvvertical-hide-category').hide();
      }
      $(document).on('click', '.tvvertical-menu-show-hide-category', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
          hideTvcmsVerticalCategory(vertical_menu_length);
        }
        else{
          showTvcmsVerticalCategory();
        }
      })
    }
  }

  
  // tvDropDown(dropDownParentClass, dropDownClass);
  verticalMenuMobileView();
  // $(window).on('load resize',function(){
  //   verticalMenuProductSlider();
  // });

  
  function verticalMenuMobileView()
  {
    $('.tv-vertical-menu-slider .tv-verticalmenu-slider-wrapper').owlCarousel({
      loop: true,
      dots: false,
      nav: false,
      items : 1, // THIS IS IMPORTANT
      singleItem: true,
      responsive: {
         0: { items: 1, slideBy: 1},
        320:{ items: 1, slideBy: 1},
        400:{ items: 1, slideBy: 1},
        480:{ items: 2, slideBy: 1},
        768:{ items: 2, slideBy: 1},
        992:{ items: 3, slideBy: 1},
        1200:{ items: 2, slideBy: 1},
        1400:{ items: 2, slideBy: 1},
        1600:{ items: 3, slideBy: 1},
        1800:{ items: 4, slideBy: 1}
      },
    });
    $('.tvvertical-menu-slider-prev').click(function(e){
      e.preventDefault();
      $('.tv-verticalmenu-slider-wrapper .owl-nav .owl-prev').trigger('click');
    });

    $('.tvvertical-menu-slider-next').click(function(e){
      e.preventDefault();
      $('.tv-verticalmenu-slider-wrapper .owl-nav .owl-next').trigger('click');
    });
  }
  $(document).on('click','.tvcmsvertical-menu .tvverticalmenu-dropdown .parent span i', function(){
    mobileViewSize = 1199;
    if (document.body.clientWidth <= mobileViewSize) {
      // console.log(';asdasd');
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).parent().parent().next('.menu-dropdown').removeClass('open').stop(false).slideUp(500, "swing");
      } else {
        $(this).addClass('open');
        $(this).parent().parent().next('.menu-dropdown').addClass('open').stop(false).slideDown(500, "swing");
      }
    }
  });
  /******************** End Vertical Menu Js ******************************/


  // close dropdown When open other dropdown in mobile view
  function removeDefaultDropdown()
  {
    // Header My Account Dropdown
    $('#header .tv-account-dropdown').removeClass('open');
    $('#header').find('.tvcms-header-myaccount .tv-myaccount-btn').removeClass('open');
    $('#header').find('.tvcms-header-myaccount .tv-account-dropdown').removeClass('open').hide();

    // Header Search Dropdown
    // $('#header .tvcmsheader-search .tvsearch-open').show();
    // $('#header .tvcmsheader-search .tvsearch-close').hide();
    // $('#header .tvcmsheader-search .tvsearch-header-display-wrappper').removeClass('open');

        // Header My Account Dropdown
    $('#header .tv-account-dropdown').removeClass('open');
    $('#header').find('.tvcms-header-myaccount .tv-myaccount-btn').removeClass('open');
    $('#header').find('.tvcms-header-myaccount .tv-account-dropdown').removeClass('open').hide();

    if (document.body.clientWidth <= mobileViewSize) {
      // horizontal menu
      $('#tvcms-mobile-view-header .tvmenu-button').removeClass('open');
      $('#tvcmsmobile-horizontal-menu #tv-top-menu').removeClass('open');
    
      // Cart Dropdown
      $('.hexcms-header-cart .tvcmscart-show-dropdown').removeClass('open');

      // Vertical Menu DropDown 
      // $('.tvcmsvertical-menu .tvallcategories-wrapper .tvleft-right-title-toggle, .tvcmsvertical-menu .tvverticalmenu-dropdown').removeClass('open');
    } else {
      // Vertical Menu DropDown
      $('.tvcmsvertical-menu .tvallcategories-wrapper').removeClass('open');
      $('.tvcmsvertical-menu .tvverticalmenu-dropdown').removeClass('open').removeAttr('style');
    }
  }
});
