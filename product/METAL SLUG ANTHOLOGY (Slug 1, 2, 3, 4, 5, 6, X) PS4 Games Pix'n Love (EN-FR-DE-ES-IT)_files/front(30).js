/**
 * 2012-2021 INNERCODE
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA (End User License Agreement)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://www.innercode.lt/ps-module-eula.txt
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to info@innercode.lt so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future.
 *
 * @author    Innercode
 * @copyright Copyright (c) 2012 - 2021 INNERCODE, UAB. (https://www.innercode.lt)
 * @license   https://www.innercode.lt/ps-module-eula.txt
 * @package   freeshippingamountdisplay
 * @site      https://www.innercode.lt
 */

$(document).ready(function () {
    updateFSADBlocks(true);

    $(document).ajaxSuccess(function(event, xhr, settings) {
        if (typeof settings.data == 'undefined' || ! settings.data) {
            return;
        }

        var action = getQueryVariable(settings.data, 'action');

        if (fsadCartUpdateActions.indexOf(action) > -1) {
            updateFSADBlocks(false);
        }
    });
});

function updateFSADBlocks(init) {
    let idProduct = typeof fsad_id_product !== 'undefined' ? fsad_id_product : 0;

    $.ajax({
        url: freeShippingGetBlockUrl,
        type: 'post',
        data: {
            action: 'getBlock',
            id_product: idProduct
        },
        success: function(response) {
            var result = $.parseJSON(response),
                $blockCartDisplayWrapper = $(fsadCartDisplaySelector);

            if (fsadDisplayInCart && $blockCartDisplayWrapper.length > 0) {
                $('.shipping-amount-display.cart').remove();

                if (fsadCartDisplayMethod == 'prepend') {
                    $blockCartDisplayWrapper.prepend(result.cartHTML);
                } else {
                    $blockCartDisplayWrapper.append(result.cartHTML);
                }
            }

            $('.shipping-amount-display.product').replaceWith(result.productHTML);

            // Custom location block
            if (result.customHTML) {
                $('.shipping-amount-display.custom').replaceWith(result.customHTML);
            } else {
                $('.shipping-amount-display.custom').html('');
            }
        }
    });
}

function getQueryVariable(string, variable) {
    var vars = string.split('&');

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}