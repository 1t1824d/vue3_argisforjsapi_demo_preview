(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"159b":function(t,e,a){var n=a("da84"),r=a("fdbc"),c=a("17c2"),s=a("9112");for(var o in r){var i=n[o],l=i&&i.prototype;if(l&&l.forEach!==c)try{s(l,"forEach",c)}catch(u){l.forEach=c}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,r=a("a640"),c=a("ae40"),s=r("forEach"),o=c("forEach");t.exports=s&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"2c77":function(t,e,a){},4160:function(t,e,a){"use strict";var n=a("23e7"),r=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"471b":function(t,e,a){"use strict";a("2c77")},5537:function(t,e,a){"use strict";a("9e54")},"7f74":function(t,e,a){"use strict";a("9635")},9635:function(t,e,a){},"9e54":function(t,e,a){},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},d81d:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").map,c=a("1dde"),s=a("ae40"),o=c("map"),i=s("map");n({target:"Array",proto:!0,forced:!o||!i},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("map2")],1)},r=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map2"},[a("div",{attrs:{id:"viewDiv"}}),a("div",{staticClass:"esri-widget",attrs:{id:"paneDiv"}},[a("p",[t._v("Select a symbol and place it in the scene:")]),a("button",{staticClass:"esri-button",attrs:{id:"tent"}},[t._v("Tent")]),a("br"),a("button",{staticClass:"esri-button",attrs:{id:"canoe"}},[t._v("Canoe")]),a("p",{attrs:{id:"credits"}},[t._v(" Tent and canoe glTF models from "),a("a",{attrs:{href:"https://www.kenney.nl/assets/",target:"_blank"}},[t._v("Kenney game assets")]),t._v(" under "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank"}},[t._v("CC0 1.0 Universal")]),t._v(". ")])])])}],o=(a("4160"),a("d81d"),a("fb6a"),a("159b"),a("3835")),i=a("afaa"),l={name:"map2",mounted:function(){this.drawmap()},methods:{drawmap:function(){Object(i["setDefaultOptions"])({url:"https://js.arcgis.com/4.18/",css:"https://js.arcgis.com/4.18/esri/themes/light/main.css"}),Object(i["loadModules"])(["esri/views/SceneView","esri/WebScene","esri/Map","esri/layers/GraphicsLayer","esri/widgets/Sketch/SketchViewModel"]).then((function(t){var e=Object(o["a"])(t,5),a=e[0],n=e[1],r=(e[2],e[3]),c=e[4],s=new n({portalItem:{id:"414a28cfca7a471180e8e952cf14c60f"}}),i=new a({container:"viewDiv",map:s}),l=new r({elevationInfo:{mode:"on-the-ground"}});i.map.add(l);var u=document.getElementById("tent"),d=document.getElementById("canoe");function f(){var t=Array.prototype.slice.call(document.getElementsByClassName("esri-button"));t.forEach((function(t){t.classList.remove("esri-button--secondary")}))}i.when((function(){var t=new c({layer:l,view:i});u.addEventListener("click",(function(){t.pointSymbol={type:"point-3d",symbolLayers:[{type:"object",resource:{href:"https://developers.arcgis.com/javascript/latest/sample-code/import-gltf/live/tent.glb"}}]},t.create("point"),f(),this.classList.add("esri-button--secondary")})),d.addEventListener("click",(function(){t.pointSymbol={type:"point-3d",symbolLayers:[{type:"object",resource:{href:"https://developers.arcgis.com/javascript/latest/sample-code/import-gltf/live/canoe.glb"}}]},f(),t.create("point"),this.classList.add("esri-button--secondary")})),t.on("create",(function(e){"complete"===e.state&&(t.update(e.graphic),f())}))})).catch(console.error),i.ui.add("paneDiv","top-right")})).catch((function(t){console.error(t)}))}}},u=l,d=(a("5537"),a("471b"),a("2877")),f=Object(d["a"])(u,c,s,!1,null,"fae87482",null),p=f.exports,m={name:"about",components:{map2:p}},v=m,h=(a("7f74"),Object(d["a"])(v,n,r,!1,null,"7867d2c4",null));e["default"]=h.exports}}]);
//# sourceMappingURL=about.1fe14ba5.js.map