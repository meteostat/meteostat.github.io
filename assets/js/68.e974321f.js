(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{418:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"weather-stations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weather-stations"}},[t._v("#")]),t._v(" Weather Stations")]),t._v(" "),a("p",[t._v("In contrast to other meteorological data interfaces Meteostat does not use a global data model. Instead, Meteostat provides weather observations and long-term climate statistics for individual weather stations. Understandably, no one knows the identifiers of each and every weather station. Therefore, Meteostat provides the "),a("code",[t._v("Stations")]),t._v(" class - a simple interface for querying weather stations using several filters.")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("Using the "),a("code",[t._v("Stations")]),t._v(" class is pretty straight-forward. Just initialize a new instance and apply some filters using a "),a("RouterLink",{attrs:{to:"/python/api/stations/#methods"}},[t._v("method")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Import Meteostat library")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Stations\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get nearby weather stations")]),t._v("\nstations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Stations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nearby"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49.2497")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.1193")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print DataFrame")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("station"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/python/api/stations/"}},[t._v("meteostat.Stations")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"api/stations/nearby"}},[t._v("meteostat.Stations.nearby")])]),t._v(" "),a("li",[a("a",{attrs:{href:"api/stations/bounds"}},[t._v("meteostat.Stations.bounds")])]),t._v(" "),a("li",[a("a",{attrs:{href:"api/stations/region"}},[t._v("meteostat.Stations.region")])]),t._v(" "),a("li",[a("a",{attrs:{href:"api/stations/id"}},[t._v("meteostat.Stations.id")])]),t._v(" "),a("li",[a("a",{attrs:{href:"api/stations/inventory"}},[t._v("meteostat.Stations.inventory")])]),t._v(" "),a("li",[a("a",{attrs:{href:"api/stations/convert"}},[t._v("meteostat.Stations.convert")])]),t._v(" "),a("li",[a("a",{attrs:{href:"api/stations/fetch"}},[t._v("meteostat.Stations.fetch")])]),t._v(" "),a("li",[a("a",{attrs:{href:"api/stations/count"}},[t._v("meteostat.Stations.count")])])]),t._v(" "),a("h2",{attrs:{id:"data-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),a("p",[t._v("Each weather station is represented by a Pandas DataFrame row which provides meta information about the station. These are the different columns:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Column")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Description")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Type")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The Meteostat ID of the weather station")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The English name of the weather station")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("country")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The ISO 3166-1 alpha-2 country code of the weather station")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("state")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The ISO 3166-2 state or region code of the weather station")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("wmo")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The WMO ID of the weather station")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icao")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The ICAO ID of the weather station")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("latitude")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The latitude of the weather station")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float64")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("longitude")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The longitude of the weather station")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float64")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("elevation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The elevation of the weather station in meters above sea level")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float64")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timezone")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The time zone of the weather station")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("hourly_start")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The first day on record for hourly data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Datetime64")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("hourly_end")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The last day on record for hourly data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Datetime64")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("daily_start")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The first day on record for daily data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Datetime64")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("daily_end")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The last day on record for daily data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Datetime64")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);