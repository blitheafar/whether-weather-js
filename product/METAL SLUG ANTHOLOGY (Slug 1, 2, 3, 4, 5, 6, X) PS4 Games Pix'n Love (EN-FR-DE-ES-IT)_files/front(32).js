/**
 * NOTICE OF LICENSE
 *
 * This file is licenced under the Software License Agreement.
 * With the purchase or the installation of the software in your application
 * you accept the licence agreement.
 *
 * @author    Presta.Site
 * @copyright 2019 Presta.Site
 * @license   LICENSE.txt
 */
var pspc_init_working = false;

if (typeof updateDisplay === 'function') {
    var updateDisplay_pspc_original = updateDisplay;
    updateDisplay = function () {
        updateDisplay_pspc_original();
        pspc_refreshProductTimers();
    }
}

$(function () {
    pspc_initCountdown();

    $(document).on('click', '#grid', function(e){
        e.preventDefault();
        pspc_initCountdown('.psproductcountdown');
    });

    $(document).on('click', '#list', function(e){
        e.preventDefault();
        pspc_initCountdown('.psproductcountdown');
    });

    var $block_page16 = $('.pspc-block-page.pspc16');
    if ($block_page16.length) {
        $block_page16.on('change', '.selectProductSort', function (e) {
            if (typeof request != 'undefined' && request)
                var requestSortProducts = request;
            var splitData = $(this).val().split(':');
            var url = '';
            if (typeof requestSortProducts != 'undefined' && requestSortProducts) {
                url += requestSortProducts;
                if (typeof splitData[0] !== 'undefined' && splitData[0]) {
                    url += (requestSortProducts.indexOf('?') < 0 ? '?' : '&') + 'orderby=' + splitData[0];
                    if (typeof splitData[1] !== 'undefined' && splitData[1])
                        url += '&orderway=' + splitData[1];
                }
                document.location.href = url;
            }
        });

        $block_page16.on('change', 'select[name="n"]', function () {
            $(this.form).submit();
        });
    }
});

