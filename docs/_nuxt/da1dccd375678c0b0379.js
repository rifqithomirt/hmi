(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{304:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("bad8e090",content,!0,{sourceMap:!1})},306:function(t,e,n){"use strict";n(304)},307:function(t,e,n){var o=n(50)((function(i){return i[1]}));o.push([t.i,"#line-spotlight{\n  position:absolute;\n  width:1px;\n  background-color:red\n}",""]),o.locals={},t.exports=o},310:function(t,e,n){"use strict";n.r(e);var o=n(20),l=(n(57),n(32),n(139),n(40),n(66),n(67),n(49),n(98)),c=(n(27),{type:"motor",id:"mto21",name:"M.TO21",description:"Motor MTO21",state:{active:!1,alarm_1:!1,alarm_2:!1,auto:!1},meta:{defaultImg:"MTO21_Run",img:"MTO21",position:{x:615,y:312}},checkAlarm:function(t){return t.state.alarm_1||t.state.alarm_2},panel:function(t){return'\n      <div class="header">'.concat(t.name,'</div>\n      <div class="content">\n        <div>').concat(t.state.active?"Running":"Off","</div>\n        <div>").concat(t.state.auto?"Automatic":"Manual","</div>\n      </div>\n    ")},menu:function(t){return[{name:"Control",child:[{type:"button",name:"button_start",class:"green",text:"Start",icon:["fas","play"],disable:t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}},{type:"button",name:"button_stop",class:"red",text:"Stop",icon:["fas","stop"],disable:!t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}}]},{name:"Alarm",child:[{type:"display",name:"display_alarm_1",render:function(t){return'\n              <div class="tw-flex tw-flex-col">\n                <div>\n                  <div class="badge-box '.concat(t.state.alarm_1?"red":"",'"></div> Circuit Breaker\n                </div>\n                <div>\n                  <div class="badge-box ').concat(t.state.alarm_2?"red":"",'"></div> Disconnected\n                </div>\n              </div>\n            ')},onClick:function(t){}}]},{name:"Control",class:"tw-w-full",child:[{type:"button",name:"button_auto",class:"fixed ".concat(t.state.auto?"green":"red"),text:t.state.auto?"Auto":"Manual",disable:!1,onClick:function(t){t.state.auto=!t.state.auto}}]}]},onImgShow:function(t){var e="".concat(t.meta.img);if(t.state.alarm_1)e+="_Alarm";else{if(!t.state.active)return null;e+="_Run"}return e}}),r={type:"motor",id:"mto22",name:"M.TO22",description:"Motor MTO22",state:{active:!1,alarm_1:!1,alarm_2:!1,auto:!1},meta:{defaultImg:"MTO22_Run",img:"MTO22",position:{x:820,y:386}},checkAlarm:function(t){return t.state.alarm_1||t.state.alarm_2},panel:function(t){return'\n      <div class="header">'.concat(t.name,'</div>\n      <div class="content">\n        <div>').concat(t.state.active?"Running":"Off","</div>\n        <div>").concat(t.state.auto?"Automatic":"Manual","</div>\n      </div>\n    ")},menu:function(t){return[{name:"Control",child:[{type:"button",name:"button_start",class:"green",text:"Start",icon:["fas","play"],disable:t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}},{type:"button",name:"button_stop",class:"red",text:"Stop",icon:["fas","stop"],disable:!t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}}]},{name:"Alarm",child:[{type:"display",name:"display_alarm_1",render:function(t){return'\n              <div class="tw-flex tw-flex-col">\n                <div>\n                  <div class="badge-box '.concat(t.state.alarm_1?"red":"",'"></div> Circuit Breaker\n                </div>\n                <div>\n                  <div class="badge-box ').concat(t.state.alarm_2?"red":"",'"></div> Disconnected\n                </div>\n              </div>\n            ')},onClick:function(t){}}]},{name:"Control",class:"tw-w-full",child:[{type:"button",name:"button_auto",class:"fixed ".concat(t.state.auto?"green":"red"),text:t.state.auto?"Auto":"Manual",disable:!1,onClick:function(t){t.state.auto=!t.state.auto}}]}]},onImgShow:function(t){var e="".concat(t.meta.img);if(t.state.alarm_1)e+="_Alarm";else{if(!t.state.active)return null;e+="_Run"}return e}},d={type:"motor",id:"mto23",name:"M.TO23",description:"Motor MTO23",state:{active:!1,alarm_1:!1,alarm_2:!1,auto:!1},meta:{defaultImg:"MTO23_Run",img:"MTO23",position:{x:928,y:431}},checkAlarm:function(t){return t.state.alarm_1||t.state.alarm_2},panel:function(t){return'\n      <div class="header">'.concat(t.name,'</div>\n      <div class="content">\n        <div>').concat(t.state.active?"Running":"Off","</div>\n        <div>").concat(t.state.auto?"Automatic":"Manual","</div>\n      </div>\n    ")},menu:function(t){return[{name:"Control",child:[{type:"button",name:"button_start",class:"green",text:"Start",icon:["fas","play"],disable:t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}},{type:"button",name:"button_stop",class:"red",text:"Stop",icon:["fas","stop"],disable:!t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}}]},{name:"Alarm",child:[{type:"display",name:"display_alarm_1",render:function(t){return'\n              <div class="tw-flex tw-flex-col">\n                <div>\n                  <div class="badge-box '.concat(t.state.alarm_1?"red":"",'"></div> Circuit Breaker\n                </div>\n                <div>\n                  <div class="badge-box ').concat(t.state.alarm_2?"red":"",'"></div> Disconnected\n                </div>\n              </div>\n            ')},onClick:function(t){}}]},{name:"Control",class:"tw-w-full",child:[{type:"button",name:"button_auto",class:"fixed ".concat(t.state.auto?"green":"red"),text:t.state.auto?"Auto":"Manual",disable:!1,onClick:function(t){t.state.auto=!t.state.auto}}]}]},onImgShow:function(t){var e="".concat(t.meta.img);if(t.state.alarm_1)e+="_Alarm";else{if(!t.state.active)return null;e+="_Run"}return e}},v={type:"motor",id:"mto24",name:"M.TO24",description:"Motor MTO24",state:{active:!1,alarm_1:!1,alarm_2:!1,auto:!1},meta:{defaultImg:"MTO24_Run",img:"MTO24",position:{x:1051,y:479}},checkAlarm:function(t){return t.state.alarm_1||t.state.alarm_2},panel:function(t){return'\n      <div class="header">'.concat(t.name,'</div>\n      <div class="content">\n        <div>').concat(t.state.active?"Running":"Off","</div>\n        <div>").concat(t.state.auto?"Automatic":"Manual","</div>\n      </div>\n    ")},menu:function(t){return[{name:"Control",child:[{type:"button",name:"button_start",class:"green",text:"Start",icon:["fas","play"],disable:t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}},{type:"button",name:"button_stop",class:"red",text:"Stop",icon:["fas","stop"],disable:!t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}}]},{name:"Alarm",child:[{type:"display",name:"display_alarm_1",render:function(t){return'\n              <div class="tw-flex tw-flex-col">\n                <div>\n                  <div class="badge-box '.concat(t.state.alarm_1?"red":"",'"></div> Circuit Breaker\n                </div>\n                <div>\n                  <div class="badge-box ').concat(t.state.alarm_2?"red":"",'"></div> Disconnected\n                </div>\n              </div>\n            ')},onClick:function(t){}}]},{name:"Control",class:"tw-w-full",child:[{type:"button",name:"button_auto",class:"fixed ".concat(t.state.auto?"green":"red"),text:t.state.auto?"Auto":"Manual",disable:!1,onClick:function(t){t.state.auto=!t.state.auto}}]}]},onImgShow:function(t){var e="".concat(t.meta.img);if(t.state.alarm_1)e+="_Alarm";else{if(!t.state.active)return null;e+="_Run"}return e}},m={type:"motor",id:"mdc01",name:"M.DC01",description:"Motor DECANBOX",state:{active:!1,alarm_1:!1,alarm_2:!1,auto:!1},meta:{defaultImg:"MDC01_Run",img:"MDC01",position:{x:1206,y:529}},checkAlarm:function(t){return t.state.alarm_1||t.state.alarm_2},panel:function(t){return'\n      <div class="header">'.concat(t.name,'</div>\n      <div class="content">\n        <div>').concat(t.state.active?"Running":"Off","</div>\n        <div>").concat(t.state.auto?"Automatic":"Manual","</div>\n      </div>\n    ")},menu:function(t){return[{name:"Control",child:[{type:"button",name:"button_start",class:"green",text:"Start",icon:["fas","play"],disable:t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}},{type:"button",name:"button_stop",class:"red",text:"Stop",icon:["fas","stop"],disable:!t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}}]},{name:"Alarm",child:[{type:"display",name:"display_alarm_1",render:function(t){return'\n              <div class="tw-flex tw-flex-col">\n                <div>\n                  <div class="badge-box '.concat(t.state.alarm_1?"red":"",'"></div> Circuit Breaker\n                </div>\n                <div>\n                  <div class="badge-box ').concat(t.state.alarm_2?"red":"",'"></div> Disconnected\n                </div>\n              </div>\n            ')},onClick:function(t){}}]},{name:"Control",class:"tw-w-full",child:[{type:"button",name:"button_auto",class:"fixed ".concat(t.state.auto?"green":"red"),text:t.state.auto?"Auto":"Manual",disable:!1,onClick:function(t){t.state.auto=!t.state.auto}}]}]},onImgShow:function(t){var e="".concat(t.meta.img);if(t.state.alarm_1)e+="_Alarm";else{if(!t.state.active)return null;e+="_Run"}return e}},f={type:"motor",id:"mct01",name:"M.CT01",description:"Motor DECANBOX",state:{active:!1,alarm_1:!1,alarm_2:!1,auto:!1},meta:{defaultImg:"MCT01_Run",img:"MCT01",position:{x:717,y:202}},checkAlarm:function(t){return t.state.alarm_1||t.state.alarm_2},panel:function(t){return'\n      <div class="header">'.concat(t.name,'</div>\n      <div class="content">\n        <div>').concat(t.state.active?"Running":"Off","</div>\n        <div>").concat(t.state.auto?"Automatic":"Manual","</div>\n      </div>\n    ")},menu:function(t){return[{name:"Control",child:[{type:"button",name:"button_start",class:"green",text:"Start",icon:["fas","play"],disable:t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}},{type:"button",name:"button_stop",class:"red",text:"Stop",icon:["fas","stop"],disable:!t.state.active||t.state.auto,onClick:function(t){t.state.active=!t.state.active}}]},{name:"Alarm",child:[{type:"display",name:"display_alarm_1",render:function(t){return'\n              <div class="tw-flex tw-flex-col">\n                <div>\n                  <div class="badge-box '.concat(t.state.alarm_1?"red":"",'"></div> Circuit Breaker\n                </div>\n                <div>\n                  <div class="badge-box ').concat(t.state.alarm_2?"red":"",'"></div> Disconnected\n                </div>\n              </div>\n            ')},onClick:function(t){}}]},{name:"Control",class:"tw-w-full",child:[{type:"button",name:"button_auto",class:"fixed ".concat(t.state.auto?"green":"red"),text:t.state.auto?"Auto":"Manual",disable:!1,onClick:function(t){t.state.auto=!t.state.auto}}]}]},onImgShow:function(t){var e="".concat(t.meta.img);if(t.state.alarm_1)e+="_Alarm";else{if(!t.state.active)return null;e+="_Run"}return e}},w={type:"motor",id:"vlv01",name:"VLV01",description:"Valve TO KULTUR",state:{open:!1,alarm_1:!1,alarm_2:!1,auto:!1},meta:{defaultImg:"VLV01_Run",img:"VLV01",position:{x:669,y:255},panel:{position:"right"}},checkAlarm:function(t){return t.state.alarm_1||t.state.alarm_2},panel:function(t){return'\n      <div class="header">'.concat(t.name,'</div>\n      <div class="content">\n        <div>').concat(t.state.open?"Open":"Close","</div>\n        <div>").concat(t.state.auto?"Automatic":"Manual","</div>\n      </div>\n    ")},menu:function(t){return[{name:"Control",child:[{type:"button",name:"button_open",class:"green",text:"Open",icon:["fas","play"],disable:t.state.open||t.state.auto,onClick:function(t){t.state.open=!t.state.open}},{type:"button",name:"button_close",class:"red",text:"Close",icon:["fas","stop"],disable:!t.state.open||t.state.auto,onClick:function(t){t.state.open=!t.state.open}}]},{name:"Alarm",child:[{type:"display",name:"display_alarm_1",render:function(t){return'\n              <div class="tw-flex tw-flex-col">\n                <div>\n                  <div class="badge-box '.concat(t.state.alarm_1?"red":"",'"></div> Circuit Breaker\n                </div>\n                <div>\n                  <div class="badge-box ').concat(t.state.alarm_2?"red":"",'"></div> Disconnected\n                </div>\n              </div>\n            ')},onClick:function(t){}}]},{name:"Control",class:"tw-w-full",child:[{type:"button",name:"button_auto",class:"fixed ".concat(t.state.auto?"green":"red"),text:t.state.auto?"Auto":"Manual",disable:!1,onClick:function(t){t.state.auto=!t.state.auto}}]}]},onImgShow:function(t){var e="".concat(t.meta.img);if(t.state.alarm_1)e+="_Alarm";else{if(!t.state.open)return null;e+="_Run"}return e}},_={type:"motor",id:"vlv02",name:"VLV02",description:"Valve TO INFLUENT",state:{open:!1,alarm_1:!1,alarm_2:!1,auto:!1},meta:{defaultImg:"VLV02_Run",img:"VLV02",position:{x:645,y:256}},checkAlarm:function(t){return t.state.alarm_1||t.state.alarm_2},panel:function(t){return'\n      <div class="header">'.concat(t.name,'</div>\n      <div class="content">\n        <div>').concat(t.state.open?"Open":"Close","</div>\n        <div>").concat(t.state.auto?"Automatic":"Manual","</div>\n      </div>\n    ")},menu:function(t){return[{name:"Control",child:[{type:"button",name:"button_open",class:"green",text:"Open",icon:["fas","play"],disable:t.state.open||t.state.auto,onClick:function(t){t.state.open=!t.state.open}},{type:"button",name:"button_close",class:"red",text:"Close",icon:["fas","stop"],disable:!t.state.open||t.state.auto,onClick:function(t){t.state.open=!t.state.open}}]},{name:"Alarm",child:[{type:"display",name:"display_alarm_1",render:function(t){return'\n              <div class="tw-flex tw-flex-col">\n                <div>\n                  <div class="badge-box '.concat(t.state.alarm_1?"red":"",'"></div> Circuit Breaker\n                </div>\n                <div>\n                  <div class="badge-box ').concat(t.state.alarm_2?"red":"",'"></div> Disconnected\n                </div>\n              </div>\n            ')},onClick:function(t){}}]},{name:"Control",class:"tw-w-full",child:[{type:"button",name:"button_auto",class:"fixed ".concat(t.state.auto?"green":"red"),text:t.state.auto?"Auto":"Manual",disable:!1,onClick:function(t){t.state.auto=!t.state.auto}}]}]},onImgShow:function(t){var e="".concat(t.meta.img);if(t.state.alarm_1)e+="_Alarm";else{if(!t.state.open)return null;e+="_Run"}return e}},C={setup:function(){var t,e=Object(l.f)([{id:"cod",text:"COD",value:100,unit:"mg/l"},{id:"bod",text:"BOD",value:44.54,unit:"mg/l"},{id:"tss",text:"TSS",value:80.84,unit:"mg/l"},{id:"ph",text:"pH",value:"6 - 9",unit:"-"},{id:"oil",text:"Lemak Minyak",value:2.82,unit:"mg/l"},{id:"amonia",text:"Amonia",value:10,unit:"mg/l"},{id:"fe",text:"Fe",value:3,unit:"mg/l"},{id:"cu",text:"Cu",value:1,unit:"mg/l"},{id:"coliform",text:"Total Coliform",value:3e3,unit:"/100mm"}]),n=Object(l.f)([{type:"level",id:"bak",state:{percent:30},meta:{position:{x:400,y:150}},panel:function(t){return'\n            <div class="content">\n              Test aja\n            </div>\n          '}}]),C=Object(l.f)({showControl:!0,showPanelInfo:!0,showPanelComponent:!0,objScale:1,objX:0,objY:0}),h=Object(l.g)(null),x=Object(l.f)([w,_,c,r,d,v,m,f]),y=function(t){document.querySelector("#line-spotlight").innerHTML="",h.value=null},k=Object(l.a)((function(){var t=[];return x.forEach((function(e){e.checkAlarm(e)&&t.push(e)})),t})),S=function(t){var rect=t.getBoundingClientRect();return{left:rect.left+window.pageXOffset,top:rect.top+window.pageYOffset,width:rect.width||t.offsetWidth,height:rect.height||t.offsetHeight}},O=function(t,e,n,o){var l,c;if(t instanceof Element)c=(l=S(t)).left+l.width/2;else{var r=1920,d=document.querySelector("img.overview").clientWidth,v=d*t.size.w/r,m=d*t.size.h/r;c=(l={left:d*t.position.x/r,top:d*t.position.y/r,width:v,height:m}).left+l.width/2}var f=S(e),w=l.top+l.height/2,_=window.innerWidth/2,C=f.top,h=Math.sqrt((_-c)*(_-c)+(C-w)*(C-w)),x=(c+_)/2-h/2,y=(w+C)/2-o/2,k=Math.atan2(w-C,c-_)*(180/Math.PI),O="<div style='padding:0px; margin:0px; height:"+o+"px; background-color:"+n+"; line-height:1px; position:fixed; left:"+x+"px; top:"+y+"px; width:"+h+"px; -moz-transform:rotate("+k+"deg); -webkit-transform:rotate("+k+"deg); -o-transform:rotate("+k+"deg); -ms-transform:rotate("+k+"deg); transform:rotate("+k+"deg);' />";document.querySelector("#line-spotlight").innerHTML=O},A=Object(l.g)(0),M=function(){localStorage.setItem("controls",JSON.stringify(C))},I=function(){try{var e=document.querySelector("img.overview"),o=1920;t=setInterval((function(){var t=e.clientWidth;if(x.forEach((function(e){var a=document.querySelector("#component-".concat(e.id)),n=void 0===a.dataset.originalWidth?a.clientWidth:a.dataset.originalWidth,l=t*n/o,c=t*e.meta.position.x/o,r=t*e.meta.position.y/o;if(a.dataset.originalWidth=n,a.style.width="".concat(l,"px"),a.style.top="".concat(r,"px"),a.style.left="".concat(c,"px"),C.showPanelComponent){var d=document.querySelector("#panel-".concat(e.id)),v=0,m=0;d.classList.contains("right")?(v=r,m=c+35):(v=r,m=c-(d.clientWidth+35)),d.style.top="".concat(v,"px"),d.style.left="".concat(m,"px")}})),C.showPanelInfo&&n.forEach((function(e){var n=document.querySelector("#panel-".concat(e.id)),l=void 0===n.dataset.originalWidth?n.clientWidth:n.dataset.originalWidth,c=t*e.meta.position.x/o,r=t*e.meta.position.y/o;n.style.top="".concat(r,"px"),n.style.left="".concat(c,"px"),n.dataset.originalWidth=l})),null!==h.value)if(void 0!==h.value.meta.componentSpot){var l=h.value.meta.componentSpot;O(l,document.querySelector("div.menu .content"),"#dddddd",1)}else O(document.querySelector("#component-".concat(h.value.id)),document.querySelector("div.menu .content"),"#dddddd",1)}),50)}catch(t){console.log("ane dah")}},P=function(t){if(null!==j.value){if(17===j.value.keyCode){var e=t.deltaY<0?.05:-.05;C.objScale=parseFloat(C.objScale)+e}else if(16===j.value.keyCode){var n=t.deltaX<0?-25:25;C.objX=parseFloat(C.objX)+n}}else{var o=t.deltaY<0?-25:25;C.objY=parseFloat(C.objY)+o}M()},j=Object(l.g)(null),T=function(t){j.value=t},L=function(t){j.value=null};Object(l.d)((function(){if(null!==localStorage.getItem("controls")){var a=JSON.parse(localStorage.getItem("controls"));Object.entries(a).forEach((function(t){var e=Object(o.a)(t,2),n=e[0],l=e[1];C[n]=l}))}clearInterval(t),I(),C.showControl?M():R(!1)})),Object(l.e)((function(){document.removeEventListener("mousewheel",P),document.removeEventListener("keydown",T),document.removeEventListener("keyup",L)})),Object(l.c)((function(){document.addEventListener("mousewheel",P),document.addEventListener("keydown",T),document.addEventListener("keyup",L)}));var R=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=document.querySelector(".controls.left"),n=void 0===e.dataset.show||("true"===e.dataset.show||!0===e.dataset.show);e.dataset.show=!n,C.showControl=!n,n?(e.style.transform="translateX(-205px)",e.animate([{transform:"translateX(0px)"},{transform:"translateX(-200px)"}],{duration:500})):(e.style.transform="translateX(0px)",e.animate([{transform:"translateX(-200px)"},{transform:"translateX(0px)"}],{duration:500})),t&&M()};return{components:x,componentsHaveAlarm:k,panels:n,renderComponent:A,forceRerender:function(){clearInterval(t),A.value=A.value+1,setTimeout((function(){return I()}),500)},controls:C,saveOption:M,componentSelected:h,componentOnClose:y,onWindowScroll:P,componentClicked:function(t){var e=document.querySelector("div.menu");void 0!==h.value&&null!==h.value&&y(h.value),h.value=t,void 0!==t.onClick&&t.onClick(t),e.animate([{opacity:0,transform:"translateY(120px)"},{opacity:1,transform:"translateY(0px)"}],{duration:500}),setTimeout((function(){O(document.querySelector("#component-".concat(t.id)),document.querySelector("div.menu .content"),"#dddddd",2)}),500)},togglePanelLeft:R,toggleAlarm:function(){x.forEach((function(component,i){Object.keys(component.state).forEach((function(t){var e=component.state[t];t.includes("alarm")&&"boolean"==typeof e&&(x[i].state[t]=!e)}))}))},toggleChLvl:function(){n.forEach((function(t,i){"level"===t.type&&(t.state.percent=30===t.state.percent?80:30)}))},togglePanelComponent:function(){C.showPanelComponent=!C.showPanelComponent},togglePanelInfo:function(){C.showPanelInfo=!C.showPanelInfo},imgClick:function(t){var e=document.createElement("canvas").getContext("2d"),n=t.target,o=t.pageX-n.offsetLeft,l=t.pageY-n.offsetTop,c=e.canvas.width=n.width,r=e.canvas.height=n.height;if(e.drawImage(n,0,0,c,r),0===e.getImageData(o,l,1,1).data[3]){alert("ga ada cok "+t.alt);var d=document.elementFromPoint(t.clientX,t.clientY).click();alert(d.alt),n.style.pointerEvents="auto"}else alert("LOGO clicked!")},dataSwapantau:e,changeDataSwap:function(i){var t=e[i],n=prompt("Masukan data ".concat(t.text," (satuan ").concat(t.unit,")"),t.value);null!=n&&n&&(e[i].value=n)}}}},h=(n(306),n(64)),component=Object(h.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"navbar"},[n("img",{staticClass:"header tw-inline-block tw-mt-2",attrs:{src:"img/logo.png",alt:"Logo"}}),t._v(" "),n("div",{staticClass:"page-title"},[t._v("\n      Page 01 - Overview Waste Water Treatment Plant\n    ")]),t._v(" "),n("div",{staticClass:"actions tw-flex tw-flex-row tw-space-x-2 tw-text-gray-200"},[n("div",[n("font-awesome-icon",{staticClass:"tw-text-4xl",attrs:{icon:["fas","user"]}})],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{key:t.renderComponent,staticClass:"screen tw-relative tw-flex-1",on:{scroll:t.onWindowScroll}},[n("div",{staticClass:"tw-z-20",attrs:{id:"line-spotlight"}}),t._v(" "),n("div",{staticClass:"controls left"},[n("div",{staticClass:"controls-container"},[n("div",{staticClass:"toggle",on:{click:t.togglePanelLeft}},[t._v("\n          Show/Hide\n        ")]),t._v(" "),n("div",{staticClass:"group"},[n("div",{staticClass:"header"},[t._v("\n            Controls\n          ")]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"tw-flex tw-w-full"},[n("div",{staticClass:"tw-w-1/2"},[t._v("\n                Panel Info\n              ")]),t._v(" "),n("div",{staticClass:"tw-w-1/2"},[n("label",{staticClass:"flex items-center space-x-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.controls.showPanelInfo,expression:"controls.showPanelInfo"}],staticClass:"form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none",attrs:{type:"checkbox",name:"checked-demo"},domProps:{checked:Array.isArray(t.controls.showPanelInfo)?t._i(t.controls.showPanelInfo,null)>-1:t.controls.showPanelInfo},on:{change:[function(e){var n=t.controls.showPanelInfo,o=e.target,l=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&t.$set(t.controls,"showPanelInfo",n.concat([null])):c>-1&&t.$set(t.controls,"showPanelInfo",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.controls,"showPanelInfo",l)},t.saveOption]}}),t._v(" "),n("span",{staticClass:"text-gray-900 font-medium"},[t._v("Enable")])])])]),t._v(" "),n("div",{staticClass:"tw-flex tw-w-full"},[n("div",{staticClass:"tw-w-1/2"},[t._v("\n                Panel Comp.\n              ")]),t._v(" "),n("div",{staticClass:"tw-w-1/2"},[n("label",{staticClass:"flex items-center space-x-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.controls.showPanelComponent,expression:"controls.showPanelComponent"}],staticClass:"form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none",attrs:{type:"checkbox",name:"checked-demo"},domProps:{checked:Array.isArray(t.controls.showPanelComponent)?t._i(t.controls.showPanelComponent,null)>-1:t.controls.showPanelComponent},on:{change:[function(e){var n=t.controls.showPanelComponent,o=e.target,l=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&t.$set(t.controls,"showPanelComponent",n.concat([null])):c>-1&&t.$set(t.controls,"showPanelComponent",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.controls,"showPanelComponent",l)},t.saveOption]}}),t._v(" "),n("span",{staticClass:"text-gray-900 font-medium"},[t._v("Enable")])])])]),t._v(" "),n("div",{staticClass:"tw-flex tw-w-full"},[n("div",{staticClass:"tw-w-1/2"},[t._v("\n                Obj Scale\n              ")]),t._v(" "),n("div",{staticClass:"tw-w-1/2 tw-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.controls.objScale,expression:"controls.objScale"}],staticClass:"rounded-lg overflow-hidden appearance-none bg-gray-400 tw-w-full",attrs:{type:"range",min:"0.2",max:"2",step:"0.05",value:"0.5"},domProps:{value:t.controls.objScale},on:{change:t.saveOption,__r:function(e){return t.$set(t.controls,"objScale",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"tw-flex tw-w-full"},[n("div",{staticClass:"tw-w-1/2"},[t._v("\n                Obj X\n              ")]),t._v(" "),n("div",{staticClass:"tw-w-1/2 tw-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.controls.objX,expression:"controls.objX"}],staticClass:"rounded-lg overflow-hidden appearance-none bg-gray-400 tw-w-full",attrs:{type:"range",min:"-1920",max:"1920",step:"0.1",value:"0"},domProps:{value:t.controls.objX},on:{change:t.saveOption,__r:function(e){return t.$set(t.controls,"objX",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"tw-flex tw-w-full"},[n("div",{staticClass:"tw-w-1/2"},[t._v("\n                Obj Y\n              ")]),t._v(" "),n("div",{staticClass:"tw-w-1/2 tw-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.controls.objY,expression:"controls.objY"}],staticClass:"rounded-lg overflow-hidden appearance-none bg-gray-400 tw-w-full",attrs:{type:"range",min:"-1920",max:"1920",step:"0.1",value:"0"},domProps:{value:t.controls.objY},on:{change:t.saveOption,__r:function(e){return t.$set(t.controls,"objY",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"tw-flex tw-w-full"},[n("div",{staticClass:"tw-w-1/2"},[t._v("\n                Refresh\n              ")]),t._v(" "),n("div",{staticClass:"tw-w-1/2 tw-flex"},[n("button",{staticClass:"tw-bg-gray-200 hover:tw-bg-gray-300 tw-text-gray-800 tw-p-1 tw-rounded-sm tw-text-xs",on:{click:t.forceRerender}},[t._v("\n                  Refresh\n                ")])])])])]),t._v(" "),n("div",{staticClass:"group"},[n("div",{staticClass:"header"},[t._v("\n            Components\n          ")]),t._v(" "),n("div",{staticClass:"content"},[n("ul",{staticClass:"tw-list-disc tw-ml-4"},t._l(t.components,(function(e,i){return n("li",{key:i,staticClass:"tw-cursor-pointer hover:tw-text-blue-400",class:{"tw-text-blue-500":null!==t.componentSelected&&e.name===t.componentSelected.name},on:{click:function(n){return t.componentClicked(e)}}},[t._v("\n                "+t._s(e.name)+"\n              ")])})),0)])]),t._v(" "),n("div",{staticClass:"group"},[n("div",{staticClass:"header"},[t._v("\n            Testing\n          ")]),t._v(" "),n("div",{staticClass:"content tw-space-y-1"},[n("div",{staticClass:"tw-flex tw-w-full"},[n("div",{staticClass:"tw-w-1/2"},[t._v("\n                Send Alarm\n              ")]),t._v(" "),n("div",{staticClass:"tw-w-1/2 tw-flex"},[n("button",{staticClass:"tw-bg-gray-200 hover:tw-bg-gray-300 tw-text-gray-800 tw-p-1 tw-rounded-sm tw-text-xs",on:{click:t.toggleAlarm}},[t._v("\n                  Toggle\n                ")])])]),t._v(" "),n("div",{staticClass:"tw-flex tw-w-full"},[n("div",{staticClass:"tw-w-1/2"},[t._v("\n                Ch. lvl\n              ")]),t._v(" "),n("div",{staticClass:"tw-w-1/2 tw-flex"},[n("button",{staticClass:"tw-bg-gray-200 hover:tw-bg-gray-300 tw-text-gray-800 tw-p-1 tw-rounded-sm tw-text-xs",on:{click:t.toggleChLvl}},[t._v("\n                  Toggle\n                ")])])])])])])]),t._v(" "),t.componentsHaveAlarm.length>0?n("div",{staticClass:"controls right danger"},[n("div",{staticClass:"controls-container"},[n("div",{staticClass:"group"},[n("div",{staticClass:"header"},[n("font-awesome-icon",{staticClass:"tw-mx-1 tw-text-red-400",attrs:{icon:["fas","exclamation-triangle"]}}),t._v(" "),n("span",{staticClass:"tw-text-red-400"},[t._v("ALARM!!!")])],1),t._v(" "),n("div",{staticClass:"content"},[n("ul",{staticClass:"tw-list-disc tw-ml-4"},t._l(t.componentsHaveAlarm,(function(e,i){return n("li",{key:i,staticClass:"tw-cursor-pointer tw-text-red-400",on:{click:function(n){return t.componentClicked(e)}}},[t._v("\n                "+t._s(e.name)+"\n              ")])})),0)])])])]):t._e(),t._v(" "),n("div",{staticClass:"controls lg bottom left"},[n("div",{staticClass:"controls-container"},[n("div",{staticClass:"group"},[n("div",{staticClass:"header tw-text-center"},[t._v("\n            Data Swapantau Outlet Ipal\n          ")]),t._v(" "),n("div",{staticClass:"content"},[n("table",{staticClass:"tw-w-full tw-table-auto"},t._l(t.dataSwapantau,(function(e,i){return n("tr",{key:i,staticClass:"tw-cursor-pointer hover:tw-text-gray-800 hover:tw-bg-gray-200",on:{click:function(e){return t.changeDataSwap(i)}}},[n("td",{attrs:{width:"60%"}},[t._v("\n                  "+t._s(e.text)+"\n                ")]),t._v(" "),n("td",{attrs:{width:"20%"}},[t._v("\n                  "+t._s(e.value)+"\n                ")]),t._v(" "),n("td",{attrs:{width:"20%"}},[t._v("\n                  "+t._s(e.unit)+"\n                ")])])})),0)])])])]),t._v(" "),n("div",{staticClass:"obj-container",style:{transform:"scale("+t.controls.objScale+") translate("+t.controls.objX+"px, "+t.controls.objY+"px)"}},[n("img",{staticClass:"overview",attrs:{src:"img/machine/all.png"}}),t._v(" "),n("div",{staticClass:"layer-components"},[n("div",{staticClass:"components"},t._l(t.components,(function(e,i){return n("img",{key:i,staticClass:"component",class:{active:null!=t.componentSelected&&t.componentSelected.id===e.id},style:{opacity:null==e.onImgShow(e)?0:1},attrs:{id:"component-"+e.id,src:"img/machine/"+(null==e.onImgShow(e)?e.meta.defaultImg:e.onImgShow(e))+".png",title:e.name,alt:e.name},on:{click:function(n){return t.componentClicked(e)}}})})),0),t._v(" "),t.controls.showPanelComponent?n("div",{staticClass:"panels"},t._l(t.components,(function(e,i){return n("div",{key:i,staticClass:"panel",class:{right:void 0!==e.meta.panel&&"right"==e.meta.panel.position},attrs:{id:"panel-"+e.id}},[n("div",{staticClass:"panel-container",domProps:{innerHTML:t._s(e.panel(e))}})])})),0):t._e(),t._v(" "),t.controls.showPanelInfo?n("div",{staticClass:"panels"},t._l(t.panels,(function(e,i){return n("div",{key:i,staticClass:"panel",class:"panel-"+e.type,attrs:{id:"panel-"+e.id}},["default"==e.type?n("div",{staticClass:"panel-container",domProps:{innerHTML:t._s(e.panel(e,t.components,this))}}):"level"==e.type?n("div",{staticClass:"tw-relative"},[n("div",{staticClass:"panel-container"},[n("div",{staticClass:"percentage"},[t._v("\n                  "+t._s(e.state.percent)+"%\n                ")]),t._v(" "),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar",style:{height:e.state.percent+"%"}})]),t._v(" "),n("div",[t._v("lvl")])])]):t._e()])})),0):t._e()])]),t._v(" "),n("div",{staticClass:"menu"},[null!=t.componentSelected?n("div",{staticClass:"menu-container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"tw-w-full"},[t._l(t.componentSelected.menu(t.componentSelected),(function(e,i){return n("div",{key:i,staticClass:"group"},[n("div",{staticClass:"group-title"},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),n("div",{staticClass:"group-content"},t._l(e.child,(function(o,l){return n("div",{key:l,class:void 0===e.class?"":e.class},["button"==o.type?n("button",{class:o.class,attrs:{disabled:o.disable},on:{click:function(e){return o.onClick(t.componentSelected,o)}}},[o.icon?n("font-awesome-icon",{staticClass:"tw-mx-1",attrs:{icon:o.icon}}):t._e(),t._v(" "),n("span",[t._v(t._s(o.text))])],1):"display"==o.type?n("div",[n("div",{domProps:{innerHTML:t._s(o.render(t.componentSelected))}})]):t._e()])})),0)])})),t._v(" "),n("div",{staticClass:"group"},[n("div",{staticClass:"group-title"},[t._v("\n                Description\n              ")]),t._v(" "),n("div",{staticClass:"group-content"},[t._v("\n                "+t._s(t.componentSelected.description)+" / "+t._s(t.componentSelected.name)+"\n              ")])]),t._v(" "),n("div",{staticClass:"group"},[n("div",{staticClass:"group-content tw-mt-4"},[n("button",{staticClass:"red",on:{click:function(e){return t.componentOnClose(t.componentSelected)}}},[n("font-awesome-icon",{staticClass:"tw-mx-1",attrs:{icon:["fas","times"]}}),t._v(" "),n("span",[t._v("Close")])],1)])])],2)])]):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-text-left"},[n("div",{staticClass:"tw-text-sm"},[t._v("\n          Username\n        ")]),t._v(" "),n("div",{staticClass:"tw-text-xs"},[t._v("\n          Engineer\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);