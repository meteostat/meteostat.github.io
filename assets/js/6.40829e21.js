(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{357:function(t,a,s){t.exports=s.p+"assets/img/py-example-chart.046f8b8e.png"},389:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"python-library"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-library"}},[t._v("#")]),t._v(" Python Library")]),t._v(" "),e("p",[t._v("The Meteostat Python library provides simple access to open weather and climate data using Pandas. Historical observations and statistics are obtained from Meteostat's "),e("RouterLink",{attrs:{to:"/bulk/"}},[t._v("bulk data interface")]),t._v(" and consist of data provided by different public interfaces, most of which are governmental. Among the "),e("RouterLink",{attrs:{to:"/docs/sources.html"}},[t._v("data sources")]),t._v(" are national weather services like the National Oceanic and Atmospheric Administration (NOAA) and Germany's national meteorological service (DWD).")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Donation")]),t._v(" "),e("p",[t._v("Help Meteostat provide free weather and climate data by donating via "),e("a",{attrs:{href:"https://paypal.me/meteostat",target:"_blank",rel:"noopener noreferrer"}},[t._v("PayPal"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("The Meteostat Python package is available through "),e("a",{attrs:{href:"https://pypi.org/project/meteostat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyPI"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pip install meteostat\n")])])]),e("p",[t._v("Meteostat "),e("strong",[t._v("requires Python 3.5")]),t._v(" or higher. If you want to visualize data, please install Matplotlib, too.")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("Let's pretend you want to plot temperature data for Vancouver, BC from 2018:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Import Meteostat library and dependencies")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Point"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Daily\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set time period")]),t._v("\nstart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create Point for Vancouver, BC")]),t._v("\nvancouver "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Point"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("49.2497")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.1193")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get daily data for 2018")]),t._v("\ndata "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Daily"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vancouver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Plot line chart including average, minimum and maximum temperature")]),t._v("\ndata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tavg'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tmin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tmax'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("p",[e("img",{attrs:{src:s(357),alt:"2018 temperature data for Vancouver, BC"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);