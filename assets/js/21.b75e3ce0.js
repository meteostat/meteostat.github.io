(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{378:function(t,a,e){"use strict";e.r(a);var s=e(45),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bulk-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bulk-data"}},[t._v("#")]),t._v(" Bulk Data")]),t._v(" "),e("p",[t._v("The Meteostat bulk data interface provides access to full data dumps of individual weather stations. The data is provided in CSV (weather data) and JSON (weather stations) format. Users are "),e("strong",[t._v("not required to sign up")]),t._v(" for this service.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Donation")]),t._v(" "),e("p",[t._v("Help Meteostat provide free weather and climate data by making a "),e("a",{attrs:{href:"/donate"}},[t._v("donation")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),e("p",[t._v("The download of full data dumps is dead simple and doesn’t even require an API key:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://bulk.meteostat.net/v2/hourly/10637.csv.gz"')]),t._v(" --output "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10637.csv.gz"')]),t._v("\n")])])]),e("p",[t._v("With our "),e("RouterLink",{attrs:{to:"/python/"}},[t._v("Python library")]),t._v(" we're providing a simple, yet powerful, wrapper for bulk data dumps. If you're into more complex analysis you should definitely have a look at it.")],1),t._v(" "),e("h2",{attrs:{id:"endpoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[t._v("#")]),t._v(" Endpoint")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://bulk.meteostat.net/v2\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Missing Files")]),t._v(" "),e("p",[t._v("The dumps of weather stations which didn't report data for the requested frequency or data type will return an HTTP "),e("code",[t._v("404")]),t._v(" status code.")])]),t._v(" "),e("p",[t._v("In contrast to our JSON API the Bulk Data interface does not require an API key. However, when using this service you must comply with our "),e("RouterLink",{attrs:{to:"/terms.html"}},[t._v("terms of service")]),t._v(". Please make sure to cache data if possible and forbear from sending malicious calls to this service.")],1),t._v(" "),e("h2",{attrs:{id:"update-cycle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-cycle"}},[t._v("#")]),t._v(" Update Cycle")]),t._v(" "),e("p",[t._v("To keep the load on our infrastructure as low as possible, Meteostat updates bulk data dumps individually for each weather station. The dumps are updated regularly, depending on the frequency of records. Recent hourly data should be available after a maximum of 24 hours.")])])}),[],!1,null,null,null);a.default=r.exports}}]);