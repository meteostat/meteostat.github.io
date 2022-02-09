(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{381:function(t,e,a){"use strict";a.r(e);var l=a(45),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"monthly-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monthly-data"}},[t._v("#")]),t._v(" Monthly Data")]),t._v(" "),a("p",[t._v("This endpoint provides one GZ compressed CSV file per weather station.")]),t._v(" "),a("h2",{attrs:{id:"endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),a("p",[t._v("Full data dumps, including model data as substitute, are available here:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://bulk.meteostat.net/v2/monthly/{station}.csv.gz\n")])])]),a("p",[t._v("Please replace "),a("code",[t._v("{station}")]),t._v(" with the ID of a weather station.")]),t._v(" "),a("h2",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),a("p",[t._v("CSV files provided through the Meteostat bulk data interface use commas as separators. Each file provides the following columns:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Order")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Parameter")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Description")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Type")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("year")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The year (format: YYYY)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("month")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The month (format: MM)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tavg")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average air temperature in °C")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tmin")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average daily minimum air temperature in °C")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tmax")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average daily maximum air temperature in °C")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("prcp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The monthly precipitation total in mm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("snow")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The maximum snow depth in mm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("wdir")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average wind direction in degrees (°)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("wspd")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average wind speed in km/h")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("wpgt")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The peak wind gust in km/h")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("pres")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average sea-level air pressure in hPa")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tsun")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The monthly sunshine total in minutes (m)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])])])]),t._v(" "),a("p",[t._v("More information about the data format is available "),a("RouterLink",{attrs:{to:"/formats.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"source-maps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-maps"}},[t._v("#")]),t._v(" Source Maps")]),t._v(" "),a("p",[t._v("Each dump has a "),a("code",[t._v(".map")]),t._v(" file associated with it. These source map files are equally structured as the dumps themselves. However, instead of numerical data, they contain flags which identify the original source of an observation or aggregation.")]),t._v(" "),a("p",[t._v("To request a station's map file, use the following URL:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://bulk.meteostat.net/v2/monthly/{station}.map.csv.gz\n")])])]),a("p",[t._v("Please replace "),a("code",[t._v("{station}")]),t._v(" with the ID of a weather station.")]),t._v(" "),a("h3",{attrs:{id:"flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[t._v("#")]),t._v(" Flags")]),t._v(" "),a("p",[t._v("Please refer to the following table for the meaning of the different flags:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Flag")])]),t._v(" "),a("th",[a("strong",[t._v("Source")])]),t._v(" "),a("th",[a("strong",[t._v("Granularity")])]),t._v(" "),a("th",[a("strong",[t._v("Aggregated")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("A")])]),t._v(" "),a("td",[t._v("National weather service")]),t._v(" "),a("td",[t._v("Monthly")]),t._v(" "),a("td",[t._v("X")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("B")])]),t._v(" "),a("td",[t._v("Global dataset")]),t._v(" "),a("td",[t._v("Monthly")]),t._v(" "),a("td",[t._v("X")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("C")])]),t._v(" "),a("td",[t._v("National weather service")]),t._v(" "),a("td",[t._v("Daily")]),t._v(" "),a("td",[t._v("✓")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("D")])]),t._v(" "),a("td",[t._v("Global dataset (GHCND)")]),t._v(" "),a("td",[t._v("Daily")]),t._v(" "),a("td",[t._v("✓")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("E")])]),t._v(" "),a("td",[t._v("National weather service")]),t._v(" "),a("td",[t._v("Hourly")]),t._v(" "),a("td",[t._v("✓")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("F")])]),t._v(" "),a("td",[t._v("Global dataset (ISD)")]),t._v(" "),a("td",[t._v("Hourly")]),t._v(" "),a("td",[t._v("✓")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("G")])]),t._v(" "),a("td",[t._v("SYNOP reports")]),t._v(" "),a("td",[t._v("Hourly")]),t._v(" "),a("td",[t._v("✓")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("H")])]),t._v(" "),a("td",[t._v("METAR reports")]),t._v(" "),a("td",[t._v("Hourly")]),t._v(" "),a("td",[t._v("✓")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("I")])]),t._v(" "),a("td",[t._v("Model data (MOSMIX, Met.no)")]),t._v(" "),a("td",[t._v("Hourly")]),t._v(" "),a("td",[t._v("✓")])])])]),t._v(" "),a("p",[t._v("If the data source is a national weather service (NWS), it refers to the NWS which operates the respective weather station.")])])}),[],!1,null,null,null);e.default=v.exports}}]);