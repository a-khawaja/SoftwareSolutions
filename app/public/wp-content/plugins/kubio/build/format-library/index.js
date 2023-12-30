(()=>{var e={4184:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)){if(o.length){var a=l.apply(null,o);a&&e.push(a)}}else if("object"===r){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";o.r(n),o.d(n,{CustomFormatsToolbar:()=>W});const e=window.wp.richText,t=window.wp.element,l=window.kubio.globalData,r=window.wp.blockEditor,a=window.wp.i18n,i=(0,t.forwardRef)((function({icon:e,size:o=24,...n},l){return(0,t.cloneElement)(e,{width:o,height:o,...n,ref:l})})),c=window.wp.primitives,s=(0,t.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(c.Path,{d:"M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"}));function u(t,o,n){const l=(0,e.getActiveFormat)(n,o);if(!l)return;const r=l.attributes.style;if(r){var a,i;const e=new RegExp(`${t}:(.*?)(;|$)`);return null===(a=r.match(e))||void 0===a||null===(i=a[1])||void 0===i?void 0:i.trim()}}const m=e=>{var t,o,n;return(null===(t=e.current)||void 0===t||null===(o=t.closest("[data-type]"))||void 0===o||null===(n=o.getAttribute("data-type"))||void 0===n?void 0:n.startsWith("kubio/"))||!1};function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},b.apply(this,arguments)}const f=window.kubio.controls,p=window.kubio.utils,v=window.wp.components,d=(0,p.wpVersionCompare)("6.4","<"),h=t=>{let{contentRef:o,settings:n,value:l}=t;const r={};if(d){const t=(0,e.useAnchorRef)({ref:o,value:l,settings:n});r.anchorRef=((e,t)=>{const o=!!((null==e?void 0:e.endOffset)-(null==e?void 0:e.startOffset)),n=e&&void 0===(null==e?void 0:e.endOffset);let l=t.current;return(n||o)&&(l=e),l})(t,o)}else{const t=(0,e.useAnchor)({editableContentElement:o.current,value:l,settings:n});r.anchor=t}return{popoverOptions:r}};function g(o){let{name:n,value:l,onChange:r,onClose:a,contentRef:i,onReset:c,currentColor:s,formatValue:u}=o;const m=(0,t.useRef)(),d=(0,t.useCallback)((e=>{const t=null==e?void 0:e.target,o=m.current;t&&null!=o&&o.contains(t)||a()}),[m.current,a]);(0,p.useOnClickOutside)(m,d);const{popoverOptions:g}=h({contentRef:i,settings:E,value:l});return(0,t.createElement)(v.__experimentalStyleProvider,{document},(0,t.createElement)(v.Popover,b({value:l,className:"kubio-components-inline-color-popover kubio-color-popover",position:"bottom center",placement:"bottom"},g),(0,t.createElement)("div",{ref:m},(0,t.createElement)(f.GutentagColorPickerWithPalette,{defaultValue:s,onChange:t=>r((0,e.applyFormat)(l,{type:n,attributes:{style:`color:${t}`}}),t),hasButton:!0,onButtonClick:c}))))}const k=window.lodash;var y=o.n(k);const _="kubio/text-color",w=(0,a.__)("Text color","kubio"),E={name:_,title:w,tagName:"span",className:"kubio-has-inline-color",attributes:{style:"style"},edit:function(o){let{value:n,onChange:a,isActive:c,activeAttributes:u,contentRef:b}=o;const[f,p]=(0,t.useState)(!1),{parseVariableColor:v}=(0,l.useGlobalDataColors)(),d=(0,t.useCallback)((()=>{p(!0)}),[]),h=(0,t.useCallback)((()=>{p(!1)}),[]),[k,y]=(0,t.useState)(null);(0,t.useEffect)((()=>{y(function(t,o){const n=(0,e.getActiveFormat)(o,t);if(!n)return;const l=n.attributes.style;var r,a;return l?null===(r=l.match(/color:(.*?)(;|$)/))||void 0===r||null===(a=r[1])||void 0===a?void 0:a.trim():void 0}(_,n))}),[]);const E=(0,t.useMemo)((()=>{if(k)return{backgroundColor:v(k)}}),[k,v]),C=((null==n?void 0:n.activeFormats)||[]).length,x=(0,t.useMemo)((()=>C>0?Math.random():0),[C]);return m(b)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.RichTextToolbarButton,{key:c?"text-color":"text-color-not-active",className:"kubio-format-library-text-color-button",name:c?"italic":void 0,icon:(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i,{icon:s}),c&&(0,t.createElement)("span",{className:"kubio-format-library-text-color-button__indicator",style:E})),title:w,onClick:d}),f&&(0,t.createElement)(g,{key:x,name:_,onClose:h,activeAttributes:u,value:n,currentColor:k,onChange:(e,t)=>{y(t),a(e)},onReset:()=>{a((0,e.removeFormat)(n,_)),h()},contentRef:b})):(0,t.createElement)(t.Fragment,null)}},C=e=>{let{name:o,children:n,...l}=e,r="RichText.ToolbarControls";return o&&(r+=`.${o}`),(0,t.createElement)(v.Fill,{name:r},n)},x=window.kubio.core,F=window.kubio.icons,R=(0,t.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(c.Path,{d:"M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"}));var O=o(4184),S=o.n(O);const N=[{label:(0,a.__)("100 (thin)","kubio"),value:100},{label:(0,a.__)("200 (extra light)","kubio"),value:200},{label:(0,a.__)("300 (light)","kubio"),value:300},{label:(0,a.__)("400 (normal)","kubio"),value:400},{label:(0,a.__)("500 (medium)","kubio"),value:500},{label:(0,a.__)("600 (semi bold)","kubio"),value:600},{label:(0,a.__)("700 (bold)","kubio"),value:700},{label:(0,a.__)("800 (extra bold)","kubio"),value:800},{label:(0,a.__)("900 (heavy)","kubio"),value:900}],P=e=>{let{isActive:o,value:n,onChange:r,onReset:i,contentRef:c,formatValue:s}=e;const{getFontWeights:u}=(0,l.useGlobalDataFonts)(),[m,d]=(0,t.useState)(!1),g=(0,t.useRef)(),k=y().get(n,"fontFamily"),_=y().get(n,"fontWeight"),w=u(k),E=(0,x.useDeepMemo)((()=>N.filter((e=>{let{value:t}=e;return-1!==w.indexOf(t)}))),[w]),C={value:k,onChange:e=>{const t=u(e).some((e=>e===_));t?r("fontFamily",e):r("",{fontFamily:e,fontWeight:400})}},O={value:_,onChange:e=>{r("fontWeight",e)},options:E,onReset:i},P=(0,t.useCallback)((e=>{const t=null==e?void 0:e.target,o=t&&t.closest(".block-editor-rich-text__inline-font-family, .h-select-control__popover, .kubio-fontpicker-content"),n=g.current;null!=n&&n.contains(t)||o||d(!1)}),[]);(0,p.useOnClickOutside)(g,P);const{popoverOptions:T}=h({contentRef:c,settings:j,value:n});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(v.ToolbarButton,{className:S()({"is-pressed":o}),icon:R,onClick:()=>{d((e=>!e))},label:(0,a.__)("Typography","kubio")}),m&&(0,t.createElement)(v.__experimentalStyleProvider,{document},(0,t.createElement)(v.Popover,b({className:"block-editor-rich-text__inline-font-family",onFocusOutside:()=>d(!1),position:"bottom center",placement:"bottom"},T),(0,t.createElement)("div",{ref:g,className:"block-editor-rich-text__inline-format-toolbar block-editor-rich-text__inline-font-family kubio-options-popover "},(0,t.createElement)("div",{className:"block-editor-rich-text__typography-toolbar__container"},(0,t.createElement)(v.BaseControl,null,(0,t.createElement)(v.Flex,{className:"kubio-font-family-container"},(0,t.createElement)(v.FlexBlock,null,(0,t.createElement)("span",{className:"kubio-font-family-label"},(0,a.__)("Font family","kubio"))),(0,t.createElement)(v.FlexItem,null,(0,t.createElement)(f.FontPicker,b({label:(0,a.__)("Font family","kubio"),placeholder:(0,a.__)("Inherited","kubio"),allowReset:!1},C))),(0,t.createElement)(v.FlexItem,{className:"kubio-font-family__reset"},(0,t.createElement)(v.Button,{isSmall:!0,icon:F.ResetIcon,label:(0,a.__)("Reset","kubio"),className:"kubio-popover-options-icon",onClick:i})))),(0,t.createElement)(v.BaseControl,null,(0,t.createElement)(f.GutentagSelectControl,b({label:(0,a.__)("Font weight","kubio"),placeholder:(0,a.__)("Inherited","kubio"),allowReset:!0},O))))))))},T="font-family-weight",A=(0,a.__)("Font","kubio"),B=`kubio/${T}`,j={name:B,title:A,slotId:T,tagName:"span",className:`kubio-has-inline-${T}`,attributes:{style:"style"},edit:o=>{const{value:n,onChange:l,contentRef:r}=o,{isActive:a}=o,[i,c]=(0,t.useState)(""),s=u("font-family",B,n),b=function(e,t){let o=u("font-weight",e,t);return isNaN(o)||(o=parseFloat(o)),o}(B,n);(0,t.useEffect)((()=>{c(Math.random())}),[n]);const f={fontFamily:s,fontWeight:b};return m(r)?(0,t.createElement)(C,{name:T},(0,t.createElement)(P,{key:i,formatValue:n,onChange:(t,o)=>{let r=window.structuredClone(f);t?y().set(r,t,o):r=o,(t=>{let{fontFamily:o,fontWeight:r}=t;const a=[];o&&a.push(`font-family: ${o}`),r&&a.push(`font-weight: ${r}`);const i=a.join(";");l((0,e.applyFormat)(n,{type:B,attributes:{style:i}}))})(r)},value:f,isActive:a,onReset:()=>{l((0,e.removeFormat)(n,B))},contentRef:r})):(0,t.createElement)(t.Fragment,null)}},M=[j],$=M.map((e=>e.slotId)).filter(Boolean),V=()=>(0,t.createElement)(t.Fragment,null,$.map((e=>(0,t.createElement)(v.Slot,{name:`RichText.ToolbarControls.${e}`,key:e})))),W=e=>{const{addWrapper:o=!0}=e;return!0===o?(0,t.createElement)(r.BlockControls,null,(0,t.createElement)(V,null)):(0,t.createElement)(V,null)};let z=[E];z=z.concat(M),z.forEach((t=>{let{name:o,...n}=t;(0,e.registerFormatType)(o,n)}))})(),(window.kubio=window.kubio||{}).formatLibrary=n})();
