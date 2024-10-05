/**
 * Script Module.
 *
 * RelatedProducts Merchandizing (Version 3.1.0)
 *
 * @author    Lineven
 * @copyright 2012-2021 Lineven
 * @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 * International Registered Trademark & Property of Lineven
 */

$(document).ready(function() {
	if (typeof lineven_rlp !== 'undefined') {
		RelatedProducts.initialize();
	}
});
var RelatedProducts = {

	/**
	 * Iniatialize.
	 */
	initialize: function()
	{
        if (typeof lineven_rlp !== 'undefined' && typeof lineven_rlp.datas !== 'undefined') {
            // Refreshing
            $(document).ready(function () {
                if ($('.lineven-relatedproducts-block').length) {
                    $('.lineven-relatedproducts-block').each(function (index) {
                        if ($(this).attr('data-async-mode') == 1) {
                            if ($(this).attr('data-in-tab') == '0') {
                                $(this).fadeIn();
                                $(this).fadeOut();
                            }
                            RelatedProducts.Page.refresh($(this));
                        }
                        // For order page only
                        if ($(this).attr('data-hook-code') == 'OOP') {
                            if (lineven_rlp.datas.refresh_mode != 'NOTHING') {
                                var element_object_oop = $(this);
                                prestashop.on('updateCart', function () {
                                    RelatedProducts.Page.OnOrderPage.initialize(element_object_oop);
                                });
                            }
                        }
                    });
                }
            });
        }
	},

    /**
     * Page.
     */
    Page: {

        /**
         * On order page.
         */
        OnOrderPage: {

            /**
             * Iniatialize.
             *
             * @param object element_object Element Object
             */
            initialize: function(element_object)
            {
                if (lineven_rlp.datas.refresh_mode == 'AJAX') {
                    RelatedProducts.Loader.show(element_object);
                }
                if (lineven_rlp.datas.refresh_delay == 0) {
                    RelatedProducts.Page.OnOrderPage.refresh(element_object);
                } else {
                    setTimeout(function(){
                        RelatedProducts.Page.OnOrderPage.refresh(element_object);
                    }, lineven_rlp.datas.refresh_delay);
                }
            },

            /**
             * Refresh products list.
             *
             * @param object element_object Element Object
             */
            refresh: function(element_object)
            {
                if (lineven_rlp.datas.refresh_mode == 'RELOAD') {
                    window.location = lineven_rlp.urls.cart_url;
                } else {
                    if (lineven_rlp.datas.refresh_mode == 'AJAX') {
                        RelatedProducts.Page.refresh(element_object);
                    }
                }
            }
        },

        /**
         * Refresh products list.
         *
         * @param object element_object Element Object
         */
        refresh: function(element_object)
        {
            $.ajax({
                url: lineven_rlp.urls.service_dispatcher_ssl_url,
                type: 'POST',
                data: {
                    relatedproducts_service_controller: "Refresh",
                    relatedproducts_service_controller_step: "init_content",
                    hook_code: element_object.attr('data-hook-code'),
                    controller_name: element_object.attr('data-controller'),
                    id_related_product: element_object.attr('data-id-related-product'),
                    in_tab: element_object.attr('data-in-tab'),
                },
                dataType: "json",
                cache: false,
                global: false,
                success: function (jsonData, textStatus, jqXHR) {
                    if (jsonData != undefined) {
                        if (element_object.attr('data-in-tab') == '0') {
                            if (jsonData.html != undefined) {
                                element_object.html(jsonData.html);
                                element_object.fadeIn(500);
                            } else {
                                element_object.fadeOut(500, function() {
                                    element_object.fadeOut();
                                    element_object.empty();
                                });
                            }
                        } else {
                            $('.lineven-relatedproducts-block').each(function(index) {
                                if ($(this).attr('data-hook-code') == 'OPP' &&
                                    element_object.attr('data-in-tab') == '1' &&
                                    $(this).attr('data-async-mode') == 1) {
                                    if (jsonData.hasOwnProperty($(this).attr('data-section-key'))) {
                                        $(this).html(jsonData[$(this).attr('data-section-key')]);
                                    }
                                }
                            });
                        }
                    } else {
                        element_object.fadeOut(500, function() {
                            element_object.fadeOut();
                            element_object.empty();
                        });
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    element_object.empty();
                },
                complete: function (jqXHR, textStatus) {
                    $(document).ready(function () {
                        if (element_object.attr('data-template-type') == 'theme') {
                            RelatedProducts.ProductsListComments.displayPrestashopProductCommentsForTheme();
                        } else {
                            RelatedProducts.ProductsListComments.displayHomeCommentsProductComments();
                        }
                        RelatedProducts.Loader.hide(element_object);
                    });
                }
            });
        },

        /**
         * On add to cart product.
         */
        onAddToCartProduct: function(object)
        {
            $.ajax({
                url: $(object).attr('data-cart-url'),
                type: 'POST',
                data: {
                    ajax: true
                },
                cache: false,
                global: false,
                success: function (jsonData, textStatus, jqXHR) {
                    window.top.location = lineven_rlp.urls.cart_url;
                }
            });
        }
    },

    /**
     * Products list commment.
     */
    ProductsListComments: {
        /**
         * Display products comments grade for classic templates.
         * @param int id_product Product Id
         * @param int average_grade Average grade
         * @param int comment_nb Comment nb
         */
        displayPrestashopProductCommentsForClassic: function(id_product, average_grade, comment_nb) {
            $('.lrlp-product-list-reviews-ps_productcomments_'+id_product+' .grade-stars').rating({ grade: average_grade, starWidth: 16 });
            $('.lrlp-product-list-reviews-ps_productcomments_'+id_product+' .comments-nb').html('('+comment_nb+')');
            $('.lrlp-product-list-reviews-ps_productcomments_'+id_product).css('visibility', 'visible');
        },

        /**
         * Display Prestashop products comments grade for theme template.
         */
        displayPrestashopProductCommentsForTheme: function() {
            if (lineven_rlp.datas.partners_reviews_module == 'productcomments') {
                $('.product-list-reviews').each(function() {
                    var id_product = $(this).closest('.product-miniature').attr('data-id-product');
                    var product_review_object = $(this);
                    if (id_product) {
                        $.get(lineven_rlp.datas.partners_reviews_module_grade_url, { id_product: id_product }, function(jsonResponse) {
                            var jsonData = false;
                            try {
                                jsonData = JSON.parse(jsonResponse);
                            } catch (e) {
                            }
                            if (jsonData) {
                                if (jsonData.id_product && jsonData.comments_nb) {
                                    $('.grade-stars', product_review_object).rating({ grade: jsonData.average_grade, starWidth: 16 });
                                    $('.comments-nb', product_review_object).html('('+jsonData.comments_nb+')');
                                    product_review_object.closest('.thumbnail-container').addClass('has-reviews');
                                    product_review_object.css('visibility', 'visible');
                                }
                            }
                        });
                    }
                });
            } else {
                RelatedProducts.ProductsListComments.displayHomeCommentsProductComments();
            }
        },

        /**
         * Display Homecomments products comments grade.
         */
        displayHomeCommentsProductComments: function() {
            if (lineven_rlp.datas.partners_reviews_module == 'homecomments' ||
                lineven_rlp.datas.partners_reviews_module == 'hook') {
                if (typeof LinevenHomeComments !== 'undefined' &&
                    typeof LinevenHomeComments.ProductsList !== 'undefined') {
                    LinevenHomeComments.ProductsList.initialize();
                }
            }
        }
    },

    /**
     * Loader.
     */
    Loader: {

        /**
         * Show.
         * @param object element_object Element Object
         */
        show: function(element_object) {
            if (element_object.children().length > 0) {
                element_object.busyLoad("show", {
                    action: 'show',
                    color: "#83d3e4",
                    maxSize: "90px",
                    minSize: "90px",
                    containerClass: "rlp-busyload-container",
                    containerItemClass: "rlp-busyload-container-item",
                    spinnerClass: "rlp-busyload-spinner",
                    background: 'rgba(255, 255, 255, 0.6)'
                });
                var handle = setTimeout(function() {
                    RelatedProducts.Loader.hide(element_object)
                }, 60000);
            }
        },

        /**
         * Hide.
         * @param object element_object Element Object
         */
        hide: function(element_object) {
            element_object.busyLoad("hide");
        }
    }
};
