"use strict";(self.webpackChunkworkshop=self.webpackChunkworkshop||[]).push([[469],{2469:(St,w,s)=>{s.r(w),s.d(w,{OrderModule:()=>Mt});var f=s(9808),x=s(3711),n=s(7587),U=s(3990);const j=function(t){return{breadcrumbs__item_active:t}};function k(t,e){if(1&t&&(n.TgZ(0,"li",3),n._uU(1),n.qZA()),2&t){const i=e.$implicit;n.Q6J("ngClass",n.VKq(2,j,i.path)),n.xp6(1),n.hij(" ",i.name," ")}}let z=(()=>{class t{constructor(){this.links=[{name:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",path:"location"},{name:"\u041c\u043e\u0434\u0435\u043b\u044c"},{name:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},{name:"\u0418\u0442\u043e\u0433\u043e"}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-breadcrumbs"]],decls:3,vars:1,consts:[[1,"breadcrumbs__wrapper"],[1,"breadcrumbs"],["class","breadcrumbs__item",3,"ngClass",4,"ngFor","ngForOf"],[1,"breadcrumbs__item",3,"ngClass"]],template:function(i,o){1&i&&(n.TgZ(0,"div",0)(1,"ul",1),n.YNc(2,k,2,4,"li",2),n.qZA()()),2&i&&(n.xp6(2),n.Q6J("ngForOf",o.links))},directives:[f.sg,f.mk],styles:['.breadcrumbs[_ngcontent-%COMP%]{display:flex;list-style:none;margin:8px auto;max-width:1376px;padding:0 64px}.breadcrumbs__wrapper[_ngcontent-%COMP%]{border-bottom:1px solid #eee;border-top:1px solid #eee}.breadcrumbs__item[_ngcontent-%COMP%]{align-items:center;color:#999;display:flex;font-size:14px;font-style:normal;font-weight:700;justify-content:center;line-height:16px;margin-right:38px;position:relative}.breadcrumbs__item_active[_ngcontent-%COMP%], .breadcrumbs__item[_ngcontent-%COMP%]:hover{color:#0ec261;cursor:pointer}.breadcrumbs__item[_ngcontent-%COMP%]:after{border-bottom:4px solid transparent;border-left:6px solid #999;border-top:4px solid transparent;content:"";cursor:initial;height:0;position:absolute;right:-23px;top:4px;width:0}.breadcrumbs__item[_ngcontent-%COMP%]:last-child{margin-right:0}.breadcrumbs__item[_ngcontent-%COMP%]:last-child:after{display:none}@media screen and (max-width: 1023px){.breadcrumbs[_ngcontent-%COMP%]{padding:0 32px}}@media screen and (max-width: 767px){.breadcrumbs[_ngcontent-%COMP%]{flex-wrap:wrap}}'],changeDetection:0}),t})();var b=s(655),g=s(1135),B=s(727);const J=n.GuJ,R=Symbol("__destroy"),P=Symbol("__decoratorApplied");function T(t){t instanceof B.w0&&t.unsubscribe()}function I(t,e){return function(){var i;if(t&&t.call(this),function E(t,e){t[e]&&(t[e].next(),t[e].complete(),t[e]=null)}(this,function M(t){return"string"==typeof t?Symbol(`__destroy__${t}`):R}()),e.arrayName&&function G(t){Array.isArray(t)&&t.forEach(T)}(this[e.arrayName]),e.checkProperties)for(const o in this)(null===(i=e.blackList)||void 0===i?void 0:i.includes(o))||T(this[o])}}function C(t={}){return e=>{!function N(t){return!!t[J]}(e)?function Q(t,e){t.prototype.ngOnDestroy=I(t.prototype.ngOnDestroy,e)}(e,t):function Y(t,e){const i=t.\u0275pipe;i.onDestroy=I(i.onDestroy,e)}(e,t),function X(t){t.prototype[P]=!0}(e)}}let Z=(()=>{class t{constructor(){this.price$=new g.X({location:{city:void 0,address:void 0}})}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var H=s(1455);let d=class{constructor(e){this.priceService=e,this.city$=new g.X(void 0),this.address$=new g.X(void 0)}ngOnInit(){this.priceSubscription=this.priceService.price$.subscribe(e=>{this.city$.next(e.location.city)})}};d.\u0275fac=function(e){return new(e||d)(n.Y36(Z))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-aside-price"]],decls:16,vars:4,consts:[[1,"aside"],[1,"aside__title"],[1,"aside__list"],[1,"aside__item"],[1,"aside__item-title"],[1,"aside__item-value"],[1,"aside__price"],[1,"aside__price-value"],[1,"aside__button",3,"disabled"]],template:function(e,i){1&e&&(n.TgZ(0,"aside",0)(1,"h2",1),n._uU(2,"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437:"),n.qZA(),n.TgZ(3,"ul",2)(4,"p",3)(5,"span",4),n._uU(6," \u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438 "),n.qZA(),n.TgZ(7,"span",5),n._uU(8),n.ALo(9,"async"),n.qZA()()(),n.TgZ(10,"p",6),n._uU(11," \u0426\u0435\u043d\u0430: "),n.TgZ(12,"span",7),n._uU(13," \u043e\u0442 8 000 \u0434\u043e 12 000 \u20bd "),n.qZA()(),n.TgZ(14,"app-button",8),n._uU(15," \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c "),n.qZA()()),2&e&&(n.xp6(8),n.hij(" ",n.lcZ(9,2,i.city$)," "),n.xp6(6),n.Q6J("disabled",!0))},directives:[H.r],pipes:[f.Ov],styles:['[_nghost-%COMP%]{max-width:320px;width:100%}.aside[_ngcontent-%COMP%]{border-left:1px solid #eee;height:100%;max-width:320px;padding:32px 0 32px 32px;width:100%}.aside__title[_ngcontent-%COMP%]{color:#121212;font-size:18px;font-style:normal;font-weight:500;line-height:21px;margin-bottom:26px;text-align:right}.aside__button[_ngcontent-%COMP%]     button{width:100%}.aside__list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.aside__item[_ngcontent-%COMP%]{align-items:flex-end;display:flex;flex-direction:row;justify-content:space-between;margin:0 0 16px;position:relative}.aside__item[_ngcontent-%COMP%]:before{border-bottom:1px dotted #999;bottom:3px;content:"";height:1px;left:0;position:absolute;width:100%}.aside__item-title[_ngcontent-%COMP%]{background-color:#fff;color:#121212;font-size:14px;font-style:normal;font-weight:300;line-height:16px;max-width:55%;padding-right:5px;z-index:1}.aside__item-value[_ngcontent-%COMP%]{background-color:#fff;color:#999;font-size:14px;font-style:normal;font-weight:300;line-height:16px;max-width:45%;padding-left:5px;text-align:right;z-index:1}.aside__price[_ngcontent-%COMP%]{font-size:16px;font-style:normal;font-weight:500;line-height:16px;margin:32px 0}.aside__price-value[_ngcontent-%COMP%]{font-weight:400}@media screen and (max-width: 767px){[_nghost-%COMP%]{margin:0 auto}.aside[_ngcontent-%COMP%]{border-left:unset;padding-left:0}}'],changeDetection:0}),d=(0,b.gn)([C({checkProperties:!0})],d);let W=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-order"]],decls:5,vars:0,consts:[[1,"container"],[1,"container","content"]],template:function(i,o){1&i&&(n._UZ(0,"app-header",0)(1,"app-breadcrumbs"),n.TgZ(2,"div",1),n._UZ(3,"router-outlet")(4,"app-aside-price"),n.qZA())},directives:[U.G,z,x.lC,d],styles:["[_nghost-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{display:block;margin:0 auto;max-width:1376px;padding:32px 64px}.content[_ngcontent-%COMP%]{display:flex;flex-direction:row;min-height:calc(100vh - 133px);padding:0 64px;width:100%}@media screen and (min-width: 768px) and (max-width: 1023px){.container[_ngcontent-%COMP%]{padding:32px}.content[_ngcontent-%COMP%]{padding:0 32px}}@media screen and (max-width: 767px){.container[_ngcontent-%COMP%]{padding:0}.content[_ngcontent-%COMP%]{flex-direction:column;padding:0 32px}}"],changeDetection:0}),t})();var K=s(7579);const D={now:()=>(D.delegate||Date).now(),delegate:void 0};class q extends K.x{constructor(e=1/0,i=1/0,o=D){super(),this._bufferSize=e,this._windowTime=i,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=i===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,i)}next(e){const{isStopped:i,_buffer:o,_infiniteTimeWindow:r,_timestampProvider:c,_windowTime:a}=this;i||(o.push(e),!r&&o.push(c.now()+a)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();const i=this._innerSubscribe(e),{_infiniteTimeWindow:o,_buffer:r}=this,c=r.slice();for(let a=0;a<c.length&&!e.closed;a+=o?1:2)e.next(c[a]);return this._checkFinalizedStatuses(e),i}_trimBuffer(){const{_bufferSize:e,_timestampProvider:i,_buffer:o,_infiniteTimeWindow:r}=this,c=(r?1:2)*e;if(e<1/0&&c<o.length&&o.splice(0,o.length-c),!r){const a=i.now();let l=0;for(let u=1;u<o.length&&o[u]<=a;u+=2)l=u;l&&o.splice(0,l+1)}}}var tt=s(3099),A=s(4004),it=s(3900),ot=s(7359),rt=s(4482),v=s(520),L=s(2340);let ct=(()=>{class t{constructor(i){this.http=i}getCities(){const i={params:(new v.LE).set("sort[name]",1)};return this.http.get(`${L.N.apiUrl}/db/city`,i)}getCityPoints(i){const o={params:(new v.LE).set("cityId",i)};return this.http.get(`${L.N.apiUrl}/db/point`,o)}}return t.\u0275fac=function(i){return new(i||t)(n.LFG(v.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var _=s(2382),$=s(9300),at=s(8421),pt=s(8306),lt=s(5577),ut=s(1144),m=s(576),dt=s(3268);const mt=["addListener","removeListener"],ht=["addEventListener","removeEventListener"],ft=["on","off"];function y(t,e,i,o){if((0,m.m)(i)&&(o=i,i=void 0),o)return y(t,e,i).pipe((0,dt.Z)(o));const[r,c]=function xt(t){return(0,m.m)(t.addEventListener)&&(0,m.m)(t.removeEventListener)}(t)?ht.map(a=>l=>t[a](e,l,i)):function gt(t){return(0,m.m)(t.addListener)&&(0,m.m)(t.removeListener)}(t)?mt.map(F(t,e)):function _t(t){return(0,m.m)(t.on)&&(0,m.m)(t.off)}(t)?ft.map(F(t,e)):[];if(!r&&(0,ut.z)(t))return(0,lt.z)(a=>y(a,e,i))((0,at.Xf)(t));if(!r)throw new TypeError("Invalid event target");return new pt.y(a=>{const l=(...u)=>a.next(1<u.length?u:u[0]);return r(l),()=>c(l)})}function F(t,e){return i=>o=>t[i](e,o)}var O;const bt=["input"],Ct=["input__eraser"],vt=["input__list"];function yt(t,e){if(1&t&&(n.TgZ(0,"li",10),n._uU(1),n.qZA()),2&t){const i=e.$implicit;n.s9C("title",i),n.xp6(1),n.hij(" ",i," ")}}let p=O=class{constructor(){this.label="",this.placeholder="",this.options=[],this.valueChange=new n.vpe,this.id="",this.inputControl=new _.NI(""),this.renderedOptions=[],this.id="select-input-"+O.num++}ngOnInit(){this.inputEraserViewSubscription=this.inputControl.valueChanges.pipe((0,$.h)(e=>""!==e)).subscribe(e=>{this.valueChange.emit(e),this.input__eraser.nativeElement.classList.add("input__eraser_enabled")}),this.optionsViewSubscription=this.inputControl.valueChanges.subscribe(e=>{this.renderedOptions=this.options?this.options.filter(i=>i.toLowerCase().includes(e.toLowerCase())):[],0===this.renderedOptions.length?this.input__list.nativeElement.classList.remove("input__list_opened"):this.input__list.nativeElement.classList.add("input__list_opened")}),this.outsideClickSubscription=y(document,"click").pipe((0,$.h)(e=>e.target!==this.input.nativeElement&&e.target!==this.input__list.nativeElement)).subscribe(()=>{this.input__list.nativeElement.classList.remove("input__list_opened")})}ngOnChanges(e){"options"in e&&(this.renderedOptions=[...e.options.currentValue])}clickInput(){this.renderedOptions.length>0&&this.input__list.nativeElement.classList.add("input__list_opened")}clearInput(){this.inputControl.setValue(""),this.input__eraser.nativeElement.classList.remove("input__eraser_enabled")}setInput(e){this.inputControl.setValue(e.target.title),this.input__list.nativeElement.classList.remove("input__list_opened")}};p.num=0,p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-input-select"]],viewQuery:function(e,i){if(1&e&&(n.Gf(bt,5),n.Gf(Ct,5),n.Gf(vt,5)),2&e){let o;n.iGM(o=n.CRH())&&(i.input=o.first),n.iGM(o=n.CRH())&&(i.input__eraser=o.first),n.iGM(o=n.CRH())&&(i.input__list=o.first)}},inputs:{label:"label",placeholder:"placeholder",options:"options"},outputs:{valueChange:"valueChange"},features:[n.TTD],decls:11,vars:6,consts:[[1,"input__label",3,"for"],[1,"input__wrapper"],["type","text","autocomplete","off",1,"input",3,"id","formControl","placeholder","click"],["input",""],["tabindex","0","width","8","height","8","viewBox","0 0 8 8",1,"input__eraser",3,"click"],["input__eraser",""],["href","assets/img/icons/input-clear.svg#icon"],[1,"input__list",3,"click"],["input__list",""],["class","input__list-option",3,"title",4,"ngFor","ngForOf"],[1,"input__list-option",3,"title"]],template:function(e,i){1&e&&(n.TgZ(0,"label",0),n._uU(1),n.qZA(),n.TgZ(2,"div",1)(3,"input",2,3),n.NdJ("click",function(){return i.clickInput()}),n.qZA(),n.O4$(),n.TgZ(5,"svg",4,5),n.NdJ("click",function(){return i.clearInput()}),n._UZ(7,"use",6),n.qZA(),n.kcU(),n.TgZ(8,"ul",7,8),n.NdJ("click",function(r){return i.setInput(r)}),n.YNc(10,yt,2,2,"li",9),n.qZA()()),2&e&&(n.s9C("for",i.id),n.xp6(1),n.hij(" ",i.label,"\n"),n.xp6(2),n.s9C("id",i.id),n.s9C("placeholder",i.placeholder),n.Q6J("formControl",i.inputControl),n.xp6(7),n.Q6J("ngForOf",i.renderedOptions))},directives:[_.Fj,_.JJ,_.oH,f.sg],styles:["[_nghost-%COMP%]{align-items:center;display:flex;justify-content:flex-end;margin-bottom:16px;min-width:320px}.input[_ngcontent-%COMP%]{border:unset;border-bottom:1px solid #999;font-size:14px;font-style:normal;font-weight:300;line-height:16px;max-width:224px;outline:none;padding:0 24px 0 8px;width:100%}.input__label[_ngcontent-%COMP%]{color:#121212;font-size:14px;font-style:normal;font-weight:300;line-height:16px;margin-right:5px}.input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#999}.input__wrapper[_ngcontent-%COMP%]{display:flex;max-width:224px;position:relative;width:100%}.input__eraser[_ngcontent-%COMP%]{background:transparent;border:unset;bottom:0;cursor:pointer;display:none;height:18px;outline:none;padding:5px;position:absolute;right:0;width:24px}.input__eraser_enabled[_ngcontent-%COMP%]{display:block}.input__list[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #eee;bottom:0;display:none;list-style:none;margin:0;max-height:106px;overflow-y:auto;padding:0;position:absolute;right:0;scrollbar-color:#999 #eee;scrollbar-width:thin;transform:translateY(100%);width:100%;z-index:1}.input__list_opened[_ngcontent-%COMP%]{display:block}.input__list[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:#fff;border-left:1px solid #eee;width:4px}.input__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#999;border-radius:2px}.input__list-option[_ngcontent-%COMP%]{color:#121212;font-size:14px;font-style:normal;font-weight:300;padding:3px 9px}.input__list-option[_ngcontent-%COMP%]:hover{color:#0ec261;cursor:pointer}.input__list-option[_ngcontent-%COMP%]:first-child{padding-top:6px}.input__list-option[_ngcontent-%COMP%]:last-child{padding-bottom:6px}@media screen and (max-width: 767px){[_nghost-%COMP%]{align-items:flex-start;flex-direction:column;max-width:288px;min-width:288px}.input__label[_ngcontent-%COMP%]{margin-bottom:8px;margin-right:0}}"],changeDetection:0}),p=O=(0,b.gn)([C({checkProperties:!0})],p);let h=class{constructor(e,i){this.cityService=e,this.priceService=i,this.cities$=new g.X([]),this.cityNames$=new g.X([]),this.points$=new g.X([])}ngOnInit(){const i=this.cityService.getCities().pipe(function et(t,e,i){let o,r=!1;return t&&"object"==typeof t?({bufferSize:o=1/0,windowTime:e=1/0,refCount:r=!1,scheduler:i}=t):o=null!=t?t:1/0,(0,tt.B)({connector:()=>new q(o,e,i),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}()).pipe(function nt(...t){const e=t.length;if(0===e)throw new Error("list of properties cannot be empty.");return(0,A.U)(i=>{let o=i;for(let r=0;r<e;r++){const c=null==o?void 0:o[t[r]];if(void 0===c)return;o=c}return o})}("data")),o=i.pipe((0,it.w)(r=>r),(0,A.U)(r=>r.name),function st(t,e){return(0,rt.e)((0,ot.U)(t,e,arguments.length>=2,!1,!0))}((r,c)=>(r.push(c),r),new Array));this.citiesSubscription=i.subscribe(r=>this.cities$.next(r)),this.cityNamesSubscription=o.subscribe(r=>this.cityNames$.next(r))}citySelect(e){const i=this.cities$.value.find(o=>o.name===e);(null==i?void 0:i.id)&&(this.pointsSubscription=this.cityService.getCityPoints(i.id).subscribe(o=>{this.points$.next(o.data.map(r=>r.address))}),this.priceService.price$.next(Object.assign(Object.assign({},this.priceService.price$.getValue()),{location:{city:e,address:void 0}})))}};h.\u0275fac=function(e){return new(e||h)(n.Y36(ct),n.Y36(Z))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-order-location"]],decls:8,vars:6,consts:[[1,"main"],["label","\u0413\u043e\u0440\u043e\u0434","placeholder","\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434 ...",3,"options","valueChange"],["label","\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438","placeholder","\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438 ...",3,"options"],[1,"main__text"],["src","assets/map.png","width","736","height","352",1,"main__map"]],template:function(e,i){1&e&&(n.TgZ(0,"main",0)(1,"app-input-select",1),n.NdJ("valueChange",function(r){return i.citySelect(r)}),n.ALo(2,"async"),n.qZA(),n._UZ(3,"app-input-select",2),n.ALo(4,"async"),n.TgZ(5,"p",3),n._uU(6,"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435:"),n.qZA(),n._UZ(7,"img",4),n.qZA()),2&e&&(n.xp6(1),n.Q6J("options",n.lcZ(2,2,i.cityNames$)),n.xp6(2),n.Q6J("options",n.lcZ(4,4,i.points$)))},directives:[p],pipes:[f.Ov],styles:["[_nghost-%COMP%]{width:100%}.main[_ngcontent-%COMP%]{align-items:self-start;display:flex;flex-direction:column;justify-content:flex-start;padding:32px 32px 32px 0;width:100%}.main__text[_ngcontent-%COMP%]{color:#121212;font-size:14px;font-style:normal;font-weight:300;line-height:16px;margin:0 0 16px;min-width:320px}.main__map[_ngcontent-%COMP%]{height:auto;max-width:736px;width:100%}@media screen and (max-width: 767px){.main[_ngcontent-%COMP%]{padding-right:0}}"],changeDetection:0}),h=(0,b.gn)([C({checkProperties:!0})],h);const Ot=[{path:"",redirectTo:"location"},{path:"",component:W,children:[{path:"location",component:h}]}];let wt=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[x.Bz.forChild(Ot)],x.Bz]}),t})();var Pt=s(1534);let Mt=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[Pt.m,f.ez,wt]]}),t})()}}]);