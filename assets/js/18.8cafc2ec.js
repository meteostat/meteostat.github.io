(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{375:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"monthly-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monthly-data"}},[t._v("#")]),t._v(" Monthly Data")]),t._v(" "),a("p",[t._v("This endpoint provides historical monthly statistics for a particular weather station. The data provided through this endpoint is aggregated from multiple governmental interfaces.")]),t._v(" "),a("p",[t._v("Monthly data is coming in with an offset of multiple months. Additionally, Meteostat aggregates monthly data from hourly observations, daily records and model data.")]),t._v(" "),a("h2",{attrs:{id:"endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[t._v("#")]),t._v(" Endpoint")]),t._v(" "),a("p",[t._v("Monthly data is provided through this endpoint:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET https://meteostat.p.rapidapi.com/stations/monthly\n")])])]),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("When calling this endpoint please refer to the following parameters.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Parameter")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Description")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Type")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Required")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Default")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("station")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The weather station ID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("undefined")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("start")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The start date of the query (YYYY-MM-DD)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("undefined")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("end")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The end date of the query (YYYY-MM-DD)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("undefined")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("model")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Substitute missing records with statistically optimized model data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("freq")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The time frequency of the records. Can be used for custom aggregation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("null")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("units")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The unit system of the meteorological parameters")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("metric")])])])]),t._v(" "),a("p",[t._v("For full specification of available frequencies, defined by the "),a("code",[t._v("freq")]),t._v(" parameter, please see "),a("a",{attrs:{href:"https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#offset-aliases",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("units")]),t._v(" parameter takes one of the following values:")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("metric")]),t._v(" (Celsius, Millimeters, Kilometers per hour)")]),t._v(" "),a("li",[a("em",[t._v("imperial")]),t._v(" (Fahrenheit, Inches, Miles per hour)")]),t._v(" "),a("li",[a("em",[t._v("scientific")]),t._v(" (Kelvin, Millimeters, Meters per second)")])]),t._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[t._v("The response body includes the following properties. Please note that all units mentioned below refer to the default "),a("code",[t._v("units")]),t._v(" setting.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Parameter")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Description")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Type")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The first date (YYYY-MM-DD) of the month")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tavg")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average daily air temperature in °C")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tmin")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average daily minimum air temperature in °C")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tmax")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average daily maximum air temperature in °C")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prcp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The monthly precipitation total in mm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("snow")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The maximum snow depth in mm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("wdir")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average wind direction in degrees (°)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("wspd")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average wind speed in km/h")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("wpgt")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The peak wind gust in km/h")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pres")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The average sea-level air pressure in hPa")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tsun")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The monthly sunshine total in minutes (m)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")])])])]),t._v(" "),a("p",[t._v("More information about the data format is available "),a("RouterLink",{attrs:{to:"/formats.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("The following example requires the cURL command-line interface. Alternatively, you can use an API client like Postman.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request GET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://meteostat.p.rapidapi.com/stations/monthly?station=10637&start=2020-01-01&end=2020-12-31'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-rapidapi-host: meteostat.p.rapidapi.com'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-rapidapi-key: {key}'")]),t._v("\n")])])]),a("p",[t._v("Please replace "),a("code",[t._v("{key}")]),t._v(" with your personal API key.")]),t._v(" "),a("h3",{attrs:{id:"data-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-response"}},[t._v("#")]),t._v(" Data Response")]),t._v(" "),a("p",[t._v("The data output returns one object per month. Have a look at this example:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-01-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tavg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prcp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"snow"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wdir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("191.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wspd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wpgt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("77")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pres"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1025.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tsun"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3300")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);