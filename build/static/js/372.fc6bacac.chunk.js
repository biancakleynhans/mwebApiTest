"use strict";(self.webpackChunkMwebFibreApi=self.webpackChunkMwebFibreApi||[]).push([[372],{7372:function(t,e,o){o.r(e),o.d(e,{iosTransitionAnimation:function(){return p},shadow:function(){return s}});var a=o(4942),n=o(7762),r=o(5883),l=o(6313),c=function(t){return document.querySelector("".concat(t,".ion-cloned-element"))},s=function(t){return t.shadowRoot||t},i=function(t){var e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){var a=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=a?a.querySelector(o):null}return t.querySelector(o)},f=function(t,e){var o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),a=[];if(null!=o){var r=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=r&&(a=r.querySelectorAll("ion-buttons"))}else a=t.querySelectorAll("ion-buttons");var l,c=(0,n.Z)(a);try{for(c.s();!(l=c.n()).done;){var s=l.value,i=s.closest("ion-header"),f=i&&!i.classList.contains("header-collapse-condense-inactive"),d=s.querySelector("ion-back-button"),m=s.classList.contains("buttons-collapse"),p="start"===s.slot||""===s.slot;if(null!==d&&p&&(m&&f&&e||!m))return d}}catch(u){c.e(u)}finally{c.f()}return null},d=function(t,e,o,a,n,l){var i=e?"calc(100% - ".concat(l.right+4,"px)"):"".concat(l.left-4,"px"),f=e?"7px":"-7px",d=e?"-4px":"4px",m=e?"-4px":"4px",p=e?"right":"left",u=e?"left":"right",y=[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(n.top-40,"px, 0) scale(2.1)")},{offset:1,opacity:1,transform:"translate3d(".concat(d,", ").concat(l.top-46,"px, 0) scale(1)")}],b=[{offset:0,opacity:1,transform:"translate3d(".concat(d,", ").concat(l.top-46,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(n.top-40,"px, 0) scale(2.1)")}],S=o?b:y,v=[{offset:0,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(m,", ").concat(l.top-46,"px, 0) scale(1)")}],g=[{offset:0,opacity:1,transform:"translate3d(".concat(m,", ").concat(l.top-46,"px, 0) scale(1)")},{offset:.2,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")}],T=o?g:v,h=(0,r.c)(),x=(0,r.c)(),q=c("ion-back-button"),X=s(q).querySelector(".button-text"),A=s(q).querySelector("ion-icon");q.text=a.text,q.mode=a.mode,q.icon=a.icon,q.color=a.color,q.disabled=a.disabled,q.style.setProperty("display","block"),q.style.setProperty("position","fixed"),x.addElement(A),h.addElement(X),h.beforeStyles({"transform-origin":"".concat(p," center")}).beforeAddWrite((function(){a.style.setProperty("display","none"),q.style.setProperty(p,i)})).afterAddWrite((function(){a.style.setProperty("display",""),q.style.setProperty("display","none"),q.style.removeProperty(p)})).keyframes(S),x.beforeStyles({"transform-origin":"".concat(u," center")}).keyframes(T),t.addAnimation([h,x])},m=function(t,e,o,n,l,s){var i=e?"calc(100% - ".concat(l.right,"px)"):"".concat(l.left,"px"),f=e?"-18px":"18px",d=e?"right":"left",m=[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(s.top-4,"px, 0) scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, ".concat(l.top-2,"px, 0) scale(1)")}],p=[{offset:0,opacity:.99,transform:"translate3d(0, ".concat(l.top-2,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(s.top-4,"px, 0) scale(0.5)")}],u=o?m:p,y=c("ion-title"),b=(0,r.c)();y.innerText=n.innerText,y.size=n.size,y.color=n.color,b.addElement(y),b.beforeStyles((0,a.Z)({"transform-origin":"".concat(d," center"),height:"46px",display:"",position:"relative"},d,i)).beforeAddWrite((function(){n.style.setProperty("display","none")})).afterAddWrite((function(){n.style.setProperty("display",""),y.style.setProperty("display","none")})).keyframes(u),t.addAnimation(b)},p=function(t,e){try{var o="opacity",a="transform",n="0%",c="rtl"===t.ownerDocument.dir,p=c?"-99.5%":"99.5%",u=c?"33%":"-33%",y=e.enteringEl,b=e.leavingEl,S="back"===e.direction,v=y.querySelector(":scope > ion-content"),g=y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),T=y.querySelectorAll(":scope > ion-header > ion-toolbar"),h=(0,r.c)(),x=(0,r.c)();if(h.addElement(y).duration(e.duration||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),b&&t){var q=(0,r.c)();q.addElement(t),h.addAnimation(q)}if(v||0!==T.length||0!==g.length?(x.addElement(v),x.addElement(g)):x.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),h.addAnimation(x),S?x.beforeClearStyles([o]).fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(n,")")).fromTo(o,.8,1):x.beforeClearStyles([o]).fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(n,")")),v){var X=s(v).querySelector(".transition-effect");if(X){var A=X.querySelector(".transition-cover"),E=X.querySelector(".transition-shadow"),C=(0,r.c)(),k=(0,r.c)(),w=(0,r.c)();C.addElement(X).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),k.addElement(A).beforeClearStyles([o]).fromTo(o,0,.1),w.addElement(E).beforeClearStyles([o]).fromTo(o,.03,.7),C.addAnimation([k,w]),x.addAnimation([C])}}var P=y.querySelector("ion-header.header-collapse-condense"),L=function(t,e,o,a,n){var r=f(a,o),l=i(n),c=i(a),s=f(n,o),p=null!==r&&null!==l&&!o,u=null!==c&&null!==s&&o;if(p){var y=l.getBoundingClientRect(),b=r.getBoundingClientRect();m(t,e,o,l,y,b),d(t,e,o,r,y,b)}else if(u){var S=c.getBoundingClientRect(),v=s.getBoundingClientRect();m(t,e,o,c,S,v),d(t,e,o,s,S,v)}return{forward:p,backward:u}}(h,c,S,y,b),B=L.forward,R=L.backward;if(T.forEach((function(t){var e=(0,r.c)();e.addElement(t),h.addAnimation(e);var a=(0,r.c)();a.addElement(t.querySelector("ion-title"));var l,i=(0,r.c)(),f=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),d=t.closest("ion-header"),m=null===d||void 0===d?void 0:d.classList.contains("header-collapse-condense-inactive");l=S?f.filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!m||!e})):f.filter((function(t){return!t.classList.contains("buttons-collapse")})),i.addElement(l);var y=(0,r.c)();y.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=(0,r.c)();b.addElement(s(t).querySelector(".toolbar-background"));var v=(0,r.c)(),g=t.querySelector("ion-back-button");if(g&&v.addElement(g),e.addAnimation([a,i,y,b,v]),i.fromTo(o,.01,1),y.fromTo(o,.01,1),S)m||a.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(n,")")).fromTo(o,.01,1),y.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(n,")")),v.fromTo(o,.01,1);else if(P||a.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(n,")")).fromTo(o,.01,1),y.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(n,")")),b.beforeClearStyles([o,"transform"]),(null===d||void 0===d?void 0:d.translucent)?b.fromTo("transform",c?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(o,.01,"var(--opacity)"),B||v.fromTo(o,.01,1),g&&!B){var T=(0,r.c)();T.addElement(s(g).querySelector(".button-text")).fromTo("transform",c?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(T)}})),b){var W=(0,r.c)(),N=b.querySelector(":scope > ion-content"),z=b.querySelectorAll(":scope > ion-header > ion-toolbar"),D=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(N||0!==z.length||0!==D.length?(W.addElement(N),W.addElement(D)):W.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),h.addAnimation(W),S){W.beforeClearStyles([o]).fromTo("transform","translateX(".concat(n,")"),c?"translateX(-100%)":"translateX(100%)");var F=(0,l.g)(b);h.afterAddWrite((function(){"normal"===h.getDirection()&&F.style.setProperty("display","none")}))}else W.fromTo("transform","translateX(".concat(n,")"),"translateX(".concat(u,")")).fromTo(o,1,.8);if(N){var I=s(N).querySelector(".transition-effect");if(I){var M=I.querySelector(".transition-cover"),O=I.querySelector(".transition-shadow"),Z=(0,r.c)(),j=(0,r.c)(),G=(0,r.c)();Z.addElement(I).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),j.addElement(M).beforeClearStyles([o]).fromTo(o,.1,0),G.addElement(O).beforeClearStyles([o]).fromTo(o,.7,.03),Z.addAnimation([j,G]),W.addAnimation([Z])}}z.forEach((function(t){var e=(0,r.c)();e.addElement(t);var l=(0,r.c)();l.addElement(t.querySelector("ion-title"));var i=(0,r.c)(),f=t.querySelectorAll("ion-buttons,[menuToggle]"),d=t.closest("ion-header"),m=null===d||void 0===d?void 0:d.classList.contains("header-collapse-condense-inactive"),p=Array.from(f).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!m||!e}));i.addElement(p);var y=(0,r.c)(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&y.addElement(b);var v=(0,r.c)();v.addElement(s(t).querySelector(".toolbar-background"));var g=(0,r.c)(),T=t.querySelector("ion-back-button");if(T&&g.addElement(T),e.addAnimation([l,i,y,g,v]),h.addAnimation(e),g.fromTo(o,.99,0),i.fromTo(o,.99,0),y.fromTo(o,.99,0),S){if(m||l.fromTo("transform","translateX(".concat(n,")"),c?"translateX(-100%)":"translateX(100%)").fromTo(o,.99,0),y.fromTo("transform","translateX(".concat(n,")"),c?"translateX(-100%)":"translateX(100%)"),v.beforeClearStyles([o,"transform"]),(null===d||void 0===d?void 0:d.translucent)?v.fromTo("transform","translateX(0px)",c?"translateX(-100%)":"translateX(100%)"):v.fromTo(o,"var(--opacity)",0),T&&!R){var x=(0,r.c)();x.addElement(s(T).querySelector(".button-text")).fromTo("transform","translateX(".concat(n,")"),"translateX(".concat((c?-124:124)+"px",")")),e.addAnimation(x)}}else m||l.fromTo("transform","translateX(".concat(n,")"),"translateX(".concat(u,")")).fromTo(o,.99,0).afterClearStyles([a,o]),y.fromTo("transform","translateX(".concat(n,")"),"translateX(".concat(u,")")).afterClearStyles([a,o]),g.afterClearStyles([o]),l.afterClearStyles([o]),i.afterClearStyles([o])}))}return h}catch(H){throw H}}}}]);
//# sourceMappingURL=372.fc6bacac.chunk.js.map