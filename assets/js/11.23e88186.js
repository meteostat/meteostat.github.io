(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(t,e,a){"use strict";a.r(e);var s=a(45),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"json-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-api"}},[t._v("#")]),t._v(" JSON API")]),t._v(" "),a("p",[t._v("The Meteostat JSON API provides simple access to a large archive of historical weather and climate data. The records are queried by weather station or geo location and can be filtered by specifying a date range and other optional parameters.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Donation")]),t._v(" "),a("p",[t._v("Help Meteostat provide free weather and climate data by donating via "),a("a",{attrs:{href:"https://paypal.me/meteostat",target:"_blank",rel:"noopener noreferrer"}},[t._v("PayPal"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("The API is available via this URL:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://api.meteostat.net\n")])])]),a("p",[t._v("Access to the API requires users to send their API key along with every request. All API endpoints return a JSON object that contains two properties: "),a("code",[t._v("meta")]),t._v(" and "),a("code",[t._v("data")]),t._v(". The "),a("code",[t._v("meta")]),t._v(" object provides general information about the data output and debugging information. For instance, the "),a("code",[t._v("source")]),t._v(" string which holds the names of the organizations which provided the raw data. The "),a("code",[t._v("data")]),t._v(" property is either an object or an array that contains the actual data output.")]),t._v(" "),a("p",[t._v("All API endpoints are accessible using HTTP Get requests. For debugging, please utilize the HTTP status code of the response.")]),t._v(" "),a("h2",{attrs:{id:"api-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-key"}},[t._v("#")]),t._v(" API Key")]),t._v(" "),a("p",[t._v("Please submit this "),a("a",{attrs:{href:"https://auth.meteostat.net/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("form")]),a("OutboundLink")],1),t._v(" to apply for an API key.")]),t._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("p",[t._v("Once you have your API key, head over to your terminal, replace the "),a("code",[t._v("{key}")]),t._v(" parameter with your personal API key and execute the following command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-api-key: {key}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.meteostat.net/v2/stations/meta?id=10637"')]),t._v("\n")])])]),a("p",[t._v("You should see meta information for the weather station "),a("em",[t._v("Frankfurt Airport")]),t._v(" in JSON format.")]),t._v(" "),a("h2",{attrs:{id:"quota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quota"}},[t._v("#")]),t._v(" Quota")]),t._v(" "),a("p",[t._v("Free access to the Meteostat API is limited to 2,000 requests per day and no more than two requests per second. Once this limit is reached, all of your requests will result in HTTP 429, too many requests, until your quota is cleared.")]),t._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),a("p",[t._v("When retrieving data from Meteostat API endpoints make sure to send the "),a("code",[t._v("x-api-key")]),t._v(" header along with every request. You cannot use the "),a("code",[t._v("key")]),t._v(" URL parameter to authenticate API calls as in version 1.")]),t._v(" "),a("h2",{attrs:{id:"status-codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status-codes"}},[t._v("#")]),t._v(" Status Codes")]),t._v(" "),a("p",[t._v("All Meteostat API endpoints return one of the following status codes. You can utilize them for debugging.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Code")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Description")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("Success")]),t._v(": Alls is fine")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("400")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("Bad Request")]),t._v(": Please check the request parameters")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("401")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("Unauthorized")]),t._v(": Make sure to send a valid "),a("code",[t._v("x-api-key")]),t._v(" header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("403")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("Forbidden")]),t._v(": You're not allowed to access this endpoint")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("404")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("Not Found")]),t._v(": This endpoint doesn't exist")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("429")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("Too Many Requests")]),t._v(": You've exceeded the quota")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("503")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("Service Temporarily Unavailable")]),t._v(": The API is currently down")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);