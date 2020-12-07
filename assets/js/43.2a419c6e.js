(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{395:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"meteostat-daily-interpolate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meteostat-daily-interpolate"}},[t._v("#")]),t._v(" meteostat.Daily.interpolate")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("interpolate")]),t._v(" method closes gaps in time series by applying an interpolation algorithm. Please make sure to first "),s("a",{attrs:{href:"normalize"}},[s("code",[t._v("normalize")])]),t._v(" your data before interpolating.")]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Parameter")])]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Description")])]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Type")])]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Default")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("limit")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum number of missing consecutive values to fill")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("3")])])])]),t._v(" "),s("h2",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[s("code",[t._v("Daily")]),t._v(" class instance")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("Get normalized 2018 weather data for Vancouver, BC and close gaps of up two three consecutive days.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Daily\n\nstations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nearby"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("49.2497")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.1193")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Daily"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("station"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("end"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normalize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interpolate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);