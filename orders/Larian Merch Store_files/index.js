/* eslint-disable */

const initCounter = function initCounter() {
  const counter = $('.product-single__quantity');
  const counterDecrement = $('.product-single__quantity__decrement');
  const counterIncrement = $('.product-single__quantity__increment');
  const input = $('.product-single__quantity input');
  const inputMax = parseInt(input.prop('max')) || 999;

  input.change(() => {
    input.val(function(i, oldVal) {
      if (oldVal <= 0) {
        return 1;
      }

      return Math.min(+oldVal || 1, inputMax);
    });
  });

  counterIncrement.click(function() {
    input.val(function(i, oldVal) {
      const newVal = parseInt(oldVal, 10) + 1;

      return Math.min(newVal, inputMax);
    });
  });

  counterDecrement.click(function() {
    input.val(function(i, oldVal) {
      return Math.max(1, oldVal - 1);
    });
  });
};

if ($('.product-single__quantity')) {
  initCounter();
}

const quoteSlider = document.querySelector('.js-quote-slider');
const categoriesSlider = document.querySelector('.js-categories-slider');
const prevButton = document.querySelector('.js-categories .js-prev');
const nextButton = document.querySelector('.js-categories .js-next');
const multibannerSlider = document.querySelector('.js-multibanner');

function initQuoteSlider() {
  if (quoteSlider) {
    const flkty = new Flickity(quoteSlider, {
      prevNextButtons: false,
      wrapAround: true,
      setGallerySize: false,
    });
  }
}

function initCategoriesSlider() {
  if (categoriesSlider) {
    const flkty = new Flickity(categoriesSlider, {
      // setGallerySize: true,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
      // contain: true,
      cellAlign: 'left',
    });

    prevButton.addEventListener('click', () => {
      flkty.previous();
    });

    nextButton.addEventListener('click', () => {
      flkty.next();
    });
  }
}

function initMultibanner() {
  if (multibannerSlider) {
    const flkty = new Flickity(multibannerSlider, {
      prevNextButtons: false,
      fade: true,
      setGallerySize: true,
      contain: false,
      wrapAround: true,
      autoPlay: 8000,
      adaptiveHeight: true,
    });
  }
}

initQuoteSlider();
initCategoriesSlider();
initMultibanner();

const handleProductOptionsChange = function handleProductOptionsChange() {
  $('[name*="sylius_add_to_cart[cartItem][variant]"]').on('change', () => {
    let selector = '';
    $('#sylius-product-adding-to-cart select[data-option]').each((index, element) => {
      const select = $(element);
      const option = select.find('option:selected').val();
      selector += `[data-${select.attr('data-option')}="${option}"]`;
    });

    $('#sylius-product-adding-to-cart input[type=radio][data-option]:checked').each((index, element) => {
      const select = $(element);
      const option = select.val();
      selector += `[data-${select.attr('data-option')}="${option}"]`;
    });

    const price = $('#sylius-variants-pricing')
      .find(selector)
      .attr('data-value');
    const catalogPrice = $('#sylius-variants-pricing')
      .find(selector)
      .attr('data-catalogValue');

    if (price !== undefined) {
      if (catalogPrice) {
        $('#product-price').html('<span class="product__old-price">' + catalogPrice + '</span><span>' + price + '</span>');
      } else {
        '#product-price'.html('<span>' + price + '</span>');
      }
      $('button[type=submit]').removeAttr('disabled');
    } else {
      $('#product-price').text($('#sylius-variants-pricing').attr('data-unavailable-text'));
      $('button[type=submit]').attr('disabled', 'disabled');
    }
  });
};

const handleProductVariantsChange = function handleProductVariantsChange() {
  $('[name="sylius_add_to_cart[cartItem][variant]"]').on('change', event => {
    const price = $(event.currentTarget)
      .parents('tr')
      .find('.sylius-product-variant-price')
      .text();
    $('#product-price').text(price);
  });
};

$.fn.extend({
  variantPrices() {
    if ($('#sylius-variants-pricing').length > 0) {
      handleProductOptionsChange();
    } else if ($('#sylius-product-variants').length > 0) {
      handleProductVariantsChange();
    }
  },
});

// =========================================
// show table of sizes
// =========================================

$('.js-sizes').click(function() {
  event.preventDefault();
  $('.ui.modal#table-of-sizes').modal('show');
});

// =========================================
// remove flash message after 5 seconds
// =========================================

$('document').ready(function() {
  if ($('.sylius-flash-message')) {
    setTimeout(function() {
      $('.sylius-flash-message').css({ '-webkit-transform': 'translateY(-120%)', opacity: '0' });
    }, 20000);
  }
});

// =========================================
// gallery in product single view
// =========================================

if ($('.js-gallery-thumbnail')) {
  $('.js-gallery-thumbnail').click(function(event) {
    event.preventDefault();
    $(this).addClass('--active');
    $('.js-gallery-thumbnail')
      .not(this)
      .removeClass('--active');
    $('.js-gallery-img').removeClass('--active');
    $('[data-index="' + $(this).data('index') + '"]').addClass('--active');
  });
}

// =========================================
// gallery - glightbox video and images
// =========================================

function initGallery() {
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    onOpen: () => {},
    beforeSlideLoad: (slide, data) => {
      // Need to execute a script in the slide?
      // You can do that here...
    },
  });
}

if ($('.glightbox')) {
  initGallery();
}

// =========================================
// show preorder modal
// =========================================

