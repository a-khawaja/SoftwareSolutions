(()=>{"use strict";var e={7418:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,l,r=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))a.call(i,c)&&(r[c]=i[c]);if(t){l=t(i);for(var u=0;u<l.length;u++)n.call(i,l[u])&&(r[l[u]]=i[l[u]])}}return r}}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{a.r(n),a.d(n,{initDemoImport:()=>A});const e=window.lodash;let t={},o={};const i="NOT_INSTALLED",l=e=>t=e,r=()=>{var e;return(null===(e=o)||void 0===e?void 0:e.plugins)||[]},s=a=>{const n=(0,e.find)(t.demos,{slug:a});o=n},c=()=>t.ajax_nonce,u=()=>t.ajax_url,d=e=>{var a;return(null===(a=t.texts)||void 0===a?void 0:a[e])||""},m=e=>t.plugins_states[e]||i,p=window.jQuery,b=window.wp.i18n,g=window.wp.url,f=t=>new Promise(((a,n)=>{const o=t instanceof window.FormData?t:new window.FormData;o.append("nonce",c()),(0,e.each)(t,((e,t)=>o.append(t,e))),p.ajax({method:"POST",url:(0,g.addQueryArgs)(u(),{nonce:c(),action:o.get("action")}),data:o,contentType:!1,processData:!1}).done((e=>{if(!1===e.success){var t,o;const a=(null==e||null===(t=e.data)||void 0===t?void 0:t.error_message)||(null==e||null===(o=e.data)||void 0===o?void 0:o.error);n(a)}else a(e)})).fail((e=>{n(`${e.status} ( ${e.statusText} ) : ${e.responseText}`)}))})),h=async e=>await f({action:"kubio-demo-site-activate-plugin",slug:e}),w=async e=>{const t=m(e);try{switch(t){case"ACTIVE":return!0;case"INSTALLED":await h(e);break;case i:await(async e=>await f({action:"kubio-demo-site-install-plugin",slug:e}))(e),await h(e)}}catch(e){throw e}},k=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a={action:"kubio-demo-site-import-data",slug:o.slug||0,first_call:!0};try{let n={};do{if(t&&a.first_call?((0,e.each)(a,((e,a)=>t.append(a,e))),n=await f(t)):n=await f(a),a=(0,e.omit)(a,"first_call"),n.before_import_action?(S(N.PREPARING,I.PROGRESS),a={...a,before_import_action:n.before_import_action}):(S(N.PREPARING,I.DONE),S(N.CONTENT,I.PROGRESS),a=(0,e.omit)(a,"before_import_action")),"finished"===n.status){S(N.CONTENT,I.DONE);break}}while("requires-new-ajax-call"===n.status)}catch(e){x(e)}};let y=0;const v=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const a=p("#kubio-templates-list"),n=p("#kubio-template-installing");if(e){y=window.scrollY,a.hide(),n.css("display","flex").hide().fadeIn(100),n.find("img").attr("src",o.thumb);const e=(0,b.sprintf)(d("importing_template"),o.name);n.find("[data-title]").html(e);const i=r(),l=n.find("[data-plugins]"),s=n.find("[data-plugins-list]");i.length?(l.show(),s.empty(),i.forEach((e=>{const a=(n=e.slug,t.texts.plugins_states[m(n)]);var n;s.append(`<li><span>${e.label}</span><span>${a}</span></li>`)}))):l.hide();const c=!o.is_pro;(e=>{const t=p("#kubio-template-installing"),a=t.find("#import-button"),n=t.find("[data-available-pro-only]"),o=t.find("[data-check-pro-features]");e?(n.addClass("hidden"),o.addClass("hidden"),a.attr("data-start-import",""),a.show()):(a.removeAttr("data-start-import"),a.hide(),n.removeClass("hidden"),o.removeClass("hidden"))})(!(!t.kubio_pro_active&&!c))}else n.css("display","flex").hide(),p("#kubio-templates-list").show(),setTimeout((()=>window.scrollTo(0,y)),5)},_=async()=>{p(".kubio-admin-page-header-start-editing").addClass("hidden");const e=p("#kubio-template-installing"),t=e.find("[data-info]"),a=e.find("[data-progress]"),n=e.find("[data-install-buttons]"),o=e.find("[data-install-success-buttons]"),i=p(".kubio-progress-bar");t.hide(),a.css("display","flex").show(),n.hide(),i.show();try{await(async()=>{try{S(N.PLUGINS,I.PROGRESS);const e=r();for(let t=0;t<e.length;t++){const{slug:a}=e[t];await w(a)}S(N.PLUGINS,I.DONE)}catch(e){x(e)}})(),await k()}catch(e){x()}i.hide(),o.show(),p(".kubio-admin-page-header-start-editing").removeClass("hidden")},E=()=>{p((()=>{!function(){try{const e=new URL(location).searchParams.get("import");if(!e)return;s(e),v(),_()}catch(e){console.error(e)}}(),p(document).on("click","#kubio-templates-list button[data-slug]",(function(){const e=p(this).data("slug");s(e),v()})),p(document).on("click","#kubio-template-installing button[data-cancel-import]",(function(){v(!1)})),p(document).on("click","#kubio-template-installing button[data-start-import]",_),p(document).on("submit","#kubio-import-demo-site",(async e=>{e.preventDefault(),e.stopPropagation();const t=e.target,a=new window.FormData(t);j=!0;const n=p(t).siblings(".kubio-progress-bar");n.show(),p(t).hide();try{await k(a)}catch(e){n.hide();const t=P(e);p("[data-kubio-manual-demo-site-errors]").append(`<div class="kubio-demo-site-manual-import-error">${t}</div>`)}n.hide()}))}))},N={PLUGINS:"plugins",PREPARING:"preparing",CONTENT:"content"},O={plugins:"data-installing-plugins",preparing:"data-preparing-for-import",content:"data-importing-content"},I={INACTIVE:"",PROGRESS:"progress",DONE:"active"},S=(e,t)=>{p(`[data-progress-list] [${O[e]}]`).attr("class",t)};let j=!1;const P=t=>{t=(0,e.castArray)(t);let a="";return t.forEach((e=>a+=`<p>${e}</p>`)),a},C=t=>{if(j)return;const a="[data-importing-errors]";p(a).show(),(t=(0,e.castArray)(t)).forEach((e=>p(`${a} [data-importing-errors-content]`).append(`<p>${e}</p>`)))},x=e=>{throw j||(C(e),C(d("import_stopped")),j=!0),p(".kubio-progress-bar").hide(),p("[data-progress-list] li").attr("class",""),e},A=e=>{l(e),E()},T=p("#upgrade_to_pro_wrapper #kubio-page-builder-activate-license-form");let R=T;const L=p(".notice #kubio-page-builder-activate-license-form");L.length&&(R=L);const $=p("#kubio-page-builder-check-license form");if($.length&&(R=$),R.length){const ne=R.find("input[type=text]"),oe=R.parent(),ie=oe.find("#kubio-page-builder-activate-license-message"),le=oe.find(".description"),re=oe.find(".spinner-holder");function se(e){const t=jQuery(document.createElement("div")).append(e);return t.find("input,button,script,style").remove(),t.find("body").length?t.find("body").html():t.html()}function ce(){ie.hide()}function ue(e){me(),ie.attr("class","message error-message"),ie.html(se(e)),ie.show()}function de(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";R.hide(),ie.hide(),le.hide(),re.show(),""!==e&&("loader"===e?(re.removeClass("ok"),re.find(".icon .loader").show()):"ok"===e&&re.addClass("ok")),""!==t&&re.find(".message").text(t)}function me(){R.show(),ie.show(),le.show(),re.hide()}ne.on("keyup change",ce),R.on("submit",(function(e){e.preventDefault(),e.stopPropagation();const t=ne.val();t?(ce(),de("loader",(0,b.__)("Loading…","kubio")),R.addClass("disabled"),wp.ajax.send("kubiowp-page-builder-activate",{data:{key:t}}).done((function(e){T.length?(de("loader",(0,b.__)("Installing Kubio PRO…","kubio")),wp.ajax.post("kubiowp-page-builder-maybe-install-pro").done((function(){de("ok",(0,b.__)("Kubio PRO sucessfully installed","kubio"))})).fail((function(e){e.message?ue(e.message):ue((0,b.__)("There was an error installing the Kubio PRO plugin","kubio"))}))):de("ok",e||(0,b.__)("Activated successfully","kubio"))})).fail((function(e){me(),R.removeClass("disabled"),ue(e.responseJSON.data)}))):ue((0,b.__)("License key is empty","kubio"))})),$.length&&window.wp&&window.wp.ajax&&wp.ajax.send("kubiowp-page-builder-check-license").fail((function(e){R.closest(".notice").removeClass("hidden"),ue(se(e.responseJSON.data))}))}const D=window.wp.element,K=window.kubio.ai,M=window.kubio.core,G=window.kubio.coreHooks,q=window.kubio.log,U=window.kubio.pro,F=window.kubio.utils,B=window.React;var H=a.n(B),Y=a(7418),Q=a.n(Y),J=function(){return J=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},J.apply(this,arguments)};const V=function(e){for(var t=e.url,a=e.allowFullScreen,n=e.position,o=e.display,i=e.height,l=e.width,r=e.overflow,s=e.styles,c=e.onLoad,u=e.onMouseOver,d=e.onMouseOut,m=e.scrolling,p=e.id,b=e.frameBorder,g=e.ariaHidden,f=e.sandbox,h=e.allow,w=e.className,k=e.title,y=e.ariaLabel,v=e.ariaLabelledby,_=e.name,E=e.target,N=e.loading,O=e.importance,I=e.referrerpolicy,S=e.allowpaymentrequest,j=e.src,P=Q()({src:j||t,target:E||null,style:{position:n||null,display:o||"block",overflow:r||null},scrolling:m||null,allowpaymentrequest:S||null,importance:O||null,sandbox:f||null,loading:N||null,styles:s||null,name:_||null,className:w||null,referrerpolicy:I||null,title:k||null,allow:h||null,id:p||null,"aria-labelledby":v||null,"aria-hidden":g||null,"aria-label":y||null,width:l||null,height:i||null,onLoad:c||null,onMouseOver:u||null,onMouseOut:d||null}),C=Object.create(null),x=0,A=Object.keys(P);x<A.length;x++){var T=A[x];null!=P[T]&&(C[T]=P[T])}for(var R=0,L=Object.keys(C.style);R<L.length;R++){var $=L[R];null==C.style[$]&&delete C.style[$]}if(a)if("allow"in C){var D=C.allow.replace("fullscreen","");C.allow=("fullscreen "+D.trim()).trim()}else C.allow="fullscreen";return b>=0&&(C.style.hasOwnProperty("border")||(C.style.border=b)),H().createElement("iframe",J({},C))};let z="",W=()=>(0,F.getBackendData)("kubioAIPricingURL");W=U.upgradeToProURL;const X=(0,D.memo)((e=>{let{message:t}=e;return(0,D.createElement)("p",{className:"spinner-holder"},(0,D.createElement)("span",{className:"loader",dangerouslySetInnerHTML:{__html:z}}),t)})),Z=e=>{let{message:t}=e;return(0,D.createElement)("div",{className:"notice notice-error"},(0,D.createElement)("p",null,t))},ee=e=>{let{remainingCredits:t,email:a}=e;const[n,o]=(0,D.useState)(1),[i,l]=(0,D.useState)(!0),[r,s]=(0,D.useState)({data:[]});let c=(0,D.createElement)(D.Fragment,null);return(0,G.useEffectAsync)((async()=>{try{l(!0);const e=await(0,K.getAIUsage)(n);s(e)}catch(e){}finally{l(!1)}}),[n]),(0,D.createElement)(D.Fragment,null,(0,D.createElement)("div",{className:"kubio-admin-row kubio-ai-account-info nowrap"},(0,D.createElement)("div",{className:"kubio-admin-col grow"},(0,D.createElement)("h3",null,(0,b.__)("You are connected to Kubio AI","kubio")),(0,D.createElement)("p",{dangerouslySetInnerHTML:{__html:(0,b.sprintf)(// translators: placeholders are for email and number of credits
(0,b.__)("You are currently connected as %1$s, and the current account has %2$s AI credits available","kubio"),`<i class="kubio-ai-email">${a}</i>`,`<i class="kubio-ai-credits">${t}</i>`)}})),(0,D.createElement)("div",{className:"kubio-admin-col kubio-ai-info-actions"},(0,D.createElement)("a",{href:W(),target:"_blank",className:"button button-primary button-hero",rel:"noreferrer"},(0,b.__)("Get more credits","kubio")),c)),(0,D.createElement)("hr",null),(0,D.createElement)("div",{className:"kubio-admin-row kubio-ai-account-usage"},(0,D.createElement)("div",{className:"kubio-admin-row kubio-ai-account-info"},(0,D.createElement)("div",{className:"kubio-admin-col grow"},(0,D.createElement)("h3",null,(0,b.__)("Kubio AI credits usage","kubio")),(0,D.createElement)("p",null,(0,b.__)("The table below displays how Kubio AI credits were spent on this site","kubio")))),(0,D.createElement)("table",{className:"wp-list-table widefat fixed striped table-view-list pages"},(0,D.createElement)("thead",null,(0,D.createElement)("tr",null,(0,D.createElement)("th",{scope:"col",className:"manage-column r"},(0,b.__)("Date","kubio")),(0,D.createElement)("th",{scope:"col",className:"manage-column r"},(0,b.__)("Message","kubio")))),(0,D.createElement)("tbody",null,i&&(0,D.createElement)("tr",null,(0,D.createElement)("td",{className:"no-data",colSpan:2},(0,D.createElement)(X,{message:(0,b.__)("Retrieving data…","kubio")}))),!i&&0===r.data.length&&(0,D.createElement)("tr",null,(0,D.createElement)("td",{className:"no-data",colSpan:2},(0,D.createElement)("p",null,(0,b.__)("Currently there is no usage history for this site","kubio")))),!i&&0!==r.data.length&&r.data.map((e=>(0,D.createElement)("tr",{key:e.created_at},(0,D.createElement)("td",null,e.created_at),(0,D.createElement)("td",null,e.content)))))),(0,D.createElement)("div",{className:"tablenav bottom"},(0,D.createElement)("div",{className:"tablenav-pages"},(0,D.createElement)("span",{className:"displaying-num"},(0,b.sprintf)(// translators: %s number of items
(0,b._n)("%s item","%s items",r.total,"kubio"),r.total)),(0,D.createElement)("span",{className:"pagination-links"},(0,D.createElement)("button",{className:"first-page button","aria-hidden":"true",onClick:()=>o(1),disabled:1===n},(0,D.createElement)("span",{"aria-hidden":"true"},"«")),(0,D.createElement)("button",{className:"prev-page button","aria-hidden":"true",disabled:1===n,onClick:()=>o((e=>Math.max(1,e-1)))},(0,D.createElement)("span",{"aria-hidden":"true"},"‹")),(0,D.createElement)("span",{className:"paging-input"},(0,D.createElement)("span",{className:"tablenav-paging-text"},(0,b.sprintf)(// translators: the restult will be like 1 of 4
(0,b.__)("%1$s of %2$s","kubio"),n,r.last_page))),(0,D.createElement)("button",{className:"next-page button",disabled:n===r.last_page,onClick:()=>o((e=>Math.min(r.last_page,e+1)))},(0,D.createElement)("span",{"aria-hidden":"true"},"›")),(0,D.createElement)("button",{className:"last-page button",disabled:n===r.last_page,onClick:()=>o(r.last_page)},(0,D.createElement)("span",{"aria-hidden":"true"},"»")))))))},te=()=>{const t=(0,e.first)((0,F.getBackendData)("kubioCloudUrl").split("?")).replace(/\/+$/,"");return(0,D.useEffect)((()=>{const e=t=>{const{action:a=null,value:n=null,error:o=null}=t.data||{};"ai_subscription_key"===a&&(window.removeEventListener("message",e),o&&q.Log.error("AI Connect Iframe",o),n||q.Log.error("AI Connect Iframe, no value"),(async()=>{await(0,K.setAIKey)({aiKey:n}),window.location.reload()})())};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}}),[]),(0,D.createElement)("div",{className:"kubio-admin-row kubio-ai-account-info"},(0,D.createElement)("div",{className:"kubio-admin-col"},(0,D.createElement)("h2",null,(0,b.__)("You are not connected to Kubio AI","kubio")),(0,D.createElement)("p",null,(0,b.__)("It appears that you haven't fully leveraged the potential of Kubio AI features on your website. By connecting and allowing the AI to assist you, you'll optimize its capabilities and enhance your overall experience. Let the AI do the heavy lifting for you—seamless and efficient.","kubio"))),(0,D.createElement)("div",{className:"kubio-admin-col kubio-ai-info-actions kubio-ai-info-actions__login"},(0,D.createElement)(V,{loading:"eager",importance:"high",className:"kubio-connect-iframe",url:`${t}/ui-route/connect-ai`,title:"Kubio AI Connect",sandbox:"allow-popups allow-modals allow-same-origin allow-scripts allow-forms allow-popups-to-escape-sandbox"})))};window.aiInfoInit=function(e){z=e.loader_iframe,e.connected?async function(){try{const{remaining_credits:e=0,account_email:t=30}=await(0,K.getAIInfo)();(0,M.reactRender)((0,D.createElement)(ee,{remainingCredits:e,email:t}),document.querySelector("#kubio-ai-info-content"))}catch(e){(0,M.reactRender)((0,D.createElement)(Z,{message:(0,b.__)("There seems to be an error with the Kubio AI service. Please try again","kubio")}),document.querySelector("#kubio-ai-info-content"))}}():(0,M.reactRender)((0,D.createElement)(te,null),document.querySelector("#kubio-ai-info-content"))};const ae=p("#adminmenu .toplevel_page_kubio");if(ae.length){const pe=window.location.search,be=new URLSearchParams(pe);if("kubio-get-started"===be.get("page")){const ge=be.get("tab");null!==ge&&(ae.find("li.current").removeClass("current"),ae.find("a[href*='tab="+ge+"']").length?ae.find("a[href*='tab="+ge+"']").closest("li").addClass("current"):ae.find("li.wp-first-item").next().addClass("current"))}ae.find("a[href*='tab=pro-upgrade']").length&&ae.find("a[href*='tab=pro-upgrade']").closest("li").addClass("li-pro-upgrade")}setTimeout((()=>{const e=p(".kubio-admin-row.get-started-imported");e.addClass("inline"),p(".kubio-admin-page-section").eq(0).append(e)}),100)})(),(window.kubio=window.kubio||{}).adminArea=n})();