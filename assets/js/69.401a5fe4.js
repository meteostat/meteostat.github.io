(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{419:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"point-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#point-data"}},[t._v("#")]),t._v(" Point Data")]),t._v(" "),a("p",[t._v("While weather stations provide data that was measured at a specific location, point data is available for any geographic location. This interface reduces complexity for users as it does not require knowledge about the available weather stations. Instead, data can be retrieved directly.")]),t._v(" "),a("p",[t._v("Point data "),a("strong",[t._v("only returns data if there is at least one nearby weather station")]),t._v(" that reported observations in the desired period.")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("Using the "),a("code",[t._v("Point")]),t._v(" class is pretty straight-forward.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Import Meteostat library")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Stations\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create Point for Vancouver, BC")]),t._v("\nvancouver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49.2497")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.1193")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/python/api/point/"}},[t._v("meteostat.Point")])],1)]),t._v(" "),a("h2",{attrs:{id:"interpolation-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interpolation-methods"}},[t._v("#")]),t._v(" Interpolation Methods")]),t._v(" "),a("p",[t._v("Point data provides more complete time series, as observations of multiple stations are joined together. The data output is being interpolated based on the geographical distance between the different weather stations and the reference point of the query. Additionally, Meteostat adjusts measurements based on difference in altitude.")]),t._v(" "),a("p",[t._v("Meteostat projects the existing observations which are provided by weather stations around the world onto the specified location. For more precise interpolation results, please provide the elevation of your location using the "),a("code",[t._v("alt")]),t._v(" parameter.")]),t._v(" "),a("h3",{attrs:{id:"weighted-average"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weighted-average"}},[t._v("#")]),t._v(" Weighted Average")]),t._v(" "),a("p",[t._v("By default, Meteostat uses weighted averages as its interpolation method. This method utilizes the geographical similarity of nearby weather stations and the provided point to weigh all available data and produce an aggregated output.")]),t._v(" "),a("h3",{attrs:{id:"nearest-neighbor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nearest-neighbor"}},[t._v("#")]),t._v(" Nearest Neighbor")]),t._v(" "),a("p",[t._v("Another common interpolation method is "),a("em",[t._v("nearest neighbor")]),t._v(" interpolation. This method simply takes the closest neighbor for each record and joins all data into a unified "),a("code",[t._v("DataFrame")]),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);