function pspc_initCountdown(selector) {
    if (pspc_init_working) {
        return true;
    }

    pspc_init_working = true;

    // set timeout 0 for preventing conflicts with html updates by other modules
    setTimeout(function () {
        // if the plugin was unloaded by reloading Jquery (can happen at least with amazzingfilter)
        if (typeof $.fn.pspccountdown === 'undefined') {
            $('body').append('<script src="' + pspc_countdown_js + '"></script>');
        }
        selector = (selector ? selector : '.pspc-inactive');
        $(selector).each(function(){
            var $pspc = $(this);
            var $pspc_container = $(this).parent('.pspc-wrp');
            $pspc_container = ($pspc_container.length ? $pspc_container : $pspc);

            // get "to" date
            var to = $pspc.data('to');
            to = (to ? to : $pspc.text());
            // Check if "to" is a number or a string
            to = (isNaN(to) ? dateStringToTimestamp(to) : parseInt(to));

            var $pspc_main = $pspc.find('.pspc-main').clone();
            $pspc.html('');
            if ($pspc_main.length) {
                $pspc_main.appendTo($pspc);
            } else {
                $pspc.append('<div class="pspc-main" />');
            }
            $pspc_main = $pspc.find('.pspc-main');

            // calculate "to" if this countdown is personal
            if ($pspc.data('personal')) {
                var id_countdown = parseInt($pspc.data('id-countdown'));
                var hours = $pspc.data('personal-hours');
                var hours_restart = $pspc.data('personal-hours-restart');
                var type = $pspc.data('countdown-type');
                var cookie_name = 'pspc_to_' + type + id_countdown;

                if (localStorage.getItem(cookie_name)) {
                    to = new Date();
                    to.setTime(localStorage.getItem(cookie_name));
                    var personal_now = + new Date();
                    if (to < personal_now) {
                        if (hours_restart !== '') {
                            var hours_restart_ms = hours_restart * 60000 * 60;
                            if ((+to + hours_restart_ms) <= personal_now || hours_restart === 0) {
                                var d1 = new Date();
                                to = new Date(d1);
                                var new_to = d1.getTime() + (hours*60*60 - 1)*1000;
                                to.setTime( new_to );
                                localStorage.setItem(cookie_name, new_to);
                            }
                        }
                    }
                } else {
                    var d1 = new Date();
                    to = new Date(d1);
                    var new_to = d1.getTime() + (hours*60*60 - 1)*1000;
                    to.setTime( new_to );
                    localStorage.setItem(cookie_name, new_to);
                }
            }

            var pspc_long = $pspc.hasClass('pspc-long');

            if (!pspc_long) {
                var now = +new Date();
                if (!to || (to < now && (pspc_hide_expired || pspc_hide_after_end))) {
                    $pspc.hide();
                    pspc_init_working = false;
                    return true;
                }
            }

            // adjust countdown position at the page
            if (pspc_adjust_positions) {
                var $parent = $pspc_container.closest('.product-prices');
                if (pspc_position_product === 'displayProductPriceBlock' && $parent.length) {
                    $pspc_container.detach().appendTo($parent);
                } else if ($pspc_container.hasClass('pspc-wrp-over-img')) {
                    var $img_container = $pspc_container.closest('.product-miniature');
                    $img_container = ($img_container.length ? $img_container : $pspc_container.closest('.ajax_block_product'));
                    if ($img_container) {
                        var $thumb = $img_container.find('.thumbnail');
                        var $img = ($thumb.length ? $thumb.find('img:first') : $img_container.find('img:first'));
                        if ($img && $img.length) {
                            $pspc_container.detach();
                            $img.after($pspc_container);
                            $pspc_container.parent().addClass('pspc-parent');
                        }
                    }
                }
            }

            setTimeout(function () {
                $pspc.addClass('psproductcountdown').removeClass('pspc-inactive');
            }, 0);

            if (pspc_long) {
                if (!$pspc.hasClass('pspc-cw-hide')) {
                    $pspc.show();
                }

                pspc_init_working = false;
                return true;
            }

            if (typeof pspc_callbackBeforeDisplay === 'function') {
                pspc_callbackBeforeDisplay($pspc_container, $pspc);
            }

            // minimal themes:
            if (pspc_theme.indexOf('minimal') !== -1) {
                $pspc.pspccountdown(to, function(event) {
                    var now = + new Date();
                    var from = $pspc.data('from');

                    if (to < now && pspc_hide_after_end) {
                        $pspc.hide(400);
                    } else if (from) {
                        from = dateStringToTimestamp(from);
                        if (now < from) {
                            $pspc.hide();
                        } else {
                            $pspc.show(300);
                        }
                    }

                    var days = parseInt(event.strftime('%D'));
                    days = (days === 1 ? pspc_labels_lang_1['days'] : pspc_labels_lang['days']);
                    var name = $pspc.data('name');
                    name = (name ? name : pspc_offer_txt);
                    var name_html = (name ? '<span class="pspc_h">' + name + '</span><br/>' : '');
                    var name_left = (pspc_promo_side === 'left' ? name_html : '');
                    var name_right = (pspc_promo_side === 'right' ? ' ' + name_html : '');
                    var html = name_left + '<div class="pspc-countdown-wrp"><span class="days-%D">%D ' + days + '</span> %H:%M:%S </div>' + name_right;
                    if (!$pspc_main.parent().length) {
                        $pspc_main = $pspc.find('.pspc-main');
                    }
                    $pspc_main.html(event.strftime(html));
                });
            // regular themes:
            } else {
                var tpl = pspc_countdown_tpl;
                var labels = pspc_labels,
                    template = _.template(tpl);
                var currDate = '00:00:00:00';
                var nextDate = '00:00:00:00';

                // Build the layout
                var initData = pspc_strfobj(currDate);
                $pspc_main.find('.pspc-time').remove();
                labels.forEach(function(label, i) {
                    $pspc_main.append(template({
                        curr: initData[label],
                        next: initData[label],
                        label: label,
                        label_lang: pspc_labels_lang[label]
                    }));
                });
                // Start the countdown
                $pspc_main.pspccountdown(to, function(event) {
                    var now = + new Date();
                    var from = $pspc.data('from');

                    if (to < now && pspc_hide_after_end) {
                        $pspc.hide(400);
                    } else if (from) {
                        from = dateStringToTimestamp(from);
                        if (now < from) {
                            $pspc.hide();
                        } else {
                            $pspc.show(300);
                        }
                    }

                    var data;
                    var newDate = event.strftime('%D:%H:%M:%S');

                    if (newDate !== nextDate) {
                        currDate = nextDate;
                        nextDate = newDate;
                        // Setup the data
                        data = {
                            'curr': pspc_strfobj(currDate),
                            'next': pspc_strfobj(nextDate)
                        };
                        // Apply the new values to each node that changed
                        pspc_diff(data.curr, data.next).forEach(function(label) {
                            var selector = '.%s'.replace(/%s/, label),
                                $node = $pspc_main.find(selector);
                            // Update the node
                            $node.removeClass('flip hidden');
                            $node.find('.pspc-curr').text(data.curr[label]);
                            $node.find('.pspc-next').text(data.next[label]);
                            // Wait for a repaint to then flip
                            _.delay(function($node) {
                                $node.addClass('flip');
                            }, 50, $node);
                        });
                    }
                });
            }
        });

        pspc_init_working = false;
    }, 0);
}
if (typeof initCountdown === 'undefined') {
    var initCountdown = pspc_initCountdown;
}

