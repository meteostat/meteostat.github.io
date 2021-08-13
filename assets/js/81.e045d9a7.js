(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{437:function(e,t,a){"use strict";a.r(t);var s=a(45),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-quality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-quality"}},[e._v("#")]),e._v(" Data Quality")]),e._v(" "),a("p",[e._v("When working with weather and climate data it is important to know which quality standards are used by the providers and weather station operators. While some things are standardized, others are handled differently across the involved organizations.")]),e._v(" "),a("h2",{attrs:{id:"instruments-measurements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instruments-measurements"}},[e._v("#")]),e._v(" Instruments & Measurements")]),e._v(" "),a("p",[e._v("Meteostat cannot always tell for sure which quality standards were used in each and every step of the process. That is because Meteostat does not operate weather stations itself. Therefore, we cannot tell which instruments are used to measure meteorological parameters at the different weather stations. You can think of Meteostat as a "),a("em",[e._v('"Google for meteorological data"')]),e._v(". We collect and redistribute data which was observed by national weather services across the world. Similarly to Google, which is not responsible for the content of all the websites it links to, we can take certain actions to ensure the quality of our information, but in the end we rely on the QA processes of the national weather services which gather and provide data.")]),e._v(" "),a("p",[e._v("All weather stations available through Meteostat "),a("strong",[e._v("follow the international WMO standards")]),e._v(". If you want to learn more about the standards of a national weather service, please reach out to them directly.")]),e._v(" "),a("h2",{attrs:{id:"observations-vs-model-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observations-vs-model-data"}},[e._v("#")]),e._v(" Observations vs. Model Data")]),e._v(" "),a("p",[e._v("When using any Meteostat product, you will see a mix of real observations and model data by default. Weather models are generally used to provide analysis and forecasts for any geographical location. While the spatial resolution is a huge advantage of model data, it cannot compete with real observations. Especially, when it comes to local precipitation events and thunderstorms. As Meteostat's main focus is a good user experience, we show you all available data by default.")]),e._v(" "),a("p",[e._v("If you only want to work with observation data, Meteostat always allows you to opt-out of model data. Please read the respective interface documentation for more information.")]),e._v(" "),a("h2",{attrs:{id:"observation-quality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observation-quality"}},[e._v("#")]),e._v(" Observation Quality")]),e._v(" "),a("p",[e._v("Meteostat uses different sources for weather observations. If available, we show the official observations published by the national weather service of the respective country. Alternatively, we will utilize international historical databases. Next in line are synoptic observations and METAR reports. Only if all these sources fail to provide data, Meteostat will fall back to model data.")]),e._v(" "),a("p",[e._v("All of these interfaces use different formats, units and standards. For example, the measurements of METAR reports are typically rounded to full integer values. Therefore, it might well be that two datasets are based on the same observation, but differ mathematically.")]),e._v(" "),a("h2",{attrs:{id:"aggregation-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregation-methods"}},[e._v("#")]),e._v(" Aggregation Methods")]),e._v(" "),a("p",[e._v("Another common source of confusion are aggregation methods. Is the average temperature of the day the true average, mean or median? Which time zone is used to calculate the averages? Which observation frequency is used as raw data for aggregations?")]),e._v(" "),a("p",[e._v("That is where things get complicated. Some weather services base daily averages on certain points of time throughout the day. Others use continuous time series with a frequency of five minutes. For our own daily aggregations we strictly use 24 hourly data points.")]),e._v(" "),a("p",[e._v("It is a fact: we do not always know for sure which method was used by a data provider. Therefore, please consider carefully which degree of accuracy you need for your use case. Never trust data blindly - no matter where it comes from!")]),e._v(" "),a("h2",{attrs:{id:"wrap-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap Up")]),e._v(" "),a("p",[e._v("Most data provided by Meteostat can be considered accurate. It is coming from official weather services around the world and follows high standards. However, you will probably encounter small inconsistencies from time to time when working with Meteostat data. For most use cases, these inconsistencies do not matter. If you are doing predictive analytics in a sales unit, it probably does not matter if a day's average temperature was 23.3 °C or 23.4 °C. But especially scientific use cases sometimes require super-accurate data. In such cases, you should probably perform additional quality checks.")]),e._v(" "),a("p",[e._v("As you can see, the truth is sometimes relative. Therefore, in case of doubt please keep it like Winston Churchill:")]),e._v(" "),a("blockquote",[a("p",[e._v("The only statistics you can trust are those you falsified yourself.")])]),e._v(" "),a("p",[e._v("By the way: You can help Meteostat improve its data quality by making a "),a("a",{attrs:{href:"/contributing"}},[e._v("contribution")]),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);