$('.js-modal-preorder').click(function() {
  event.preventDefault();
  $('.ui.modal#preorder-confirmation').modal('show');
});

// =========================================
// close preorder modal
// =========================================

$('.js-close-preorder-modal').click(function() {
  event.preventDefault();
  $('.ui.modal#preorder-confirmation').modal('hide');
});

$('.modal-preorder #submit').click(function() {
  /* when the submit button in the modal is clicked, submit the form */
  $('#sylius-product-adding-to-cart').submit();
  $('.ui.modal#preorder-confirmation').modal('hide');
});

// =========================================
// toggle menu
// =========================================
// =========================================
// init version
// =========================================
$('.js-menu-toggle').click(function() {
  event.preventDefault();
  $(this).toggleClass('-opened');
  $('.js-menu').toggleClass('-opened');
});

$('.js-close').click(function() {
  $('.js-menu-toggle').removeClass('-opened');
  $('.js-menu').removeClass('-opened');
});

// =========================================
// newsletter modal
// =========================================
$('.js-newsletter').click(function(e) {
  e.preventDefault();
  $('#js-newsletter-modal').addClass('visible');
});

$('.newsletter-modal__close').click(function(e) {
  e.preventDefault();
  $('#js-newsletter-modal').removeClass('visible');
});

// =========================================
// set same country for billing address
// =========================================
$('#sylius-shipping-address #sylius_checkout_address_billingAddress_countryCode').on('change', function(e) {
  $('#sylius-billing-address #sylius_checkout_address_shippingAddress_countryCode')
    .val(this.value)
    .change();
});

// =========================================
// set copyright current year
// =========================================
const copyright = `© ${new Date().getFullYear()} Larian Studios. Larian Studios, Divinity, Divinity Original Sin and the Larian Studios logo are registered trademarks of the Larian Studios group entities. © ${new Date().getFullYear()} Wizards of the coast. All rights reserved. Wizards of the Coast, Baldur's Gate, Dungeons & Dragons, D&D, and their respective logos are registered trademarks of Wizards of the Coast LLC.`;
$('.footer .copyright__content p').text(copyright);

// =========================================
// init select 2 for related product on product single view
// =========================================
$(document).ready(function() {
  $('#related-products').select2({
    minimumResultsForSearch: -1,
    templateResult: formatState,
    templateSelection: formatState,
    width: 'resolve',
  });

  function formatState(opt) {
    if (!opt.id) {
      return opt.text;
    }

    var optimage = $(opt.element).attr('data-image');
    if (!optimage) {
      return opt.text;
    } else {
      var $opt = $(
        `<span><img src="${optimage}" style="width: 32px; max-height: 22px; object-fit: contain;" />${opt.text}</span>`,
      );
      return $opt;
    }
  }

  $('#related-products').on('select2:select', function(e) {
    const productUrl = $('#related-products option:selected').attr('data-url');
    window.location = productUrl;
  });
});

// =========================================
// change region menu
// =========================================

$(document).ready(function() {
  $('.header__left-menu').mouseenter(function() {
    $('.change-region').slideDown(200);
    $('.change-region').addClass('.menu-active');
  });

  // $(".change-region li").click(function (event) {
  //   event.preventDefault();

  //   $(".change-region li.active").removeClass("active");
  //   $(this).addClass("active");

  //   setTimeout(function () {
  //     $(".change-region").slideUp(200);
  //   }, 500);
  // });

  $('.header__left-menu').mouseleave(function() {
    setTimeout(function() {
      $('.change-region').slideUp(200);
      $('.change-region').removeClass('.menu-active');
    }, 300);
  });
});

// =========================================
// mobile menu
// =========================================

$(document).ready(function() {
  $('.header__btn--menu').click(function(event) {
    event.preventDefault();
    $('.menu-mobile').toggleClass('-show');
    $('.header__btn--menu').toggleClass('-opened');
    $('.menu-overlay').toggle();
  });
});

// =========================================
// mobile menu - custom select box
// =========================================

// $(document).ready(function () {
//   var customSelect = $(".custom-select select");

//   var selectedDiv = $("<div>").addClass("select-selected")
//     .html(customSelect.find("option:selected").html());
//   $(".custom-select").append(selectedDiv);

//   var optionsListDiv = $("<div>").addClass("select-items select-hide");

//   customSelect.find("option").each(function () {
//     // individual option DIVs
//     var optionDiv = $("<div>").html($(this).html());
//     optionDiv.on("click", function () {

//       var selectedIndex, selectElement, selectedText;

//       selectElement = $(this).parent().parent().find("select");
//       selectedIndex = $(this).index();
//       selectedText = $(this).html();

//       selectElement.prop("selectedIndex", selectedIndex);
//       selectedDiv.html(selectedText);
//     });

//     optionsListDiv.append(optionDiv);
//   });

//   $(".custom-select").append(optionsListDiv);

//   // Handle click on selected div
//   selectedDiv.on("click", function (event) {
//     event.stopPropagation();
//     closeSelect(this);
//     console.log(event);
//     optionsListDiv.toggleClass("select-hide");
//     selectedDiv.toggleClass("select-arrow-active");
//   });

//   function closeSelect(selectedElement) {
//     $(".select-selected").not(selectedElement).removeClass("select-arrow-active");
//     $(".select-items").not(selectedElement).addClass("select-hide");
//   }

//   // Close all selects on document click
//   $(document).on("click", function () {
//     closeSelect(null);
//   });

// });
