webpackJsonp([23],{E1ph:function(s,t,a){s.exports=a("GaZP")},GaZP:function(s,t,a){var n=a("VU/8")(a("lY2q"),a("MAE3"),null,null);s.exports=n.exports},MAE3:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[[a("h1",[s._v("上下文菜单")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("在地图中插入一个上下文菜单")]),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(3),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:s.center,zoom:s.zoom}},[a("bm-context-menu",[a("bm-context-menu-item",{attrs:{callback:s.gotoBeijing,text:"去北京"}}),s._v(" "),a("bm-context-menu-item",{attrs:{callback:s.gotoShanghai,text:"去上海"}})],1)],1)],1),s._v(" "),s._m(4),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(5),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:s.center,zoom:s.zoom}},[a("bm-marker",{attrs:{position:{lng:116.404,lat:39.915},dragging:!0}},[a("bm-context-menu",[a("bm-context-menu-item",{attrs:{callback:s.getPosition,text:"获取坐标"}})],1)],1)],1)],1)]],2)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",[s._v("BmContextMenu")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("width")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("Number")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}}),s._v(" "),a("td",[s._v("菜单宽度")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("open")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("event{type, target, point, pixel}")]),s._v(" "),a("td",[s._v("右键菜单打开时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点")])]),s._v(" "),a("tr",[a("td",[s._v("close")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("event{type, target, point, pixel}")]),s._v(" "),a("td",[s._v("右键菜单关闭时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"center"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"zoom"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":callback")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"gotoBeijing"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"去北京"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":callback")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"gotoShanghai"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"去上海"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n      },\n      "),a("span",{staticClass:"hljs-attr"},[s._v("zoom")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("15")]),s._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    gotoBeijing (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".center = {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n      }\n    },\n    gotoShanghai (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".center = {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("121.473354")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("31.238413")]),s._v("\n      }\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h3",[s._v("在 "),a("code",[s._v("BmMarker")]),s._v(" 组件中插入一个上下文菜单")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"center"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"zoom"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-marker")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":position")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{lng: 116.404, lat: 39.915}"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":dragging")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":callback")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"getPosition"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"获取坐标"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-marker")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n      },\n      "),a("span",{staticClass:"hljs-attr"},[s._v("zoom")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("15")]),s._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    getPosition (e) {\n      alert("),a("span",{staticClass:"hljs-string"},[s._v("`"),a("span",{staticClass:"hljs-subst"},[s._v("${e.point.lng}")]),s._v(" / "),a("span",{staticClass:"hljs-subst"},[s._v("${e.point.lat}")]),s._v("`")]),s._v(")\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}},lY2q:function(s,t,a){var n,l,_;!function(a,v){l=[s,t],n=v,void 0!==(_="function"==typeof n?n.apply(t,l):n)&&(s.exports=_)}(0,function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{center:"北京",zoom:15}},methods:{gotoBeijing:function(s){this.center="北京"},gotoShanghai:function(s){this.center="上海"},getPosition:function(s){alert(s.point.lng+" / "+s.point.lat)}}},s.exports=t.default})}});