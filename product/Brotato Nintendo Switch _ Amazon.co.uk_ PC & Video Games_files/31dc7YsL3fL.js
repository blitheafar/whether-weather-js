'use strict';mix_d("BuffetDisclaimersCards__buffet-disclaimers-card:buffet-disclaimers-card__ONXZadSh","exports tslib @c/remote-operations @c/scoped-dom @p/buffet-sidesheet @c/aui-utils @c/metrics".split(" "),function(U,t,ka,la,ma,I,na){function P(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var oa=P(ka),m=P(la),V=P(ma),W;(function(a){a.BEFORE_FIRST_OPEN="before first open";a.OPEN="open";a.CLOSE="close"})(W||(W={}));var X;(function(a){a.RIGHT_OUT_OF_SCREEN="-120%";a.INSIDE_SCREEN=
"0px"})(X||(X={}));var u;(function(a){a.MOBILE="mobile";a.DESKTOP="desktop"})(u||(u={}));var v;(function(a){a.ATF="ATF";a.BTF="BTF"})(v||(v={}));var Y;(function(a){a.FATAL="FATAL";a.ERROR="ERROR";a.WARN="WARN"})(Y||(Y={}));var w;(function(a){a[a.PSI=0]="PSI";a[a.RSP_MANUFACTURER=1]="RSP_MANUFACTURER"})(w||(w={}));var g;(function(a){a.CLIENT_LOAD="Buffet.Client.Load";a.INGRESS_LINK_CLICK="Buffet.Sidesheet.IngressLinkClick";a.SIDESHEET_OPENED="Buffet.Sidesheet.Open";a.SIDESHEET_CLOSED="Buffet.Sidesheet.Close";
a.SIDESHEET_DWELL_TIME="Buffet.Sidesheet.DwellTime";a.SIDESHEET_CONTENT_LOADED="Buffet.SdesheetContent.Load";a.SIDESHEET_CONTENT_LOAD_LATENCY="Buffet.SidesheetContent.LoadLatency";a.PSI_PILL_CLICK="Buffet.SidesheetContent.PsiPillClick";a.MANUFACTURER_PILL_CLICK="Buffet.SidesheetContent.ManufacturerPillClick";a.RSP_PILL_CLICK="Buffet.SidesheetContent.RspPillClick";a.PSI_ZOOM_IN_CLICK="Buffet.SidesheetContent.PsiZoomInClick";a.PSI_ZOOM_OUT_CLICK="Buffet.SidesheetContent.PsiZoomOutClick";a.MISSING_ASIN_ERROR=
"Buffet.MissingAsin.Error";a.MISSING_CRUCIAL_ELEMENTS_ERROR="Buffet.MissingCrucialElements.Error";a.MISSING_GPSR_CONTENT_ERROR="Buffet.MissingGpsrContent.Error";a.SIDESHEET_OPEN_ERROR="Buffet.Sidesheet.Open.Error";a.SIDESHEET_CONTENT_LOAD_ERROR="Buffet.Sidesheet.ContentLoad.Error";a.ALL_AAPI_CALL_FAIL="Buffet.AllAapiCall.FAIL";a.RSP_MANUFACTURER_AAPI_CALL_FAIL="Buffet.RspManufacturerAapiCall.FAIL";a.PSI_AAPI_CALL_FAIL="Buffet.PsiAapiCall.FAIL"})(g||(g={}));var J=function(a,b){a&&!a.classList.contains(b)&&
a.classList.add(b)},K=function(a,b){a&&a.classList.contains(b)&&a.classList.remove(b)},F=function(a){if(!a.every(function(b){return b})||!a.map(function(b){return b.id}).every(function(b){return b}))throw Error("Some HTML elements are missing.");},Z=function(a){return{html:a.innerHTML,className:a.className,style:a.style.cssText}},L=function(a,b){a.innerHTML=b.html;a.className=b.className;a.style.cssText=b.style},x;(function(a){a.LANDING_ASIN="buffet-btf-asin";a.OPEN_BUTTON_IMG_DOC_CONT="buffet-sidesheet-ingress";
a.DISCLAIMER_CONTENT="buffet-disclaimer-content";a.CLOSE_BUTTON="buffet-sidesheet-close";a.DARKENED_BACKGROUND="buffet-darkened-background";a.SIDESHEET_ROOT="buffet-sidesheet-root";a.SIDESHEET="buffet-sidesheet";a.SIDESHEET_CONTENT="buffet-sidesheet-content";a.SIDESHEET_SUB_CONTENT="buffet-sidesheet-sub-content";a.SIDESHEET_CONTENT_BUFFER_SPINNER="buffet-sidesheet-content-spinner";a.SIDESHEET_ERROR_ALERT="buffet-sidesheet-error-alert";a.SIDESHEET_PILLS_CONTAINER="buffet-sidesheet-pills-container";
a.SIDESHEET_RSP_PILL="buffet-sidesheet-rsp-pill";a.SIDESHEET_MANUFACTURER_PILL="buffet-sidesheet-manufacturer-pill";a.SIDESHEET_PSI_PILL="buffet-sidesheet-psi-pill";a.SIDESHEET_RSP_CONTENT="buffet-sidesheet-rsp-content-container";a.SIDESHEET_MANUFACTURER_CONTENT="buffet-sidesheet-manufacturer-content-container";a.SIDESHEET_PSI_CONTENT="buffet-sidesheet-psi-content-container";a.SIDESHEET_PSI_CAROUSEL="buffet-psi-component";a.RSP_MANUFACTURER_AAPI_FAIL="buffet-sidesheet-rsp-manufacturer-aapi-fail";
a.PSI_AAPI_FAIL="buffet-sidesheet-psi-aapi-fail"})(x||(x={}));var k=function(a,b,f,d){void 0===d&&(d=1);na.count(a+"."+b+"."+f,d)},aa=function(a,b,f){if(a){var d=!1,h=a.querySelectorAll("li"),c=a.querySelectorAll("img");h.forEach(function(p,q){p.style.maxWidth="1600px";0===q?p.style.marginLeft="0px":q===h.length-1&&(p.style.marginRight="0px")});c.forEach(function(p){p.addEventListener("click",function(){return t.__awaiter(void 0,void 0,void 0,function(){return t.__generator(this,function(q){switch(q.label){case 0:return d?
(k(b,f,g.PSI_ZOOM_OUT_CLICK),h.forEach(function(n){n.style.width=""}),c.forEach(function(n){n.style.maxWidth="100%";var y=m["default"].cardRoot.querySelector("#"+n.id+"-zoomed-out").value;n.src=y}),d=!1):(k(b,f,g.PSI_ZOOM_IN_CLICK),h.forEach(function(n){n.style.width="1600px"}),c.forEach(function(n){n.style.maxWidth="1600px";var y=m["default"].cardRoot.querySelector("#"+n.id+"-zoomed-in").value;n.src=y}),d=!0),[4,p.decode()];case 1:return q.sent(),p.scrollIntoView({block:"center",inline:"center"}),
[2]}})})})})}},ba;(function(a){a.SHOW="show";a.HIDE="hide";a.CLICK="click";a.BEFORE_SHOW="beforeShow";a.WEE_SHOW="weeShow";a.RSP_SHOW="rspShow"})(ba||(ba={}));var e;(function(a){a[a.RSP=0]="RSP";a[a.MANUFACTURER=1]="MANUFACTURER";a[a.PSI=2]="PSI"})(e||(e={}));var M=function(a,b,f){for(var d in e){var h=e[d];h===a?(J(b[h],"a-button-selected"),K(f[h],"aok-hidden")):(K(b[h],"a-button-selected"),J(f[h],"aok-hidden"))}},pa=function(a,b){a.forEach(function(f){f.addEventListener("click",function(){var d=
b.offsetWidth,h=b.scrollWidth,c=f.offsetLeft-d/2+f.offsetWidth/2;0>c?c=0:c+d>h&&(c=h-d);b.scroll({left:c,behavior:"smooth"})})})},Q,R,A=new Set(Object.values(w).filter(function(a){return"number"===typeof a})),r,l,ca=Object.keys(e).length/2,qa=Object.keys(w).length/2,ra=function(a,b,f,d,h,c,p,q,n,y){return t.__awaiter(void 0,void 0,void 0,function(){var B,E,C,N,G,z,H,da;return t.__generator(this,function(D){switch(D.label){case 0:B=Date.now();a&&(a=!1,Q=Z(q),R=Z(n));if(b)return[3,6];D.label=1;case 1:D.trys.push([1,
4,,5]);L(q,Q);L(n,R);E=m["default"].cardRoot.querySelector("#"+c.SIDESHEET_SUB_CONTENT);C=m["default"].cardRoot.querySelector("#"+c.SIDESHEET_PILLS_CONTAINER);r=Array(ca);l=Array(ca);r[e.RSP]=m["default"].cardRoot.querySelector("#"+c.SIDESHEET_RSP_PILL);r[e.MANUFACTURER]=m["default"].cardRoot.querySelector("#"+c.SIDESHEET_MANUFACTURER_PILL);r[e.PSI]=m["default"].cardRoot.querySelector("#"+c.SIDESHEET_PSI_PILL);l[e.RSP]=m["default"].cardRoot.querySelector("#"+c.SIDESHEET_RSP_CONTENT);l[e.MANUFACTURER]=
m["default"].cardRoot.querySelector("#"+c.SIDESHEET_MANUFACTURER_CONTENT);l[e.PSI]=m["default"].cardRoot.querySelector("#"+c.SIDESHEET_PSI_CONTENT);try{F([E]),F([C]),F(r),F(l)}catch(ea){throw k(f,d,g.MISSING_GPSR_CONTENT_ERROR),Error();}pa(r,C);M(e.PSI,r,l);r[e.RSP].addEventListener("click",function(){M(e.RSP,r,l);k(f,d,g.RSP_PILL_CLICK)});r[e.MANUFACTURER].addEventListener("click",function(){M(e.MANUFACTURER,r,l);k(f,d,g.MANUFACTURER_PILL_CLICK)});r[e.PSI].addEventListener("click",function(){M(e.PSI,
r,l);k(f,d,g.PSI_PILL_CLICK)});return[4,h.getPsiContent({asin:p})];case 2:return(N=D.sent())&&"false"===N.querySelector("#"+c.PSI_AAPI_FAIL).value?(A.delete(w.PSI),l[e.PSI].innerHTML=N.outerHTML,G=m["default"].cardRoot.querySelector("#"+c.SIDESHEET_PSI_CAROUSEL),aa(G,f,d)):k(f,d,g.PSI_AAPI_CALL_FAIL),[4,h.getRspManufacturerContent({asin:p})];case 3:(z=D.sent())&&"false"===z.querySelector("#"+c.RSP_MANUFACTURER_AAPI_FAIL).value?(A.delete(w.RSP_MANUFACTURER),H=z.querySelector("#"+c.SIDESHEET_RSP_CONTENT),
da=z.querySelector("#"+c.SIDESHEET_MANUFACTURER_CONTENT),l[e.RSP].innerHTML=H.innerHTML,l[e.MANUFACTURER].innerHTML=da.innerHTML):k(f,d,g.RSP_MANUFACTURER_AAPI_CALL_FAIL);if(A.size===qa)throw k(f,d,g.ALL_AAPI_CALL_FAIL),Error();q.style.opacity="0";k(f,d,g.SIDESHEET_CONTENT_LOAD_LATENCY,Date.now()-B);I.delay(function(){J(q,"aok-hidden");K(E,"aok-hidden");n.style.opacity="1"},200);b=!0;return[3,5];case 4:return D.sent(),k(f,d,g.SIDESHEET_CONTENT_LOAD_ERROR),L(q,Q),L(n,R),y=m["default"].cardRoot.querySelector("#"+
c.SIDESHEET_ERROR_ALERT),K(y,"aok-hidden"),q.style.opacity="0",I.delay(function(){J(q,"aok-hidden");n.style.opacity="1"},200),[3,5];case 5:return[3,7];case 6:0!==A.size&&A.forEach(function(ea){return t.__awaiter(void 0,void 0,void 0,function(){var fa,S,ha,O,ia,ja;return t.__generator(this,function(T){switch(T.label){case 0:fa=ea;switch(fa){case w.PSI:return[3,1];case w.RSP_MANUFACTURER:return[3,3]}return[3,5];case 1:return[4,h.getPsiContent({asin:p})];case 2:return(S=T.sent())&&"false"===S.querySelector("#"+
c.PSI_AAPI_FAIL).value?(A.delete(w.PSI),l[e.PSI].style.opacity="0",I.delay(function(){l[e.PSI].innerHTML=S.outerHTML;l[e.PSI].style.opacity="1"},500),ha=m["default"].cardRoot.querySelector("#"+c.SIDESHEET_PSI_CAROUSEL),aa(ha,f,d)):k(f,d,g.PSI_AAPI_CALL_FAIL),[3,5];case 3:return[4,h.getRspManufacturerContent({asin:p})];case 4:return(O=T.sent())&&"false"===O.querySelector("#"+c.RSP_MANUFACTURER_AAPI_FAIL).value?(A.delete(w.RSP_MANUFACTURER),ia=O.querySelector("#"+c.SIDESHEET_RSP_CONTENT),ja=O.querySelector("#"+
c.SIDESHEET_MANUFACTURER_CONTENT),l[e.RSP].style.opacity="0",l[e.MANUFACTURER].style.opacity="0",I.delay(function(){l[e.RSP].innerHTML=ia.innerHTML;l[e.MANUFACTURER].innerHTML=ja.innerHTML;l[e.RSP].style.opacity="1";l[e.MANUFACTURER].style.opacity="1"},500)):k(f,d,g.RSP_MANUFACTURER_AAPI_CALL_FAIL),[3,5];case 5:return[2]}})})}),D.label=7;case 7:return[2,[a,b]]}})})};U._operationNames=[];U.card=function(){return t.__awaiter(void 0,void 0,void 0,function(){var a,b,f,d,h,c,p,q,n,y,B,E,C;return t.__generator(this,
function(N){k(u.DESKTOP,v.BTF,g.CLIENT_LOAD);a=m["default"].cardRoot.querySelector("#"+x.LANDING_ASIN);if(!a||!a.value)return k(u.DESKTOP,v.BTF,g.MISSING_ASIN_ERROR),[2];b=m["default"].cardRoot.querySelector("#"+x.OPEN_BUTTON_IMG_DOC_CONT);f=m["default"].cardRoot.querySelector("#"+x.SIDESHEET_CONTENT);d=m["default"].cardRoot.querySelector("#"+x.DARKENED_BACKGROUND);h=m["default"].cardRoot.querySelector("#"+x.SIDESHEET_CONTENT_BUFFER_SPINNER);c=m["default"].cardRoot.querySelector("#"+x.SIDESHEET_ERROR_ALERT);
p=m["default"].cardRoot.querySelector("#"+x.CLOSE_BUTTON);q=[b,f,d,h,c,p];try{F(q)}catch(G){return k(u.DESKTOP,v.BTF,g.MISSING_CRUCIAL_ELEMENTS_ERROR),[2]}n=oa["default"].setup(["getRspManufacturerContent","getPsiContent"]);y=!0;B=!1;b.addEventListener("click",function(G){return t.__awaiter(void 0,void 0,void 0,function(){var z;return t.__generator(this,function(H){switch(H.label){case 0:return G.preventDefault(),k(u.DESKTOP,v.BTF,g.INGRESS_LINK_CLICK),V["default"].showSidesheet(),k(u.DESKTOP,v.BTF,
g.SIDESHEET_OPENED),[4,ra(y,B,u.DESKTOP,v.BTF,n,x,a.value,h,f,c)];case 1:z=t.__read.apply(void 0,[H.sent(),2]);y=z[0];if(B=z[1])k(u.DESKTOP,v.BTF,g.SIDESHEET_CONTENT_LOADED),E=Date.now();return[2]}})})});C=function(){V["default"].closeSidesheet();k(u.DESKTOP,v.BTF,g.SIDESHEET_CLOSED);B&&k(u.DESKTOP,v.BTF,g.SIDESHEET_DWELL_TIME,Date.now()-E)};p.addEventListener("click",function(){C()});d.addEventListener("click",function(){C()});return[2]})})}});
