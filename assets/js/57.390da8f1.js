(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{413:function(t,e,a){"use strict";a.r(e);var s=a(45),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"meteostat-normals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meteostat-normals"}},[t._v("#")]),t._v(" meteostat.Normals")]),t._v(" "),a("p",[t._v("Query climate normals for one or multiple weather stations or a single geographical point.")]),t._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("loc")]),t._v(" parameter is required. You can pass a "),a("a",{attrs:{href:"/python/api/point"}},[t._v("meteostat.Point")]),t._v(", a "),a("code",[t._v("DataFrame")]),t._v(" returned by the "),a("a",{attrs:{href:"/python/api/stations/fetch"}},[t._v("meteostat.Stations.fetch")]),t._v(" method or provide one (String) or multiple Meteostat weather station identifiers (Tuple or List).")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("period")]),t._v(" defaults to "),a("code",[t._v("auto")]),t._v(" which will return climate normals for the latest available period. Alternatively, you can set the parameter to "),a("code",[t._v("all")]),t._v(" if you need a DataFrame which contains all available reference periods. You can also set a specific period by passing a "),a("code",[t._v("tuple")]),t._v(" which contains both the start and the end year (e.g. "),a("code",[t._v("(1960, 1990)")]),t._v(").")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Parameter")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Description")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Type")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Default")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loc")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Weather station(s) or Point")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("DataFrame, "),a("a",{attrs:{href:"/python/api/point"}},[t._v("Point")]),t._v(", String or List")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("undefined")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("period")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The reference period")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tuple, String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'auto'")])])])]),t._v(" "),a("h2",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),a("p",[t._v("Attributes allow the configuration of general settings and behaviour.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Parameter")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Description")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Type")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Default")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cache_dir")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The path of the cache directory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("~/.meteostat/cache")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cache_subdir")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The subdirectory of the cache")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Normals")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max_age")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum age of a cached file in seconds")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("86400")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max_threads")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum number of threads used for data processing")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")])])])]),t._v(" "),a("p",[t._v("You can disable caching completely by setting "),a("code",[t._v("max_age")]),t._v(" to "),a("code",[t._v("0")]),t._v(".")]),t._v(" "),a("p",[t._v("When changing attributes, make sure to do so before creating a class instance:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Normals\n\nNormals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my/path/goes/here'")]),t._v("\n\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Normals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10637'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"convert"}},[t._v("meteostat.Normals.convert")])]),t._v(" "),a("li",[a("a",{attrs:{href:"fetch"}},[t._v("meteostat.Normals.fetch")])]),t._v(" "),a("li",[a("a",{attrs:{href:"count"}},[t._v("meteostat.Normals.count")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);