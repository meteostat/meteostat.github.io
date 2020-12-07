(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{393:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"meteostat-daily-coverage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meteostat-daily-coverage"}},[t._v("#")]),t._v(" meteostat.Daily.coverage")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("coverage")]),t._v(" method provides information about the completeness of data. It can be used to determine the coverage of records or individual parameters.")]),t._v(" "),e("h2",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("p",[t._v("You can specify an optional "),e("code",[t._v("parameter")]),t._v(" to look for. This can be any "),e("RouterLink",{attrs:{to:"/python/daily.html#response-parameters"}},[t._v("response parameter")]),t._v(" of the "),e("code",[t._v("Daily")]),t._v(" class (e.g. "),e("code",[t._v("tmax")]),t._v(" for the maximum temperature).")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Parameter")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Description")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Type")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Default")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("parameter")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Check coverage of a certain meteorological parameter")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("None")])])])]),t._v(" "),e("h2",{attrs:{id:"returns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),e("p",[t._v("Integer between 0 (no records) and 1 (all records)")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("Check completeness of records for Sydney Airport in 2019.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Daily\n\nstart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndata "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Daily"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'94767'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("end"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncoverage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coverage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coverage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);