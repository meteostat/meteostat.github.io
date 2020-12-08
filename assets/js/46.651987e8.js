(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{398:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"meteostat-hourly-aggregate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meteostat-hourly-aggregate"}},[t._v("#")]),t._v(" meteostat.Hourly.aggregate")]),t._v(" "),e("p",[t._v("Aggregation is an important tool in data analysis. Meteostat allows both time-wise and spatial aggregation.")]),t._v(" "),e("h2",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("freq")]),t._v(" parameter specifies the time series frequency. For full specification of available frequencies, please see "),e("a",{attrs:{href:"https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#offset-aliases",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(". If you want to aggregate across all weather stations, just set the "),e("code",[t._v("spatial")]),t._v(" parameter to "),e("code",[t._v("true")]),t._v(".")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Parameter")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Description")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Type")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Default")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("freq")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Group by the specified frequency")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("'1H'")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("spatial")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate averages across weather stations")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("False")])])])]),t._v(" "),e("h2",{attrs:{id:"returns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),e("p",[e("code",[t._v("Hourly")]),t._v(" class instance")]),t._v(" "),e("h3",{attrs:{id:"aggregate-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-functions"}},[t._v("#")]),t._v(" Aggregate Functions")]),t._v(" "),e("p",[t._v("Meteostat uses the following aggregate functions:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("temp")]),t._v(" => "),e("code",[t._v("mean")])]),t._v(" "),e("li",[e("code",[t._v("dwpt")]),t._v(" => "),e("code",[t._v("mean")])]),t._v(" "),e("li",[e("code",[t._v("rhum")]),t._v(" => "),e("code",[t._v("mean")])]),t._v(" "),e("li",[e("code",[t._v("prcp")]),t._v(" => "),e("code",[t._v("sum")])]),t._v(" "),e("li",[e("code",[t._v("snow")]),t._v(" => "),e("code",[t._v("mean")])]),t._v(" "),e("li",[e("code",[t._v("wdir")]),t._v(" => "),e("code",[t._v("mean")])]),t._v(" "),e("li",[e("code",[t._v("wspd")]),t._v(" => "),e("code",[t._v("mean")])]),t._v(" "),e("li",[e("code",[t._v("wpgt")]),t._v(" => "),e("code",[t._v("max")])]),t._v(" "),e("li",[e("code",[t._v("pres")]),t._v(" => "),e("code",[t._v("mean")])]),t._v(" "),e("li",[e("code",[t._v("tsun")]),t._v(" => "),e("code",[t._v("sum")])]),t._v(" "),e("li",[e("code",[t._v("coco")]),t._v(" => "),e("code",[t._v("max")])])]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("Get weekly weather data for Frankfurt Airport in December 2018.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Stations"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Hourly\n\nstart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndata "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Hourly"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10637'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("end"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normalize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aggregate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1W'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);