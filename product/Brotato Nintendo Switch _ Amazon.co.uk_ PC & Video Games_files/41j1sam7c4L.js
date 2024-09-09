'use strict';mix_d("SimilaritiesUICards__p13n-desktop-sims-fbt:p13n-desktop-sims-fbt__DdQryce8","exports tslib @p/A @c/metrics @c/browser-operations @c/scoped-dom @c/aui-untrusted-ajax @c/error-handling @c/logger".split(" "),function(V,x,ka,W,la,ma,na,oa,pa){function B(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var r=B(ka),X=B(la),h=B(ma),Y=B(na),K=B(oa),L=B(pa),Z={},M=function(a,e,c){void 0===e&&(e="");void 0===c&&(c=1);e=a+e;Z.hasOwnProperty(e)||(Z[e]=!0,W.count(a,(W.count(a)||
0)+c))},qa=function(a){M(r["default"].capabilities.mobile?"Card:EERU:SharedLib:mobile:render":"Card:EERU:SharedLib:desktop:render");var e=function(b,d){b={$event:{preventDefault:r["default"].$.noop,stopPropagation:r["default"].$.noop},$target:b.getContent().find('[data-a-tab-name="'+d+'"]'),data:{name:"energyEfficiencyTabSet"}};r["default"].trigger("a:declarative:a-tabs:click",b)},c=function(b,d){var g=b&&b.$event,f=b&&b.data||{},k=f.activeTabName,u=f.modalHeight,y=f.name;g&&g.preventDefault&&g.preventDefault();
g&&g.stopPropagation&&g.stopPropagation();g=d.get(y);g||(r["default"].on("a:popover:beforeShow:"+y,function(l){l.popover&&l.popover.getContent&&(l=l.popover.getContent(),l.find(".a-manually-loaded").parent().css("min-height",u),r["default"].loadDescendantImagesManually(l))}),g=d.create(b.$target,f));g.show();e(g,k)};a.when("a-secondary-view").execute("RegisterEnergyEfficiencyEventMobile",function(b){r["default"].declarative("card-energy-efficiency-secondary-view","click",function(d){M("Card:EERU:SharedLib:mobile:click",
d&&d.data&&d.data.name||"");c(d,b)})});a.when("a-modal").execute("RegisterEnergyEfficiencyEventDesktop",function(b){r["default"].declarative("card-energy-efficiency-modal","click",function(d){M("Card:EERU:SharedLib:desktop:click",d&&d.data&&d.data.name||"");c(d,b)})})},ra=function(a){a.when("ready").execute("EEBadgeProductFicheResize",function(e){var c=r["default"].$;c(".energyEfficiencyContainer").each(function(b,d){b=c(d).find(".energyEfficiencyProductFicheLabel").first();d=c(d).find("svg").first();
b.parent().outerHeight()>d.outerHeight()&&(b.removeClass("a-size-small"),b.addClass("a-size-micro"),b.parent().outerHeight()>d.outerHeight()&&b.parent().css("line-height","10px"))})})},sa=function(){var a=window.P;qa(a);ra(a)},ta={ctiList:["Website/Personalization/Report a Problem CX"],category:"Website",type:"Personalization",item:"Report a Problem CX",folder:"9c9c97c9-6f69-4dba-a55d-26045c6a3068",group:"P13N Report a Problem CX"},ua=[{ctiList:["Website/Personalization/Similarities","Website/Detail Page/Similarities"],
category:"Website",type:"Personalization",item:"Similarities",folder:"4d16d05d-9a17-4b36-b8fe-9ee159ff81de",group:"Similarities"}],ya=function(a){var e=h["default"].cardRoot.querySelector(".p13n-report-flag"),c=X["default"].setup();c.define("showFlag","mouseover",function(){e.classList.remove("p13n-report-flag-hide")});c.define("hideFlag","mouseout",function(){e.classList.add("p13n-report-flag-hide")});c.attach("showFlag",a);c.attach("hideFlag",a);var b=h["default"].cardRoot.querySelector(".internal-flag-form"),
d=b.querySelector(".internal-flag-env-data").dataset,g=b.querySelector(".internal-flag-title-text"),f=b.querySelector(".internal-flag-description").firstElementChild,k=b.querySelector(".internal-flag-alias"),u=b.querySelector(".internal-flag-response-message"),y=function(l){l.preventDefault();l=function(m){return!m||!m.trim()};if(l(g.value)||l(f.value)||l(k.value))return N(u,!1,"Something went wrong. One of the required fields was missing."),!1;l=h["default"].cardRoot.querySelectorAll(".a-dynamic-image");
var v;if(v=h["default"].cardRoot.querySelector(".a-carousel-heading")){var t=va(a,l.length);v="Internal user reported issue '"+g.value+"' with widget: "+v.innerText}else t=wa(a),v="Internal user reported issue '"+g.value+"'";l=xa(l,t,f.value,k.value,d);var n=ta;ua.forEach(function(m){m.ctiList.includes(d.cti)&&(n=m)});Y["default"].post("https://p13ngoals.corp.amazon.com/sims",{accepts:"text/html, application/json",contentType:"application/json;charset=UTF-8"},{sim_params:{assigned_folder:n.folder,
description:l,descriptionContentType:"text/amz-markdown-sim",extensions:{tt:{assignedGroup:n.group,category:n.category,impact:5,item:n.item,type:n.type}},tags:[{id:"internal-problem-generated"}],title:v}}).then(function(m){N(u,!0,m)}).catch(function(m){N(u,!1,m)});return!1};b.onsubmit=function(l){return y(l)};c=h["default"].cardRoot.querySelector(".p13n-desktop-report-problem-flag-data");if(c.dataset.name)r["default"].on("a:popover:hide:"+c.dataset.name,function(){b.reset();u.innerText=""})},va=function(a,
e){if(!a.dataset.aCarouselOptions)return L["default"].log("Empty ASIN List in carouselElement.dataset.aCarouselOptions","ERROR"),[];a=JSON.parse(a.dataset.aCarouselOptions).ajax.id_list;var c=h["default"].cardRoot.querySelector(".a-carousel-firstvisibleitem");c=(Number(c.value)||1)-1;return a.map(function(b){return JSON.parse(b).id}).slice(c,c+e)},wa=function(a){return(a=a.dataset.asinList)?a.split(","):[]},xa=function(a,e,c,b,d){for(var g="",f=0;f<a.length;f++){var k=a[f];g+=(k?"![]("+k.src+")":
"IMAGE MISSING")+"\nASIN: "+(e[f]?e[f]:"ASIN MISSING")+"\n\n"}return"**This SIM-T ticket is created by the 'Report a Problem' internal tool. To know more, here's its wiki: https://w.amazon.com/bin/view/Personalization/CoreRecommendations/Projects/Canaries/Report-a-Problem-UX-on-P13NWidget/UserGuide/**\n\n**Alias:** ["+(b+"](https://phonetool.amazon.com/users/"+b+")\n**Comment:** "+c+"\n\n**Widget Group ID:** "+d.widgetGroupId+"\n**Strategy ID:** "+d.strategyId+"\n**CTI:** "+d.cti+"\n**Facets:** ")+
(d.facets+"\n**Content Reftag:** "+d.reftag+"\n"+(""!==d.baseAsin?"**Page ASIN:** "+d.baseAsin+"\n":"")+"\n**SessionID:** ")+(d.sessionId+"\n**MarketplaceID:** "+d.marketplaceId+"\n**Device Type:** "+d.deviceType+"\n\n**List of ASINs:**\n\n")+g},N=function(a,e,c){e?(a.classList.remove("a-color-error"),c.responseBody&&"object"===typeof c.responseBody?c.responseBody.response&&c.responseBody.response.id?a.innerHTML="Success, here's the <a href=\"https://t.corp.amazon.com/"+c.responseBody.response.id+
'" target="_blank">SIM-T ticket</a> you created.':(L["default"].log("Fail to find the id of the SIM-T ticket created in the response body of response data.","ERROR"),a.innerText="Success, but we could not find the link to the SIM-T ticket."):(L["default"].log("The response body of response data is not an object.","ERROR"),a.innerText="Success, but we could not find the link to the SIM-T ticket.")):(a.classList.add("a-color-error"),a.innerText="string"===typeof c?c:"Oops! Something went wrong. Please try again.")},
za={setupModal:function(a){return x.__awaiter(void 0,void 0,void 0,function(){var e;return x.__generator(this,function(c){e=h["default"].cardRoot.querySelector(".p13n-report-problem-modal-root");if(!e)return[2];ya(a);return[2]})})}},Aa=function(a,e){e?a.classList.add("add-to-cart-item-disabled"):a.classList.remove("add-to-cart-item-disabled");a.querySelectorAll("input").forEach(function(c){e?c.setAttribute("disabled","true"):c.removeAttribute("disabled")})},aa=function(a,e){a=h["default"].cardRoot.querySelector("#add-to-cart-item-"+
a);if(!a)return K["default"].error('Missing Add to Cart item!", "add-to-cart.client.item-state-handler',"changeItemStatus");e&&a.classList.contains("add-to-cart-item-disabled")||!e&&!a.classList.contains("add-to-cart-item-disabled")||(Aa(a,e),Ba())},Ba=function(){var a,e=Array.from(h["default"].cardRoot.querySelectorAll("[id^=add-to-cart-item-]")).filter(function(k){return!k.classList.contains("add-to-cart-item-disabled")}).length,c=h["default"].cardRoot.getElementsByClassName("add-to-cart-section")[0],
b=c.getElementsByClassName("a-button-text")[0],d=c.getElementsByClassName("add-to-cart-button")[0],g=c.getElementsByClassName("add-to-cart-string-data")[0];c=c.getElementsByClassName("a-button-input")[0];if(null===(a=null===g||void 0===g?void 0:g.dataset)||void 0===a?0:a.displayStringList)var f=JSON.parse(g.dataset.displayStringList);d&&(0===e?d.classList.add("a-button-disabled"):d.classList.remove("a-button-disabled"));if(b)if(f&&f.length>e)b.innerText=f[e],c.setAttribute("aria-label",f[e]);else return K["default"].error('Missing Add to Cart string!", "add-to-cart.client.item-state-handler',
"updateButtonString");else return K["default"].error('Missing Add to Cart button!", "add-to-cart.client.item-state-handler',"updateButtonString")},Ca={accepts:"text/html, application/json",timeout:2E3},ja=function(a){return x.__awaiter(void 0,void 0,void 0,function(){var e,c,b,d,g,f,k,u,y,l,v,t,n,m,z,C,O,D,ba,G,w,E,H,P,Q,R,S,ca;return x.__generator(this,function(T){if((b=h["default"].cardRoot.getElementsByClassName("cardRoot")[0])&&"true"===b.dataset.punt)return[2];d=1;b&&b.dataset.count&&(d=Number(b.dataset.count));
b&&b.dataset.components&&(g=JSON.parse(b.dataset.components));b&&b.dataset.priceTotals&&(f=JSON.parse(b.dataset.priceTotals));b&&b.dataset.pointsTotal&&(k=JSON.parse(b.dataset.pointsTotal));if(g&&f){T=g;for(var da=d,ea=[],fa=[],p=0;p<da;p++){var A=p+1;1<A&&(ea[p]=h["default"].cardRoot.getElementsByClassName("thumbnailPlus-"+String(A))[0]);fa[p]=h["default"].cardRoot.getElementsByClassName("thumbnail-"+String(A))[0]}var U=!1,ha=0,ia="";for(p=0;p<da;p++){A=String(p+1);var F=ea[p],I=fa[p];T[A]&&T[A].checked?
(aa(p,!1),ha++,ia+=A,0===p?U=!0:F&&(U?F.style.display="unset":(U=!0,F.style.display="none")),I&&(I.style.display="unset")):(aa(p,!0),F&&(F.style.display="none"),I&&(I.style.display="none"))}e=ha;c=ia;u=e;y=f[c];l=h["default"].cardRoot.getElementsByClassName(a.totalLabel)[0];v=h["default"].cardRoot.getElementsByClassName(a.totalAmount)[0];t=h["default"].cardRoot.getElementsByClassName(a.addItems)[0];n=h["default"].cardRoot.getElementsByClassName(a.chooseItems)[0];m=h["default"].cardRoot.getElementsByClassName(a.actionDetails)[0];
z=h["default"].cardRoot.getElementsByClassName(a.sidePanel)[0];C=h["default"].cardRoot.getElementsByClassName(a.buttonSectionState)[0];0===u?(t&&(t.style.display="none"),l&&(l.style.display="none"),n&&(n.style.display="unset"),m&&(m.style.visibility="hidden"),z&&(z.style.display="none"),C&&(C.style.pointerEvents="none")):y?(l&&v&&(v.innerText=y,l.style.display="block"),t&&(t.style.display="none"),n&&(n.style.display="none"),m&&(m.style.visibility="visible"),z&&(z.style.display="flex"),C&&(C.style.pointerEvents=
"fill")):(t&&(t.style.display="inline-block"),n&&(n.style.display="none"),l&&(l.style.display="none"),m&&(m.style.visibility="visible"),z&&(z.style.display="flex"));b&&g&&k&&(O=h["default"].cardRoot.getElementsByClassName(a.pointsAmount)[0],D=h["default"].cardRoot.getElementsByClassName(a.totalPointsLabel)[0],(ba=k[c])?D&&O&&(O.innerText=ba,D.style.display="block"):D&&(D.style.display="none"));G=void 0;b&&b.dataset.optimalPrice&&(G=JSON.parse(b.dataset.optimalPrice));b&&g&&G&&(w=h["default"].cardRoot.getElementsByClassName(a.totalLabelDiscount)[0],
E=h["default"].cardRoot.getElementsByClassName(a.totalLabelStandard)[0],(H=G[c])?(w&&(w.style.display="block",P=w.getElementsByClassName(a.discountPercent)[0],Q=w.getElementsByClassName(a.discountWhole)[0],R=w.getElementsByClassName(a.discountFractional)[0],S=w.getElementsByClassName(a.discountStrikethrough)[0],P&&(P.innerText=H.discountPercent),Q&&(Q.innerText=H.bundlePriceWhole),R&&(R.innerText=H.bundlePriceFractional),S&&(ca=f?f[c]:"",S.innerText=ca)),E&&(E.style.display="none")):(w&&(w.style.display=
"none"),E&&(E.style.display="block")))}return[2]})})},Ea=function(){return x.__awaiter(void 0,void 0,void 0,function(){var a;return x.__generator(this,function(e){if(a=h["default"].cardRoot.getElementsByClassName("add-to-cart-data")[0])a.onclick=function(c){var b=a;c.preventDefault();Da();b.submit()};return[2]})})},Da=function(){var a=h["default"].cardRoot.getElementsByClassName("cardRoot")[0],e=a.dataset.spClickUrl;if(e){var c=!1;if(a&&a.dataset.components){a=JSON.parse(a.dataset.components);for(var b in a)a[b].checked&&
a[b].sponsored&&(c=!0)}e&&c&&Y["default"].get(e,Ca).then(function(){}).catch(function(){})}},J;(function(a){a.clickHandler="clickHandler";a.checkHandler="checkHandler";a.popupHandler="popupHandler";a.tabClickHandler="tabClickHandler";a.clickHandlerBottomSheet="clickHandlerBottomSheet";a.checkboxHandlerBottomSheet="checkboxHandlerBottomSheet"})(J||(J={}));var q={simsFbtContainter:"_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-containter__2Cffh",flexFbtContainer:"_p13n-desktop-sims-fbt_fbt-desktop_flex-fbt-container__3fI_9",
fbtCard:"_p13n-desktop-sims-fbt_fbt-desktop_fbt-card__1_smM",imageLink:"_p13n-desktop-sims-fbt_fbt-desktop_image-link__17L3C",detailImageSection:"_p13n-desktop-sims-fbt_fbt-desktop_detail-image-section__1Bw2r",imageBackground:"_p13n-desktop-sims-fbt_fbt-desktop_image-background__DVFnZ",imageDisplay:"_p13n-desktop-sims-fbt_fbt-desktop_image-display__2oZhY",linkArea:"_p13n-desktop-sims-fbt_fbt-desktop_link-area__1VLAZ",thumbnailBox:"_p13n-desktop-sims-fbt_fbt-desktop_thumbnail-box__4jnIT",newThumbnailBox:"_p13n-desktop-sims-fbt_fbt-desktop_new-thumbnail-box__36bD3",
twoItemThumbnailBox:"_p13n-desktop-sims-fbt_fbt-desktop_two-item-thumbnail-box__jV2am",newDetailFaceoutBox:"_p13n-desktop-sims-fbt_fbt-desktop_new-detail-faceout-box___WyNy",fbtCheckbox:"_p13n-desktop-sims-fbt_fbt-desktop_fbt-checkbox__GSgEz",titleComponentOverflow3:"_p13n-desktop-sims-fbt_fbt-desktop_title-component-overflow3__26ly1",titleSection:"_p13n-desktop-sims-fbt_fbt-desktop_title-section__16zUG",displayFlex:"_p13n-desktop-sims-fbt_fbt-desktop_display-flex__1gorZ",priceSection:"_p13n-desktop-sims-fbt_fbt-desktop_price-section__1Wo6p",
thumbnailPlus:"_p13n-desktop-sims-fbt_fbt-desktop_thumbnail-plus__zdWox",thumbnailPlusNew:"_p13n-desktop-sims-fbt_fbt-desktop_thumbnail-plus-new__2nZz1",plusPadding:"_p13n-desktop-sims-fbt_fbt-desktop_plus-padding__21zgg",productBox:"_p13n-desktop-sims-fbt_fbt-desktop_product-box__3PBxY",itemDetailsPerAsin:"_p13n-desktop-sims-fbt_fbt-desktop_item-details-per-asin__3DtF1",itemDeliveryMessagePerAsin:"_p13n-desktop-sims-fbt_fbt-desktop_item-delivery-message-per-asin__WQ7q7",fbtItemCheck:"_p13n-desktop-sims-fbt_fbt-desktop_fbt-item-check__pUIoy",
addAllButton:"_p13n-desktop-sims-fbt_fbt-desktop_add-all-button__1TRXG",totalLabel:"_p13n-desktop-sims-fbt_fbt-desktop_total-label__dI983",labelCenter:"_p13n-desktop-sims-fbt_fbt-desktop_label-center__L5TW-",totalPointsLabel:"_p13n-desktop-sims-fbt_fbt-desktop_total-points-label__3r09H",addItems:"_p13n-desktop-sims-fbt_fbt-desktop_add-items__16weX",chooseItems:"_p13n-desktop-sims-fbt_fbt-desktop_choose-items__15UQx",updatedChooseItems:"_p13n-desktop-sims-fbt_fbt-desktop_updated-choose-items__3BN67",
totalAmount:"_p13n-desktop-sims-fbt_fbt-desktop_total-amount__wLVdU",pointsAmount:"_p13n-desktop-sims-fbt_fbt-desktop_points-amount__1SNdT",priceAddToCartBox:"_p13n-desktop-sims-fbt_fbt-desktop_price-add-to-cart-box__3OUdK",pricePointsBox:"_p13n-desktop-sims-fbt_fbt-desktop_price-points-box__1xGfe",shipMessageBox:"_p13n-desktop-sims-fbt_fbt-desktop_ship-message-box__t-OOr",shippingInfoShowBox:"_p13n-desktop-sims-fbt_fbt-desktop_shipping-info-show-box__17yWM",showDetailsBox:"_p13n-desktop-sims-fbt_fbt-desktop_show-details-box__-R3Xb",
showDetails:"_p13n-desktop-sims-fbt_fbt-desktop_show-details__3GnPL",shiftDetails:"_p13n-desktop-sims-fbt_fbt-desktop_shift-details__gffZp",hideDetails:"_p13n-desktop-sims-fbt_fbt-desktop_hide-details__28l17",simsFbtUnselectedItem:"_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-unselected-item__VQmZx",simsFbtRows:"_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-rows__2LJXs",bucketDivider:"_p13n-desktop-sims-fbt_fbt-desktop_bucket-divider__25poP",titleTruncate:"_p13n-desktop-sims-fbt_fbt-desktop_title-truncate__1pPAM",
detailRowElement:"_p13n-desktop-sims-fbt_fbt-desktop_detail-row-element__2WDgq",detailRowElementLeftMargin:"_p13n-desktop-sims-fbt_fbt-desktop_detail-row-element-left-margin__UkZ8O",actionDetails:"_p13n-desktop-sims-fbt_fbt-desktop_action-details__18ZiI",actionSection:"_p13n-desktop-sims-fbt_fbt-desktop_action-section__mpQSG",sidePanel:"_p13n-desktop-sims-fbt_fbt-desktop_side-panel__23vsu",itemTitle:"_p13n-desktop-sims-fbt_fbt-desktop_item-title__2fMKO",energyLabel:"_p13n-desktop-sims-fbt_fbt-desktop_energy-label__23Bpn",
sponsoredLabel:"_p13n-desktop-sims-fbt_fbt-desktop_sponsored-label__2Ap87"};V._operationNames=[];V.card=function(){return x.__awaiter(void 0,void 0,void 0,function(){var a,e;return x.__generator(this,function(c){switch(c.label){case 0:a=X["default"].setup().define;if(!h["default"].cardRoot)return[2];sa();return[4,Promise.all([za.setupModal(h["default"].cardRoot.getElementsByClassName("cardRoot")[0]),Ea()])];case 1:return c.sent(),ja(q),e=!0,a(J.clickHandler,"click",function(b){if(b.event.target){b=
h["default"].cardRoot.getElementsByClassName(q.shippingInfoShowBox);var d=h["default"].cardRoot.getElementsByClassName(q.showDetails)[0],g=h["default"].cardRoot.getElementsByClassName(q.hideDetails)[0];d&&(e?(d.style.display="none",g.style.display="unset",b&&([].forEach.call(b,function(f,k){f.style.display="block"}),e=!1)):(d.style.display="unset",g.style.display="none",b&&[].forEach.call(b,function(f,k){f.style.display="none"}),e=!0))}}),a(J.checkHandler,"click",function(b){var d=b.event,g=d.target;
b=null;if(g){if("fbtCheck"!==g.id.substr(0,8))return;b=d.target.checked}for(var f=g;f&&!f.classList.contains(q.fbtItemCheck)&&!f.classList.contains(q.fbtCheckbox);)f=f.parentElement;if(f){d=f.id;g=h["default"].cardRoot.getElementsByClassName("cardRoot")[0];var k=void 0;g&&g.dataset.components&&(k=JSON.parse(g.dataset.components));k&&k[d]&&null!==b&&(k[d].checked=b);k&&k[d].checked&&(f.classList.contains(q.simsFbtUnselectedItem)&&f.classList.remove(q.simsFbtUnselectedItem),f.classList.contains(q.fbtCheckDetails)||
f.classList.add(q.fbtCheckDetails));k&&!k[d].checked&&(f.classList.remove(q.fbtCheckDetails),f.classList.add(q.simsFbtUnselectedItem));b=h["default"].cardRoot.getElementsByClassName("itemLinkTitle-"+d)[0];f=h["default"].cardRoot.getElementsByClassName("itemTitle-"+d)[0];b&&f&&(k&&k[d].checked&&(b.style.display="unset",f.style.display="none"),k&&!k[d].checked&&(b.style.display="none",f.style.display="unset"));g.dataset.components=JSON.stringify(k);ja(q)}}),[2]}})})}});
