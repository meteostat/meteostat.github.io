(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{378:function(t,e,a){"use strict";a.r(e);var s=a(45),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bulk-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bulk-data"}},[t._v("#")]),t._v(" Bulk Data")]),t._v(" "),a("p",[t._v("The Meteostat bulk data interface provides access to full data dumps of individual weather stations. The data is provided in CSV (weather data) and JSON (weather stations) format. Users are "),a("strong",[t._v("not required to sign up")]),t._v(" for this service.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Donation")]),t._v(" "),a("p",[t._v("Help Meteostat provide free weather and climate data by donating via "),a("a",{attrs:{href:"https://paypal.me/meteostat",target:"_blank",rel:"noopener noreferrer"}},[t._v("PayPal"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("p",[t._v("The download of full data dumps is dead simple and doesn’t even require an API key:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://bulk.meteostat.net/v2/hourly/10637.csv.gz"')]),t._v(" --output "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10637.csv.gz"')]),t._v("\n")])])]),a("p",[t._v("With our "),a("RouterLink",{attrs:{to:"/python/"}},[t._v("Python library")]),t._v(" we're providing a simple, yet powerful, wrapper for bulk data dumps. If you're into more complex analysis you should definitely have a look at it.")],1),t._v(" "),a("h2",{attrs:{id:"endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[t._v("#")]),t._v(" Endpoint")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://bulk.meteostat.net/v2\n")])])]),a("p",[t._v("In contrast to our JSON API the Bulk Data interface does not require an API key. However, when using this service you must comply with our "),a("RouterLink",{attrs:{to:"/docs/terms.html"}},[t._v("terms of service")]),t._v(". Please make sure to cache data if possible and forbear from sending malicious calls to this service.")],1),t._v(" "),a("h2",{attrs:{id:"update-cycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-cycle"}},[t._v("#")]),t._v(" Update Cycle")]),t._v(" "),a("p",[t._v("To keep the load on our infrastructure as low as possible, Meteostat updates bulk data dumps individually for each weather station. The dumps are updated regularly, depending on the frequency of records. Recent hourly data should be available after a maximum of 24 hours.")])])}),[],!1,null,null,null);e.default=r.exports}}]);