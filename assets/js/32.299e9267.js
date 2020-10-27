(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{383:function(e,a,t){"use strict";t.r(a);var o=t(42),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("p",[e._v("The Meteostat Python library provides a few configuration parameters which you can modify on demand. If you want to change the configuration for one of the parameters, simply include it in your queries to the "),t("code",[e._v("Stations")]),e._v(", "),t("code",[e._v("Daily")]),e._v(" or "),t("code",[e._v("Hourly")]),e._v(" class.")]),e._v(" "),t("h2",{attrs:{id:"cache-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-directory"}},[e._v("#")]),e._v(" Cache Directory")]),e._v(" "),t("p",[e._v("The cache directory can be changed using the "),t("code",[e._v("cache_dir")]),e._v(" parameter. By default, Meteostat caches its files in the "),t("code",[e._v("~/.meteostat/cache")]),e._v(" directory.")]),e._v(" "),t("h2",{attrs:{id:"maximum-age-of-cached-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maximum-age-of-cached-files"}},[e._v("#")]),e._v(" Maximum Age of Cached Files")]),e._v(" "),t("p",[e._v("By default, Meteostat uses the cached version of a file for 24 hours. You can adapt this setting by passing any count of seconds to the "),t("code",[e._v("max_age")]),e._v(" parameter. If you want to disable caching, just set the "),t("code",[e._v("max_age")]),e._v(" parameter to "),t("code",[e._v("0")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"maximum-number-of-threads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maximum-number-of-threads"}},[e._v("#")]),e._v(" Maximum Number of Threads")]),e._v(" "),t("p",[e._v("Meteostat uses multiple threads for parallel data downloads. The library utilizes up to five threads by default. You can change this number by modifying the "),t("code",[e._v("max_threads")]),e._v(" parameter.")]),e._v(" "),t("h2",{attrs:{id:"clearing-the-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clearing-the-cache"}},[e._v("#")]),e._v(" Clearing the Cache")]),e._v(" "),t("p",[e._v("If you want to remove outdated files from the cache, you can call the "),t("code",[e._v("clear_cache()")]),e._v(" method on any Meteostat class instance. By default, this method removes files which are older than "),t("code",[e._v("max_age")]),e._v(". You can change the "),t("code",[e._v("max_age")]),e._v(" value in your call to the "),t("code",[e._v("clear_cache()")]),e._v(" method.")])])}),[],!1,null,null,null);a.default=r.exports}}]);