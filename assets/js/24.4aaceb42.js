(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{375:function(t,e,a){"use strict";a.r(e);var l=a(42),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"daily-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daily-data"}},[t._v("#")]),t._v(" Daily Data")]),t._v(" "),a("p",[t._v("This endpoint provides one GZ compressed CSV file per weather station.")]),t._v(" "),a("h2",{attrs:{id:"endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[t._v("#")]),t._v(" Endpoint")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://bulk.meteostat.net/daily/{station}.csv.gz\n")])])]),a("p",[t._v("Please replace "),a("code",[t._v("{station}")]),t._v(" with the ID of a weather station.")]),t._v(" "),a("p",[t._v("Weather stations are identified using their Meteostat ID, which equals the WMO ID for weather stations which are part of the WMO index.")]),t._v(" "),a("h2",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),a("p",[t._v("CSV files provided through the Meteostat bulk data interface use commas as separators. Each file provides the following columns:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Order")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Parameter")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Description")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Type")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The date string (format: YYYY-MM-DD)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tavg")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average air temperature in °C")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tmin")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The minimum air temperature in °C")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tmax")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The maximum air temperature in °C")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("prcp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The daily precipitation total in mm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("snow")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The snow depth in mm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("wdir")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average wind direction in degrees (°)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("wspd")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average wind speed in km/h")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("wpgt")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The peak wind gust in km/h")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("pres")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average sea-level air pressure in hPa")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tsun")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The daily sunshine total in minutes (m)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])])])]),t._v(" "),a("p",[t._v("More information on the data formats and weather condition codes is available "),a("a",{attrs:{href:"/docs/formats"}},[t._v("here")]),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports}}]);