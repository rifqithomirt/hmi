(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(n,e,t){"use strict";(function(n){t(16);e.a=function(e){var t=e.$axios;t.setBaseURL(n.env.API_BASE_URL+"/"+n.env.API_PREFIX),t.interceptors.response.use((function(n){return console.log(n),n}),(function(n){var e=n.response;return console.log(e),Promise.reject(n)}))}}).call(this,t(102))},135:function(n,e){},136:function(n,e,t){"use strict";var o=t(2),r=t(193),c=t.n(r);o.default.use(c.a)},137:function(n,e){},177:function(n,e,t){var content=t(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(51).default)("1239d49d",content,!0,{sourceMap:!1})},196:function(n,e,t){"use strict";t(235);var o=t(64),component=Object(o.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},197:function(n,e,t){t(198),t(199),n.exports=t(201)},231:function(n,e,t){var content=t(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(51).default)("54037e9e",content,!0,{sourceMap:!1})},232:function(n,e,t){var o=t(50)((function(i){return i[1]}));o.push([n.i,"/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.tw-space-y-1 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(0.25rem * var(--tw-space-y-reverse));\n}\n\n.tw-space-x-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.tw-bg-gray-200{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.hover\\:tw-bg-gray-200:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.hover\\:tw-bg-gray-300:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n\n.tw-rounded-sm{\n  border-radius:0.125rem;\n}\n\n.tw-cursor-pointer{\n  cursor:pointer;\n}\n\n.tw-inline-block{\n  display:inline-block;\n}\n\n.tw-flex{\n  display:flex;\n}\n\n.tw-flex-row{\n  flex-direction:row;\n}\n\n.tw-flex-1{\n  flex:1 1 0%;\n}\n\n.tw-text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.tw-text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.tw-text-4xl{\n  font-size:2.25rem;\n  line-height:2.5rem;\n}\n\n.tw-list-disc{\n  list-style-type:disc;\n}\n\n.tw-mx-1{\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n}\n\n.tw-mt-1{\n  margin-top:0.25rem;\n}\n\n.tw-mt-4{\n  margin-top:1rem;\n}\n\n.tw-ml-4{\n  margin-left:1rem;\n}\n\n.tw-p-1{\n  padding:0.25rem;\n}\n\n.tw-relative{\n  position:relative;\n}\n\n*{\n  --tw-shadow:0 0 #0000;\n}\n\n*{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.tw-table-auto{\n  table-layout:auto;\n}\n\n.tw-text-left{\n  text-align:left;\n}\n\n.tw-text-center{\n  text-align:center;\n}\n\n.tw-text-right{\n  text-align:right;\n}\n\n.tw-text-gray-200{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity));\n}\n\n.tw-text-gray-800{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.tw-text-red-400{\n  --tw-text-opacity:1;\n  color:rgba(248, 113, 113, var(--tw-text-opacity));\n}\n\n.tw-text-blue-500{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.hover\\:tw-text-gray-800:hover{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.hover\\:tw-text-blue-400:hover{\n  --tw-text-opacity:1;\n  color:rgba(96, 165, 250, var(--tw-text-opacity));\n}\n\n.tw-w-1\\/2{\n  width:50%;\n}\n\n.tw-w-full{\n  width:100%;\n}\n\n.tw-z-20{\n  z-index:20;\n}\n\n@-webkit-keyframes tw-spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes tw-spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes tw-ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes tw-ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes tw-pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes tw-pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes tw-bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes tw-bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}",""]),o.locals={},n.exports=o},233:function(n,e,t){var content=t(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(51).default)("54c2559c",content,!0,{sourceMap:!1})},234:function(n,e,t){var o=t(50)((function(i){return i[1]}));o.push([n.i,'body{\n  background:#3254b8;\n  background:radial-gradient(circle,#3254b8 0,#4e5fc9 29%,#4876da 81%,#3587ff 100%)\n}\n\n.btn-overlay{\n  position:fixed;\n  top:0;\n  left:0\n}\n\n.page{\n  display:flex;\n  flex-direction:column;\n  height:100vh;\n  width:100vw;\n  overflow:hidden\n}\n\n.navbar{\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 64, 175, var(--tw-bg-opacity));\n  display:flex;\n  justify-content:space-between;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  padding-left:1rem;\n  padding-right:1rem;\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  text-align:center;\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n  width:100%\n}\n\n.navbar>.header, .navbar>.page-title{\n  align-self:center;\n  font-weight:600;\n  font-size:1.25rem;\n  line-height:1.75rem;\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity))\n}\n\n.screen{\n  width:100vw;\n  height:100vh;\n  max-height:100vh;\n  max-width:100vw;\n  overflow:hidden;\n  display:flex;\n  justify-content:center;\n  flex-direction:column\n}\n\nbody .obj-container{\n  margin:0 auto;\n  display:inline-block;\n  position:relative;\n  max-width:80%;\n  overflow:hidden\n}\n\nbody .obj-container img.overview{\n  width:100%\n}\n\nbody .obj-container>.layer-components{\n  position:absolute;\n  top:0;\n  display:block;\n  width:100%;\n  height:100%\n}\n\nbody .obj-container>.layer-components>.components>.component{\n  position:absolute;\n  z-index:10\n}\n\nbody .obj-container>.layer-components>.panels>.panel{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n  border-width:1px;\n  background:rgba(0,0,0,.8);\n  display:inline-block;\n  position:absolute;\n  z-index:12;\n  width:60px;\n  max-width:60px;\n  border-top-left-radius:5px;\n  border-bottom-left-radius:5px;\n  border-bottom-right-radius:5px\n}\n\nbody .obj-container>.layer-components>.panels>.panel:hover{\n  z-index:30\n}\n\nbody .obj-container>.layer-components>.panels>.panel>.panel-container>.header{\n  --tw-bg-opacity:1;\n  background-color:rgba(251, 191, 36, var(--tw-bg-opacity));\n  font-weight:600;\n  font-size:0.75rem;\n  line-height:1rem;\n  text-align:center;\n  --tw-text-opacity:1;\n  color:rgba(55, 48, 163, var(--tw-text-opacity));\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  text-overflow:ellipsis;\n  font-size:8px;\n  width:100%;\n  border-top-left-radius:5px\n}\n\nbody .obj-container>.layer-components>.panels>.panel>.panel-container>.content{\n  font-size:0.75rem;\n  line-height:1rem;\n  text-align:center;\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n  position:relative;\n  overflow:hidden;\n  padding:.1rem .2rem;\n  font-size:7px\n}\n\nbody .obj-container>.layer-components>.panels>.panel>.panel-container>.content>div{\n  line-height:1.2\n}\n\nbody .obj-container>.layer-components>.panels>.panel>.panel-container:after{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n  content:" ";\n  display:block;\n  position:absolute;\n  width:40px;\n  height:1px;\n  top:-1px;\n  right:-40px\n}\n\nbody .obj-container>.layer-components>.panels>.panel.right,body .obj-container>.layer-components>.panels>.panel.right>.panel-container>.header{\n  border-top-left-radius:0;\n  border-top-right-radius:5px\n}\n\nbody .obj-container>.layer-components>.panels>.panel.right>.panel-container:after{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n  content:" ";\n  display:block;\n  position:absolute;\n  width:30px;\n  height:1px;\n  top:-1px;\n  left:-30px\n}\n\nbody .obj-container>.layer-components>.panels>.panel.panel-level{\n  border-top-right-radius:5px;\n  overflow:hidden;\n  padding:2px;\n  width:auto;\n  position:relative;\n  color:#f3f4f6;\n  border-color:rgba(243,244,246,.7)\n}\n\nbody .obj-container>.layer-components>.panels>.panel.panel-level .percentage{\n  margin:0 auto;\n  padding-left:1px;\n  font-size:6px\n}\n\nbody .obj-container>.layer-components>.panels>.panel.panel-level .panel-container{\n  display:flex;\n  flex-direction:column;\n  font-size:8px;\n  text-align:center\n}\n\nbody .obj-container>.layer-components>.panels>.panel.panel-level .progress{\n  background:#e5e7eb;\n  height:40px;\n  width:9px;\n  position:relative;\n  overflow:hidden;\n  border:1px solid #fff;\n  margin:0 auto;\n  border-top-left-radius:2px;\n  border-bottom-left-radius:2px;\n  border-bottom-right-radius:2px;\n  border-top-right-radius:2px\n}\n\nbody .obj-container>.layer-components>.panels>.panel.panel-level .progress>.progress-bar{\n  position:absolute;\n  bottom:0;\n  left:0;\n  width:100%;\n  background:#f59e0b\n}\n\n.controls{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  z-index:20;\n  position:absolute;\n  top:0;\n  display:block;\n  width:200px;\n  margin:.4rem;\n  background:rgba(0,0,0,.8);\n  border:1px solid #f3f4f6\n}\n\n.controls.lg{\n  width:300px\n}\n\n.controls.left{\n  left:0\n}\n\n.controls.right{\n  right:0\n}\n\n.controls.bottom{\n  top:auto;\n  bottom:0\n}\n\n.controls.danger{\n  border:1px solid #f87171\n}\n\n.controls.danger .controls-container>.group>*{\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n\n.controls.danger .controls-container>.group>.header{\n  border-top:1px solid #f87171;\n  border-bottom:2px solid #dc2626\n}\n\n.controls .controls-container{\n  position:relative\n}\n\n.controls .controls-container>.group>*{\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n\n.controls .controls-container>.group>.header{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n  border-bottom:2px solid #2563eb;\n  border-top:1px solid #f3f4f6;\n  padding:.2rem .8rem;\n  cursor:pointer\n}\n\n.controls .controls-container>.group>.content{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n  padding:.4rem .8rem\n}\n\n.controls .controls-container>.toggle{\n  cursor:pointer;\n  font-size:0.75rem;\n  line-height:1rem;\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n  background:rgba(0,0,0,.8);\n  border:1px solid #e5e7eb;\n  color:#e5e7eb;\n  display:inline-block;\n  position:absolute;\n  right:0;\n  top:0;\n  height:25px;\n  transform:rotate(-90deg) translate(-26px,52px)\n}\n\n.screen .menu{\n  z-index:20;\n  position:fixed;\n  bottom:0;\n  left:0;\n  right:0;\n  display:flex;\n  justify-content:center\n}\n\n.footer{\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 64, 175, var(--tw-bg-opacity));\n  display:flex;\n  justify-content:space-between;\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  text-align:center;\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n  width:100%;\n  z-index:21;\n  min-height:87px;\n  max-height:87px\n}\n\n.footer>.footer-container{\n  align-self:center;\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n  width:100%\n}\n\n.footer>.footer-container>.menu-container{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  padding-left:1rem;\n  padding-right:1rem;\n  max-width:100%;\n  display:flex;\n  justify-content:center\n}\n\n.footer>.footer-container>.menu-container>.header{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n  border-radius:0.125rem;\n  display:inline-block;\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n  border:1px solid #f3f4f6;\n  border-bottom:3px solid #2563eb;\n  padding:.2rem .4rem\n}\n\n.footer>.footer-container>.menu-container>.content > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))\n}\n\n.footer>.footer-container>.menu-container>.content{\n  padding:.2rem;\n  max-width:100%;\n  overflow-x:auto\n}\n\n.footer>.footer-container>.menu-container>.content>div > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(2rem * var(--tw-space-x-reverse));\n  margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n  --tw-divide-x-reverse:0;\n  border-right-width:calc(1px * var(--tw-divide-x-reverse));\n  border-left-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n  --tw-divide-opacity:1;\n  border-color:rgba(59, 130, 246, var(--tw-divide-opacity))\n}\n\n.footer>.footer-container>.menu-container>.content>div{\n  display:flex;\n  flex-direction:row\n}\n\n.footer>.footer-container>.menu-container>.content .group{\n  display:flex;\n  flex-direction:column;\n  padding-bottom:0.25rem;\n  padding-left:2rem;\n  display:inline-block\n}\n\n.footer>.footer-container>.menu-container>.content .group>.group-title{\n  font-size:0.75rem;\n  line-height:1rem;\n  margin-bottom:0.25rem;\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n  text-align:left\n}\n\n.footer>.footer-container>.menu-container>.content .group>.group-content > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))\n}\n\n.footer>.footer-container>.menu-container>.content .group>.group-content{\n  display:flex;\n  flex-direction:row;\n  justify-content:flex-start;\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n  text-align:left\n}\n\n.footer>.footer-container>.menu-container>.content .group:first-child{\n  padding-left:0px\n}\n\n.footer>.footer-container>.menu-container>.content .display{\n  display:flex;\n  flex-direction:column\n}\n\n.footer>.footer-container>.menu-container>.content .display>.display_text{\n  font-size:10px\n}\n\n.footer>.footer-container>.menu-container>.content button{\n  --tw-bg-opacity:1;\n  background-color:rgba(96, 165, 250, var(--tw-bg-opacity))\n}\n\n.footer>.footer-container>.menu-container>.content button:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(37, 99, 235, var(--tw-bg-opacity))\n}\n\n.footer>.footer-container>.menu-container>.content button{\n  border-radius:0.25rem;\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n  padding:.8rem .4rem\n}\n\n.footer>.footer-container>.menu-container>.content button.icon{\n  padding:.8rem\n}\n\n.footer>.footer-container>.menu-container>.content button.fixed{\n  width:60px\n}\n\n.footer>.footer-container>.menu-container>.content button.green{\n  --tw-bg-opacity:1;\n  background-color:rgba(52, 211, 153, var(--tw-bg-opacity))\n}\n\n.footer>.footer-container>.menu-container>.content button.red{\n  --tw-bg-opacity:1;\n  background-color:rgba(248, 113, 113, var(--tw-bg-opacity))\n}\n\n.footer>.footer-container>.menu-container>.content button:disabled{\n  --tw-bg-opacity:1;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity));\n  cursor:not-allowed\n}\n\n.footer>.footer-container>.menu-container>.content .badge-box{\n  display:inline-block;\n  content:"";\n  width:8px;\n  height:8px;\n  border:1px solid #fff\n}\n\n.footer>.footer-container>.menu-container>.content .badge-box.red{\n  background:red\n}\n\n.footer>.footer-container>.nav-container > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n  --tw-divide-x-reverse:0;\n  border-right-width:calc(1px * var(--tw-divide-x-reverse));\n  border-left-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n  --tw-divide-opacity:1;\n  border-color:rgba(59, 130, 246, var(--tw-divide-opacity))\n}\n\n.footer>.footer-container>.nav-container{\n  display:flex;\n  flex-direction:row;\n  justify-content:center\n}\n\n.footer>.footer-container>.nav-container>.item{\n  width:87px\n}\n\n.footer>.footer-container>.nav-container>.item>.item-content{\n  margin-left:0.25rem\n}\n\n.footer>.footer-container>.nav-container>.item>.item-content:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(29, 78, 216, var(--tw-bg-opacity))\n}\n\n.footer>.footer-container>.nav-container>.item>.item-content{\n  cursor:pointer;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-duration:150ms\n}\n\n.footer>.footer-container>.nav-container>.item>.item-content>.item-icon{\n  font-size:1.875rem;\n  line-height:2.25rem;\n  margin-bottom:0.25rem\n}\n\n.footer>.footer-container>.nav-container>.item>.item-content>.item-text{\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n.footer>.footer-container>.nav-container>.item:first-child>.item-content{\n  margin-left:0px\n}',""]),o.locals={},n.exports=o},235:function(n,e,t){"use strict";t(177)},236:function(n,e,t){var o=t(50)((function(i){return i[1]}));o.push([n.i,'html{\n  font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  font-size:16px;\n  word-spacing:1px;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box\n}\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}\n.button--green{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #3b8070;\n  color:#3b8070;\n  text-decoration:none;\n  padding:10px 30px\n}\n.button--green:hover{\n  color:#fff;\n  background-color:#3b8070\n}\n.button--grey{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #35495e;\n  color:#35495e;\n  text-decoration:none;\n  padding:10px 30px;\n  margin-left:15px\n}\n.button--grey:hover{\n  color:#fff;\n  background-color:#35495e\n}',""]),o.locals={},n.exports=o}},[[197,5,1,6]]]);