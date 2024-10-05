/**
 * NOTICE OF LICENSE
 *
 * This file is licenced under the Software License Agreement.
 * With the purchase or the installation of the software in your application
 * you accept the licence agreement.
 *
 * You must not modify, adapt or create derivative works of this source code
 *
 *  @author    prestalab
 *  @copyright 2010-2020 prestalab
 *  @license   LICENSE.txt
 */

function rafAsync() {
    return new Promise(resolve => {
        requestAnimationFrame(resolve);
    });
}

function checkElement(selector) {
    if (document.querySelector(selector) === null) {
        return rafAsync().then(() => checkElement(selector));
    } else {
        return Promise.resolve(true);
    }
}

function moduleSupercheckoutEnabled(){
    const bodyQuery = document.querySelector('body');
    if (bodyQuery.getAttribute("id") == "module-supercheckout-supercheckout"){
        return true;
    }
    return false;
}
function getCartTotalElement(){
    if (moduleSupercheckoutEnabled() == true){
        return document.querySelector('#total_price');
    }
    console.log(document.querySelector('.cart-total').querySelectorAll('.value'));
    return document.querySelector('.cart-total').querySelectorAll('.value')[0]; // Default
}

window.insuredshipping = {
    debug: true,
    helper: {
        log: function (str){
            if (window.insuredshipping.debug == true)
                console.log(str);
        },
        updateTotal: function(total){
            if (moduleSupercheckoutEnabled() == true){
                document.querySelector('#total_price').textContent = total;
                return true;
            }
            document.querySelectorAll('.cart-total').forEach(function (el) {

                var handle = el.querySelectorAll('.value');
                console.log(el, handle);
                handle[0].textContent = total;
            });
        },
        insertAfter: function (newElement,targetElement) {
            this.log("HELPER INSERTING AFTER");
            var parent = targetElement.parentNode;
            if (parent.lastChild == targetElement) {
                parent.appendChild(newElement);
            } else {
                parent.insertBefore(newElement, targetElement.nextSibling);
            }
        },
        insertInsuredShippingRow: function (){
            var $clone = document.getElementById("insurance_total_proto").innerHTML;
            var tag_name = "div";
            if (moduleSupercheckoutEnabled() == true){
                //tag_name = "tr";
            }

            var d = document.createElement(tag_name);
            d.setAttribute("class", "insured-onfly");
            d.innerHTML = $clone;

            var cartSubtotalShippingID = 'cart-subtotal-shipping';
            if (moduleSupercheckoutEnabled() == true){
                cartSubtotalShippingID = 'supercehckout_summary_total_shipping';
            }

            checkElement('#' + cartSubtotalShippingID)
                .then((element) => {
                    if (document.querySelector(".insured-onfly") === null) {
                        this.insertAfter(d, document.getElementById(cartSubtotalShippingID));
                    }
                    if (document.getElementById('insurance_total')) {
                        document.querySelectorAll('#insurance_total').forEach(function (el) {
                            el.style.display = "block";
                        })
                    }
                });

        },
        removeInsuredShippingRow: function(){
            document.querySelector('.insured-onfly').remove();
        }
    }
}

var oldXHR = window.XMLHttpRequest;
//( function ($){
    function newXHR() {
        var realXHR = new oldXHR();
        realXHR.addEventListener("readystatechange", function(e) {

            if(realXHR.readyState == 1){
                //console.log('server connection established');
            }
            if(realXHR.readyState == 2){
                //console.log('request received');
            }
            if(realXHR.readyState == 3){
            }
            if(realXHR.readyState == 4){
                var url = realXHR.responseURL;
                if (url.endsWith('action=selectDeliveryOption')) {
                    var xURL = $('#insuredshipping-bridge').data('refresh-url');
                    $.post(xURL).then(function (resp) {
                        if (resp.insurance == true) {
                            $("#mod-insuredshipping").show();
                        } else {
                            $("#mod-insuredshipping").hide();
                            $("#insurance").removeAttr("checked");
                        }
                    }).fail(function (resp) {
                        //prestashop.emit('handleError', {eventType: 'selectDeliveryOption', resp: resp});
                    });
                }
            }
        }, false);
        return realXHR;


    }
    window.XMLHttpRequest = newXHR;
window.addEventListener('DOMContentLoaded', function() {
    const bridge = document.getElementById('insuredshipping-bridge');
    if (bridge) {
        var dURL = bridge.dataset.readUrl;
        fetch(dURL, {
            method: "POST"
        }).then(response => {
                if (document.getElementById('insurance_total')) {
                    //console.log(document.querySelectorAll('#insurance_total'));
                    document.querySelectorAll('#insurance_total').forEach(function (el) {
                        el.style.display = "none";
                    })
                }
                response.json().then(obj => {
                    if (obj.html) {
                        document.getElementById('insuredshipping-bridge').innerHTML = null;
                        var d = document.createElement("div");
                        d.innerHTML = obj.html;
                        document.getElementById('insuredshipping-bridge').appendChild(d);

                        window.insuredshipping.helper.insertInsuredShippingRow();
                        //document.querySelector('.cart-total').querySelectorAll('.value')[0].textContent = obj.total
                        getCartTotalElement().textContent = obj.total
                    }
                });
            }
        ).then(

        );
    }

});


window.addEventListener('DOMContentLoaded', function() {
    //var insuEl =  document.getElementById('insurance');

    checkElement('#insurance') //use whichever selector you want
        .then((element) => {
            //console.info(element);
            var insuEl =  document.getElementById('insurance');
            insuEl.addEventListener("change", function (e){
                var insured_checked = insuEl.checked;
                var $table_summary  = document.getElementById("cart_summary");
                const bridge        = document.getElementById('insuredshipping-bridge');
                var xURL            = bridge.dataset.defaultUrl;
                var params = {
                    insurance: insured_checked == true ? 1 : 0
                };
                if (document.getElementById('insurance_total')) {
                    document.querySelectorAll('#insurance_total').forEach(function (el) {
                        el.style.display = "none";
                    })
                }
                fetch(xURL + '&insurance=' + params.insurance, {
                    method : "POST"
                }).then(
                    response => {

                        response.json().then(obj => {
                            if (obj.html) {
                                bridge.innerHTML = null;
                                var d = document.createElement("div");
                                d.innerHTML = obj.html;
                                bridge.appendChild(d);
                                window.insuredshipping.helper.insertInsuredShippingRow();
                                //document.querySelector('.cart-total').querySelectorAll('.value')[0].textContent = obj.total
                                window.insuredshipping.helper.updateTotal(obj.total);
                                //getCartTotalElement().textContent = obj.total;
                            } else {
                                //document.querySelector('.cart-total').querySelectorAll('.value')[0].textContent = obj.total
                                window.insuredshipping.helper.removeInsuredShippingRow();
                                window.insuredshipping.helper.updateTotal(obj.total);
                                //getCartTotalElement().textContent = obj.total;
                            }
                        });

                    }
                ).then(

                );
            });
        });


});
//})(jQuery);