// Parse countdown string to an object
function pspc_strfobj(str) {
    var pieces = str.split(':');
    var obj = {};
    pspc_labels.forEach(function(label, i) {
        obj[label] = pieces[i]
    });
    return obj;
}

// Return the time components that diffs
function pspc_diff(obj1, obj2) {
    var diff = [];
    pspc_labels.forEach(function(key) {
        if (obj1[key] !== obj2[key]) {
            diff.push(key);
        }
    });
    return diff;
}

function dateStringToTimestamp(dateString) {
    var dateTimeParts = dateString.split(' '),
        timeParts = dateTimeParts[1].split(':'),
        dateParts = dateTimeParts[0].split('-'),
        date;

    date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2], timeParts[0], timeParts[1]);

    return date.getTime();
}

function pspc_refreshProductTimers() {
    try {
        var id_pa = $('#idCombination').val();
        var $combi_wrp = $('.pspc-combi-wrp');
        $combi_wrp.hide().addClass('pspc-cw-hide');
        if (id_pa) {
            $('.pspc-cw-' + id_pa).removeClass('pspc-cw-hide').fadeIn(100);
        } else {
            $('.pspc-combi-wrp:first').removeClass('pspc-cw-hide').fadeIn(100);
        }

        var $pspc_main1 = $('.pspc-cw-hide').find('.pspc-main');
        $pspc_main1.each(function () {
           if ($(this).data("pspccountdown-instance")) {
               $(this).pspccountdown('stop');
           }
        });
        var $pspc_main2 = $combi_wrp.not('.pspc-cw-hide').find('.pspc-main');
        $pspc_main2.each(function () {
            if ($(this).data("pspccountdown-instance")) {
                $(this).pspccountdown('start');
            }
        });
    } catch(e) {
        console.log(e);
    }
}

var pspc_countdown_tpl = '' +
    '<div class="pspc-time <%= label %> <%= label == pspc_highlight ? \'pspc-highlight\' : \'\' %>">' +
    '<span class="pspc-count pspc-curr pspc-top"><%= curr %></span>' +
    '<span class="pspc-count pspc-next pspc-top"><%= next %></span>' +
    '<span class="pspc-count pspc-next pspc-bottom"><%= next %></span>' +
    '<span class="pspc-count pspc-curr pspc-bottom"><%= curr %></span>' +
    '<span class="pspc-label"><%= label_lang %></span>' +
    '</div>';