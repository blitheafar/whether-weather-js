'use strict';mix_d("CustomerReviewsProductInsightsCards__cr-product-insights:cr-product-insights__ePfHyqlx","require exports tslib @c/scoped-dom @c/logger @c/metrics @c/browser-window @c/browser-operations @c/dom".split(" "),function(W,K,f,x,X,Y,Z,aa,ba){function v(c){return c&&"object"===typeof c&&"default"in c?c:{"default":c}}function ca(c){if(c&&c.__esModule)return c;var a=Object.create(null);c&&Object.keys(c).forEach(function(b){if("default"!==b){var d=Object.getOwnPropertyDescriptor(c,b);Object.defineProperty(a,
b,d.get?d:{enumerable:!0,get:function(){return c[b]}})}});a["default"]=c;return a}function B(c){c.hasAttribute("href")&&c.removeAttribute("href")}var l=v(x),da=v(X),ea=v(Z),fa=v(aa),C=v(ba),k={isDesktopView:"_cr-product-insights_style_is-desktop-view__29OYH",isMobileView:"_cr-product-insights_style_is-mobile-view__2p4SJ",dataContainer:"_cr-product-insights_style_data-container__2n3A8",contentContainer:"_cr-product-insights_style_content-container__1EAqP",contentContainerPadding:"_cr-product-insights_style_content-container-padding__66Xh7",
sentimentSection:"_cr-product-insights_style_sentiment-section__3Z0bO",sentimentHeader:"_cr-product-insights_style_sentiment-header__3nrex",sentimentAspects:"_cr-product-insights_style_sentiment-aspects__2mp4b",aspectButtonGroup:"_cr-product-insights_style_aspect-button-group__-biHO",aspectSymbolList:"_cr-product-insights_style_aspect-symbol-list__24amT",insightBottomSheetButtonGroup:"_cr-product-insights_style_insight-bottom-sheet-button-group__1gQMy",aspectList:"_cr-product-insights_style_aspect-list__cBugj",
aspectLink:"_cr-product-insights_style_aspect-link__TtdmS",sentimentIcon:"_cr-product-insights_style_sentiment-icon__sk0vS",sentimentIconAngled:"_cr-product-insights_style_sentiment-icon-angled__reqYy",sentimentIconAngledInverse:"_cr-product-insights_style_sentiment-icon-angled-inverse__28rEi",aspectLinkSymbol:"_cr-product-insights_style_aspect-link-symbol__23T9N",selected:"_cr-product-insights_style_selected__2-xMA",blueLinkTreatment:"_cr-product-insights_style_blue-link-treatment__TQhg9",subtitleAspectButton:"_cr-product-insights_style_subtitle-aspect-button__2o27X",
bottomSheetWrapper:"_cr-product-insights_style_bottom-sheet-wrapper__PdjHu",hideBottomSheet:"_cr-product-insights_style_hide-bottom-sheet__3ijux aok-hidden",insightBottomSheet:"_cr-product-insights_style_insight-bottom-sheet__3SFlx",insightBottomSheetRedesign:"_cr-product-insights_style_insight-bottom-sheet-redesign__1NP0A",insightBottomSheetContent:"_cr-product-insights_style_insight-bottom-sheet-content__3cnVT",insightBottomSheetSubtitle:"_cr-product-insights_style_insight-bottom-sheet-subtitle__28v47",
endingLine:"_cr-product-insights_style_ending-line__1I1OL",snippet:"_cr-product-insights_style_snippet__2SpLd",fragment:"_cr-product-insights_style_fragment__tnwGQ",snippetSeeMore:"_cr-product-insights_style_snippet-see-more__3qykv",statTextBox:"_cr-product-insights_style_stat-text-box__8ba_x",statTextBoxRow:"_cr-product-insights_style_stat-text-box-row__1_DtP",statTextBoxTitle:"_cr-product-insights_style_stat-text-box-title__26C4y",statTextBoxSubtitle:"_cr-product-insights_style_stat-text-box-subtitle__1wPSa",
statCustomerMentionsBox:"_cr-product-insights_style_stat-customer-mentions-box__Su4zw",statTextBoxLabelRow:"_cr-product-insights_style_stat-text-box-label-row__3uYIE",statNumber:"_cr-product-insights_style_stat-number__1J1Vr",statInfoBox:"_cr-product-insights_style_stat-info-box__1akN2",closeButton:"_cr-product-insights_style_close-button__qtNz0",textPositive:"_cr-product-insights_style_text-positive__QRaJ2",textNegative:"_cr-product-insights_style_text-negative__zjq0Y",aspectSummaryLink:"_cr-product-insights_style_aspect-summary-link__1Ls1M",
aspectSummaryLabel:"_cr-product-insights_style_aspect-summary-label__19a1a",productInsightsDivider:"_cr-product-insights_style_product-insights-divider__3lxIJ"},D={rendered:0,content:0,empty:0,"aspect-button-clicked":0,"aspect-button-dp-clicked":0,"aspect-button-bottomsheet-clicked":0,"snippet-clicked":0,"aspects-scrolled":0,"bottomsheet-closed":0},n=function(c){var a,b=null!==(a=D[c])&&void 0!==a?a:0;D[c]=b+1;Y.count("cr-product-insights:dp:"+c,D[c])},L=function(c,a){if(c=l["default"].cardRoot.getElementsByClassName(c))for(var b=
0;b<c.length;b++){var d=c[b];d&&d.addEventListener("click",function(){n(a)})}},w=function(c,a){c&&c.addEventListener("click",function(){n(a)})},ha=function(c,a){var b=l["default"].cardRoot.getElementsByClassName(c),d=Array(b.length);if(b){c=function(g){d[g]=!1;var h=b[g];h&&h.addEventListener("scroll",function(){d[g]||(d[g]=!0,n(a))})};for(var e=0;e<b.length;e++)c(e)}},ia=function(){try{n("rendered");var c=l["default"].cardRoot.getElementsByClassName(k.contentContainer);n(0===c.length?"empty":"content");
c&&(L(k.aspectButton,"aspect-button-clicked"),L(k.snippetSeeMore,"snippet-clicked"),ha(k.sentimentAspects,"aspects-scrolled"))}catch(a){}};x=function(){function c(){}c.prototype.show=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(a){throw Error("not implemented");})})};c.prototype.hide=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(a){throw Error("not implemented");})})};c.prototype.updateContent=function(a){return f.__awaiter(this,
void 0,void 0,function(){return f.__generator(this,function(b){throw Error("not implemented");})})};return c}();var ja=function(c){function a(b){var d=c.call(this)||this;b=d.getContentSelector(b.sentimentIndex);d.contentHTML=l["default"].cardRoot.querySelector("#"+b);return d}f.__extends(a,c);a.prototype.show=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(b){this.contentHTML&&(this.contentHTML.style.display="block");return[2]})})};a.prototype.hide=function(){return f.__awaiter(this,
void 0,void 0,function(){return f.__generator(this,function(b){this.contentHTML&&(this.contentHTML.style.display="none");return[2]})})};a.prototype.updateContent=function(b){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(d){this.hideAllContentList();this.showCurrentSelectedAspect(l["default"].cardRoot,b.aspectButtonsSize,b.aspectIndex,b.sentimentIndex);return[2]})})};a.prototype.getContentSelector=function(b){return"second-bottom-sheet-"+b};a.prototype.hideAllContentList=
function(){l["default"].cardRoot.querySelectorAll("."+k.insightBottomSheetContent).forEach(function(b){b.style.display="none"})};a.prototype.showCurrentSelectedAspect=function(b,d,e,g){if(b=b.querySelector("#aspect-bottom-sheet-"+g+"-"+e))b.style.display="block"};return a}(x),M=function(c){function a(b){var d=c.call(this)||this;d.bottomSheetName=b.bottomSheetName;d.bottomSheetHTML=b.bottomSheetHTML;d.bottomSheet=b.bottomSheet;return d}f.__extends(a,c);a.build=function(b){return f.__awaiter(this,void 0,
void 0,function(){var d,e,g,h;return f.__generator(this,function(m){switch(m.label){case 0:return[4,new Promise(function(r,y){W(["@c/aui-bottom-sheet"],function(q){r(ca(q))},y)})];case 1:return d=m.sent().default,e=this.getBottomSheetName(b.sentimentIndex),g=l["default"].cardRoot.querySelector("#"+e),h=d.create(e,"#"+e,{height:ea["default"].innerHeight*this.HEIGHT_PERCENTAGE}),h.on("afterHide",function(){h.render(function(r){a.hideAllBottomSheets(r,b.aspectBottomSheetCount,b.sentimentIndex)});n("bottomsheet-closed")}),
[2,new a(f.__assign(f.__assign({},b),{bottomSheetName:e,bottomSheetHTML:g,bottomSheet:h}))]}})})};a.prototype.show=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(b){switch(b.label){case 0:return[4,this.bottomSheet.show()];case 1:return b.sent(),[2]}})})};a.prototype.updateContent=function(b){return f.__awaiter(this,void 0,void 0,function(){var d=this;return f.__generator(this,function(e){switch(e.label){case 0:return[4,this.bottomSheet.render(function(g){return f.__awaiter(d,
void 0,void 0,function(){return f.__generator(this,function(h){this.showOnlySelectedBottomSheet(g,b.aspectButtonsSize,b.aspectIndex,b.sentimentIndex);return[2]})})})];case 1:return e.sent(),[4,this.bottomSheet.show()];case 2:return e.sent(),[2]}})})};a.getBottomSheetName=function(b){return"second-bottom-sheet-"+b};a.prototype.showOnlySelectedBottomSheet=function(b,d,e,g){for(var h=0;h<d;h++){var m=b.querySelector("#aspect-bottom-sheet-"+g+"-"+h);m&&(m.style.display=h===e?"block":"none")}};a.hideAllBottomSheets=
function(b,d,e){for(var g=0;g<d;g++){var h=b.querySelector("#aspect-bottom-sheet-"+e+"-"+g);h&&(h.style.display="none")}};a.HEIGHT_PERCENTAGE=.85;return a}(x),t=function(c,a,b){var d=fa["default"].setup(),e=d.define;d=d.attach;e(a,"click",b);d(a,c)},E=function(c,a){for(var b=0;b<a.length;b++){var d=a[b];d.classList.contains(k.selected)&&d.classList.remove(k.selected)}c.classList.add(k.selected)},N=function(){function c(a){var b=a.sentimentHTML,d=a.aspectButtons,e=a.aspectButtonsInBottomSheet,g=a.updater;
this.sentimentIndex=a.sentimentIndex;this.sentimentHTML=b;this.aspectButtons=d;this.aspectButtonsInBottomSheet=e;this.updater=g}c.build=function(a){var b=a.sentimentIndex,d=a.sentimentHTML;return f.__awaiter(this,void 0,void 0,function(){var e,g,h;return f.__generator(this,function(m){switch(m.label){case 0:return e=this.getAspectButtons(d,b),g=this.getAspectButtonsInBottomSheet(b),[4,M.build({aspectBottomSheetCount:g.length,sentimentIndex:b})];case 1:return h=m.sent(),[2,new c({sentimentIndex:b,
sentimentHTML:d,aspectButtons:e,aspectButtonsInBottomSheet:g,updater:h})]}})})};c.prototype.bind=function(){this.bindEventForButtonGroupInFirstPage();this.bindEventForButtonGroupInBottomSheet();this.bindEventTracking()};c.getAspectButtonsInBottomSheet=function(a){return(a=l["default"].cardRoot.querySelector("#second-bottom-sheet-"+a))?(a=a.querySelector("."+k.insightBottomSheetButtonGroup),Array.from(a.querySelectorAll("."+k.aspectLink))):[]};c.getAspectButtons=function(a,b){return(a=a.querySelector("#aspect-button-group-"+
b))?Array.from(a.querySelectorAll("."+k.aspectLink)):[]};c.prototype.bindEventForButtonGroupInFirstPage=function(){var a=this;this.aspectButtons.forEach(function(b,d){t(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){var e;return f.__generator(this,function(g){switch(g.label){case 0:e=this.aspectButtonsInBottomSheet[d];if(!e)return[3,2];this.updateSelectedAspectButton(e,this.aspectButtonsInBottomSheet);return[4,this.updater.updateContent({aspectButtonsSize:this.aspectButtonsInBottomSheet.length,
aspectIndex:d,sentimentIndex:this.sentimentIndex})];case 1:g.sent(),g.label=2;case 2:return e&&e.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}),[2]}})})});B(b)})};c.prototype.bindEventForButtonGroupInBottomSheet=function(){var a=this;this.aspectButtonsInBottomSheet.forEach(function(b,d){t(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,function(e){switch(e.label){case 0:return this.updateSelectedAspectButton(b,this.aspectButtonsInBottomSheet),
[4,this.updater.updateContent({aspectButtonsSize:this.aspectButtonsInBottomSheet.length,aspectIndex:d,sentimentIndex:this.sentimentIndex})];case 1:return e.sent(),[2]}})})});B(b)})};c.prototype.bindEventTracking=function(){this.aspectButtons.forEach(function(a){w(a,"aspect-button-dp-clicked")});this.aspectButtonsInBottomSheet.forEach(function(a){w(a,"aspect-button-bottomsheet-clicked")})};c.prototype.updateSelectedAspectButton=function(a,b){E(a,b)};return c}(),ka=function(){function c(a){var b=a.sentimentHTML,
d=a.aspectButtons,e=a.updater,g=a.asin;this.sentimentIndex=a.sentimentIndex;this.sentimentHTML=b;this.aspectButtons=d;this.updater=e;this.asin=g}c.build=function(a){var b=a.sentimentIndex,d=a.sentimentHTML,e=a.asin;return f.__awaiter(this,void 0,void 0,function(){var g,h;return f.__generator(this,function(m){g=this.getAspectButtons(d,b);h=new ja({sentimentIndex:b});return[2,new c({sentimentIndex:b,sentimentHTML:d,aspectButtons:g,asin:e,updater:h})]})})};c.prototype.bind=function(){var a=this;this.aspectButtons.forEach(function(b,
d){t(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,function(e){switch(e.label){case 0:return[4,this.onClick(b,d)];case 1:return e.sent(),[2]}})})});B(b);a.fetchPreviousStateOfButton(d,b)});this.bindEventTracking();this.bindEventSeeMoreButtons();this.bindCloseButtons()};c.prototype.bindEventSeeMoreButtons=function(){var a=this;l["default"].cardRoot.querySelectorAll("."+k.snippetSeeMore).forEach(function(b){b.addEventListener("click",function(){a.seeMoreStateToSessionStorage()})})};
c.prototype.onClick=function(a,b){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(d){switch(d.label){case 0:if(!a.classList.contains(k.selected))return[3,2];a.classList.remove(k.selected);return[4,this.updater.hide()];case 1:return d.sent(),this.resetStateInSessionStorage(),[3,5];case 2:return this.updateSelectedAspectButton(a),[4,this.updater.updateContent({aspectButtonsSize:this.aspectButtons.length,aspectIndex:b,sentimentIndex:this.sentimentIndex})];case 3:return d.sent(),
[4,this.updater.show()];case 4:d.sent(),this.saveStateToSessionStorage(b,this.sentimentIndex),d.label=5;case 5:return[2]}})})};c.prototype.bindCloseButtons=function(){return f.__awaiter(this,void 0,void 0,function(){var a,b=this;return f.__generator(this,function(d){a=l["default"].cardRoot.querySelectorAll("."+k.closeButton);a.forEach(function(e){t(e,e.id,function(){b.updater.hide();b.resetAllAspectButtons()})});return[2]})})};c.prototype.fetchPreviousStateOfButton=function(a,b){this.isSelectedAspect(a)&&
(this.updater.updateContent({aspectButtonsSize:this.aspectButtons.length,aspectIndex:a,sentimentIndex:this.sentimentIndex}),this.updateSelectedAspectButton(b))};c.getAspectButtons=function(a,b){return(a=a.querySelector("#aspect-button-group-"+b))?Array.from(a.querySelectorAll("."+k.aspectLink)):[]};c.prototype.resetAllAspectButtons=function(){var a=l["default"].cardRoot.querySelectorAll("."+k.aspectLink);a=Array.from(a);for(var b=0;b<a.length;b++){var d=a[b];d.classList.contains(k.selected)&&d.classList.remove(k.selected)}};
c.prototype.bindEventTracking=function(){this.aspectButtons.forEach(function(a){w(a,"aspect-button-dp-clicked")})};c.prototype.updateSelectedAspectButton=function(a){this.resetAllAspectButtons();E(a,this.aspectButtons)};c.prototype.saveStateToSessionStorage=function(a,b){sessionStorage.setItem("productInsights",JSON.stringify({selectedAspectId:a,selectedSentimentId:b,currentAsin:this.asin}))};c.prototype.seeMoreStateToSessionStorage=function(){sessionStorage.setItem("productInsightsSeeMoreClick",
JSON.stringify({isClick:!0,asin:this.asin}))};c.prototype.resetStateInSessionStorage=function(){sessionStorage.removeItem("productInsights")};c.prototype.isSelectedAspect=function(a){var b=sessionStorage.getItem("productInsights");if(null==b)return!1;var d=JSON.parse(b);b=d.selectedAspectId;var e=d.selectedSentimentId;d=d.currentAsin;return null===b||null===e||null===d?!1:d===this.asin&&parseInt(b)===a&&parseInt(e)===this.sentimentIndex};return c}(),la=function(){function c(a){var b=a.aspectBottomSheetButtons,
d=a.updater,e=a.sentimentIndex;this.aspectLinks=a.aspectLinks;this.aspectBottomSheetButtons=b;this.updater=d;this.sentimentIndex=e}c.build=function(a){var b=a.aspectLinks,d=a.aspectBottomSheetButtons,e=a.sentimentIndex;return f.__awaiter(this,void 0,void 0,function(){var g;return f.__generator(this,function(h){switch(h.label){case 0:return[4,M.build({aspectBottomSheetCount:d.length,sentimentIndex:e})];case 1:return g=h.sent(),[2,new c({aspectLinks:b,aspectBottomSheetButtons:d,updater:g,sentimentIndex:e})]}})})};
c.prototype.bindEventForLinksInFirstPage=function(){var a=this;this.aspectLinks.forEach(function(b){var d=b.id.split("-")[3],e=a.aspectBottomSheetButtons[d];t(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,function(g){switch(g.label){case 0:return this.updateSelectedAspectButton(e,this.aspectBottomSheetButtons),[4,this.updater.updateContent({aspectButtonsSize:this.aspectBottomSheetButtons.length,aspectIndex:+d,sentimentIndex:this.sentimentIndex})];case 1:return g.sent(),
e&&e.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}),[2]}})})})})};c.prototype.bindEventForButtonGroupInBottomSheet=function(){var a=this;this.aspectBottomSheetButtons.forEach(function(b,d){t(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,function(e){switch(e.label){case 0:return this.updateSelectedAspectButton(b,this.aspectBottomSheetButtons),[4,this.updater.updateContent({aspectButtonsSize:this.aspectBottomSheetButtons.length,aspectIndex:d,
sentimentIndex:this.sentimentIndex})];case 1:return e.sent(),[2]}})})})})};c.prototype.bind=function(){this.bindEventForLinksInFirstPage();this.bindEventForButtonGroupInBottomSheet();this.bindEventTracking()};c.prototype.bindEventTracking=function(){this.aspectLinks.forEach(function(a){w(a,"aspect-link-dp-clicked")});this.aspectBottomSheetButtons.forEach(function(a){w(a,"aspect-button-bottomsheet-clicked")})};c.prototype.updateSelectedAspectButton=function(a,b){E(a,b)};return c}(),ma=function(){try{var c=
C["default"].cardRoot.ownerDocument.getElementById("cr-detailpage-pd-bottom-cards"),a=C["default"].cardRoot.ownerDocument.getElementById("cr-detailpage-pd-top-cards"),b=C["default"].cardRoot.ownerDocument.getElementById("cr-product-insights-cards");null!=b&&null!=a||null!=b&&null!=c||null!=c&&null!=a?n("duplicate-card-rendered"):null==c&&null==a&&null==b?n("no-card-rendered"):n("single-card-rendered")}catch(d){n("atf-experiment-metrics-error")}},na=function(c){var a=sessionStorage.getItem("productInsightsSeeMoreClick");
if(null==a)c=!1;else{a=JSON.parse(a);var b=a.isClick;c=a.asin===c&&!!b}c&&(c=l["default"].cardRoot.querySelectorAll("."+k.contentContainer),0<c.length&&(c[0].scrollIntoView({block:"center",inline:"center"}),sessionStorage.removeItem("productInsightsSeeMoreClick")))},pa=function(){return f.__awaiter(void 0,void 0,void 0,function(){var c,a,b,d,e,g,h,m,r,y,q,u,F,G,O,P,Q,R,S,H,T,I,J;return f.__generator(this,function(p){switch(p.label){case 0:p.trys.push([0,9,,10]);c=k.bottomSheetWrapper.split(" ")[0];
a=l["default"].cardRoot.getElementsByClassName(c)[0];b=0<l["default"].cardRoot.getElementsByClassName(k.isDesktopView).length;d=function(){return l["default"].cardRoot.getElementsByClassName(k.contentContainer)[0]};e=b?null!==(J=null===(I=d())||void 0===I?void 0:I.dataset.asin)&&void 0!==J?J:"":"";if(!a)return[3,8];g=l["default"].cardRoot.querySelectorAll("."+k.sentimentSection);g.forEach(function(U,V){return f.__awaiter(void 0,void 0,void 0,function(){var z;return f.__generator(this,function(A){switch(A.label){case 0:return b?
[4,ka.build({sentimentHTML:U,sentimentIndex:V,asin:e})]:[3,2];case 1:return z=A.sent(),z.bind(),[3,4];case 2:return[4,N.build({sentimentHTML:U,sentimentIndex:V})];case 3:z=A.sent(),z.bind(),A.label=4;case 4:return[2]}})})});h=l["default"].cardRoot.querySelectorAll("#product-summary");m=0<h.length;if(!m)return[3,8];r=l["default"].cardRoot.querySelectorAll("."+k.aspectSummaryLink);y=oa(r);p.label=1;case 1:p.trys.push([1,6,7,8]),q=f.__values(y),u=q.next(),p.label=2;case 2:if(u.done)return[3,5];F=f.__read(u.value,
2);G=F[0];O=F[1];P=N.getAspectButtonsInBottomSheet(G);return[4,la.build({aspectLinks:O,aspectBottomSheetButtons:P,sentimentIndex:G})];case 3:Q=p.sent(),Q.bind(),p.label=4;case 4:return u=q.next(),[3,2];case 5:return[3,8];case 6:return R=p.sent(),H={error:R},[3,8];case 7:try{u&&!u.done&&(T=q.return)&&T.call(q)}finally{if(H)throw H.error;}return[7];case 8:return b&&na(e),ia(),ma(),[3,10];case 9:return S=p.sent(),da["default"].log("Product Insight: Error:"+S.message,"ERROR"),[3,10];case 10:return[2]}})})},
oa=function(c){var a=new Map;c.forEach(function(b){var d=+b.id.split("-")[2];a.has(d)||a.set(d,[]);a.get(d).push(b)});return a};K._operationNames=[];K.card=function(){return f.__awaiter(void 0,void 0,void 0,function(){return f.__generator(this,function(c){switch(c.label){case 0:return[4,pa()];case 1:return[2,c.sent()]}})})}});
