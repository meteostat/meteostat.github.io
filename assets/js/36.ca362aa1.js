(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{389:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"weather-stations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weather-stations"}},[t._v("#")]),t._v(" Weather Stations")]),t._v(" "),s("p",[t._v("In contrast to other meteorological data interfaces Meteostat does not use a global data model. Instead, Meteostat provides weather observations and long-term climate statistics for individual weather stations. Understandably, no one knows the identifiers of each and every weather station. Therefore, Meteostat provides a simple interface for querying weather stations using several filters.")]),t._v(" "),s("h2",{attrs:{id:"selecting-weather-stations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selecting-weather-stations"}},[t._v("#")]),t._v(" Selecting Weather Stations")]),t._v(" "),s("p",[t._v("Weather stations are selected through the "),s("code",[t._v("Stations")]),t._v(" class. Optionally, filters can be specified using constructor arguments.")]),t._v(" "),s("h3",{attrs:{id:"physical-distance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#physical-distance"}},[t._v("#")]),t._v(" Physical Distance")]),t._v(" "),s("p",[t._v("In most cases you will probably want to select a weather station which is located closest to a certain geo location. Doing so is pretty straight-forward:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Import Stations class from Meteostat package")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Stations\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Filter by physical distance")]),t._v("\nstations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lon "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Select one weather station and translate to Python dictionary")]),t._v("\nstation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("limit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'records'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print English name of weather station")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("station"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("lat")]),t._v(" and "),s("code",[t._v("lon")]),t._v(" are used for specifying latitude and longitude, respectively. Keep in mind that the "),s("code",[t._v("fetch()")]),t._v(" method "),s("strong",[t._v("returns a Pandas DataFrame")]),t._v(". In most cases it makes sense to specify a "),s("code",[t._v("limit")]),t._v(" when fetching weather stations.")]),t._v(" "),s("h3",{attrs:{id:"country-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#country-state"}},[t._v("#")]),t._v(" Country & State")]),t._v(" "),s("p",[t._v("Especially when calculating regional averages it makes sense to filter for administrative regions. Meteostat provides "),s("code",[t._v("country")]),t._v(" ("),s("em",[t._v("ISO 3166-1 alpha-2")]),t._v(" code) and "),s("code",[t._v("region")]),t._v(" ("),s("em",[t._v("ISO-3166-2")]),t._v(" code) filters. Let's pretend you want the total number of weather stations in Ontario, Canada:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Import Stations class from Meteostat package")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Stations\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Filter by country and region")]),t._v("\nstations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("country "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" region "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ON'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print number of stations in Ontario")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Stations in Ontario: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"bounding-box"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bounding-box"}},[t._v("#")]),t._v(" Bounding Box")]),t._v(" "),s("p",[t._v("Some cases may require the selection of all weather stations in a geographic bounding box using the "),s("code",[t._v("bounds")]),t._v(" argument:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Import Stations class from Meteostat package")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Stations\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get number of stations in southern hemisphere")]),t._v("\nstations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bounds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print number of stations in southern hemisphere")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Stations in southern hemisphere: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("bounds")]),t._v(" filter requires a list of four numbers in the following order:")]),t._v(" "),s("ul",[s("li",[t._v("The top left latitude")]),t._v(" "),s("li",[t._v("The top left longitude")]),t._v(" "),s("li",[t._v("The bottom right latitude")]),t._v(" "),s("li",[t._v("The bottom right longitude")])]),t._v(" "),s("h3",{attrs:{id:"identifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#identifier"}},[t._v("#")]),t._v(" Identifier")]),t._v(" "),s("p",[t._v("If you already know the Meteostat, WMO or ICAO ID of a weather station, you can query corresponding meta data directly:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Import Stations class from Meteostat package")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Stations\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get number of stations in southern hemisphere")]),t._v("\nstations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10637'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Fetch weather station and translate to Python dictionary")]),t._v("\nstation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'records'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print English name of weather station 10637")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("station"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Alternatively, you can also pass a list of identifiers to the "),s("code",[t._v("id")]),t._v(", "),s("code",[t._v("wmo")]),t._v(" and "),s("code",[t._v("icao")]),t._v(" parameter.")]),t._v(" "),s("h2",{attrs:{id:"filter-by-data-inventory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter-by-data-inventory"}},[t._v("#")]),t._v(" Filter by Data Inventory")]),t._v(" "),s("p",[t._v("In most cases a "),s("code",[t._v("Stations")]),t._v(" query is followed by either a call to the "),s("code",[t._v("Daily")]),t._v(" or "),s("code",[t._v("Hourly")]),t._v(" class. In this case you will probably want to check first if the weather station(s) you are selecting did report any data in the time you are looking for. You can do so by passing a "),s("code",[t._v("daily")]),t._v(" or "),s("code",[t._v("hourly")]),t._v(" attribute to the "),s("code",[t._v("Stations")]),t._v(" class that specifies a "),s("code",[t._v("datetime")]),t._v(" which has to be present in the data inventory.")]),t._v(" "),s("p",[s("strong",[t._v("Important:")]),t._v(" The inventory is based on a start and end date for both daily and hourly data. There are most certainly gaps in the time series which won't be considered by the inventory filters.")]),t._v(" "),s("p",[t._v("Let's take the physical distance example and apply a daily inventory filter:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Import dependencies")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" meteostat "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Stations\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Filter by physical distance and daily data inventory")]),t._v("\nstations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lon "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" daily "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Select one weather station and translate to Python dictionary")]),t._v("\nstation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("limit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'records'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print English name of weather station")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("station"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"fetching-weather-stations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetching-weather-stations"}},[t._v("#")]),t._v(" Fetching Weather Stations")]),t._v(" "),s("p",[t._v("Meteostat provides multiple methods for fetching weather stations. After you have specified a query through the "),s("code",[t._v("Stations")]),t._v(" class you can now either fetch a list of all stations in the result or get the total.")]),t._v(" "),s("h3",{attrs:{id:"fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" Fetch")]),t._v(" "),s("p",[t._v("After you have specified a query through the "),s("code",[t._v("Stations")]),t._v(" class you can now access the result using the "),s("code",[t._v("fetch()")]),t._v(" method. It takes an optional "),s("code",[t._v("limit")]),t._v(" argument. If no "),s("code",[t._v("limit")]),t._v(" is specified, Meteostat will return all weather stations which meet the criteria. The weather stations are returned as a Pandas DataFrame.")]),t._v(" "),s("h3",{attrs:{id:"sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample"}},[t._v("#")]),t._v(" Sample")]),t._v(" "),s("p",[t._v("Similarly to "),s("code",[t._v("fetch()")]),t._v(", the "),s("code",[t._v("sample()")]),t._v(" method returns a Pandas DataFrame of all weather stations in the query result. However, the default "),s("code",[t._v("limit")]),t._v(" is set to "),s("code",[t._v("1")]),t._v(". The method returns weather stations in random order. It is useful for performing analysis of larger areas on a sample set of weather stations which represent the whole area.")]),t._v(" "),s("h3",{attrs:{id:"count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count"}},[t._v("#")]),t._v(" Count")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("count()")]),t._v(" method returns the total number of weather stations in the query result as an integer.")]),t._v(" "),s("h2",{attrs:{id:"data-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),s("p",[t._v("Each weather station is represented by a Pandas DataFrame row which provides meta information about the station. These are the different columns:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id")]),t._v(": The Meteostat ID of the weather station")]),t._v(" "),s("li",[s("code",[t._v("name")]),t._v(": The English name of the weather station")]),t._v(" "),s("li",[s("code",[t._v("country")]),t._v(": The ISO 3166-1 alpha-2 country code of the weather station")]),t._v(" "),s("li",[s("code",[t._v("region")]),t._v(": The ISO 3166-2 state or region code of the weather station")]),t._v(" "),s("li",[s("code",[t._v("wmo")]),t._v(": The WMO ID of the weather station")]),t._v(" "),s("li",[s("code",[t._v("icao")]),t._v(": The ICAO ID of the weather station")]),t._v(" "),s("li",[s("code",[t._v("iata")]),t._v(": The IATA ID of the weather station")]),t._v(" "),s("li",[s("code",[t._v("latitude")]),t._v(": The latitude of the weather station")]),t._v(" "),s("li",[s("code",[t._v("longitude")]),t._v(": The longitude of the weather station")]),t._v(" "),s("li",[s("code",[t._v("elevation")]),t._v(": The elevation of the weather station in meters above sea level")]),t._v(" "),s("li",[s("code",[t._v("timezone")]),t._v(": The time zone of the weather station")]),t._v(" "),s("li",[s("code",[t._v("hourly_start")]),t._v(": The first day on record for hourly data")]),t._v(" "),s("li",[s("code",[t._v("hourly_end")]),t._v(": The last day on record for hourly data")]),t._v(" "),s("li",[s("code",[t._v("daily_start")]),t._v(": The first day on record for daily data")]),t._v(" "),s("li",[s("code",[t._v("daily_end")]),t._v(": The last day on record for daily data")])])])}),[],!1,null,null,null);a.default=n.exports}}]);