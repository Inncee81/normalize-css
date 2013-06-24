module.exports = '/*! normalize.css 2012-03-11T12:53 UTC - http://github.com/necolas/normalize.css */\n\n/* =============================================================================\n   HTML5 display definitions\n   ========================================================================== */\n\n/*\n * Corrects block display not defined in IE6/7/8/9 & FF3\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/*\n * Corrects inline-block display not defined in IE6/7/8/9 & FF3\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n}\n\n/*\n * Prevents modern browsers from displaying \'audio\' without controls\n * Remove excess height in iOS5 devices\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/*\n * Addresses styling for \'hidden\' attribute not present in IE7/8/9, FF3, S4\n * Known issue: no IE6 support\n */\n\n[hidden] {\n    display: none;\n}\n\n\n/* =============================================================================\n   Base\n   ========================================================================== */\n\n/*\n * 1. Corrects text resizing oddly in IE6/7 when body font-size is set using em units\n *    http://clagnut.com/blog/348/#c790\n * 2. Prevents iOS text size adjust after orientation change, without disabling user zoom\n *    www.456bereastreet.com/archive/201012/controlling_text_size_in_safari_for_ios_without_disabling_user_zoom/\n */\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n/*\n * Addresses font-family inconsistency between \'textarea\' and other form elements.\n */\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: sans-serif;\n}\n\n/*\n * Addresses margins handled incorrectly in IE6/7\n */\n\nbody {\n    margin: 0;\n}\n\n\n/* =============================================================================\n   Links\n   ========================================================================== */\n\n/*\n * Addresses outline displayed oddly in Chrome\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/*\n * Improves readability when focused and also mouse hovered in all browsers\n * people.opera.com/patrickl/experiments/keyboard/test\n */\n\na:hover,\na:active {\n    outline: 0;\n}\n\n\n/* =============================================================================\n   Typography\n   ========================================================================== */\n\n/*\n * Addresses font sizes and margins set differently in IE6/7\n * Addresses font sizes within \'section\' and \'article\' in FF4+, Chrome, S5\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\nh2 {\n    font-size: 1.5em;\n    margin: 0.83em 0;\n}\n\nh3 {\n    font-size: 1.17em;\n    margin: 1em 0;\n}\n\nh4 {\n    font-size: 1em;\n    margin: 1.33em 0;\n}\n\nh5 {\n    font-size: 0.83em;\n    margin: 1.67em 0;\n}\n\nh6 {\n    font-size: 0.75em;\n    margin: 2.33em 0;\n}\n\n/*\n * Addresses styling not present in IE7/8/9, S5, Chrome\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/*\n * Addresses style set to \'bolder\' in FF3+, S4/5, Chrome\n*/\n\nb,\nstrong {\n    font-weight: bold;\n}\n\nblockquote {\n    margin: 1em 40px;\n}\n\n/*\n * Addresses styling not present in S5, Chrome\n */\n\ndfn {\n    font-style: italic;\n}\n\n/*\n * Addresses styling not present in IE6/7/8/9\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/*\n * Addresses margins set differently in IE6/7\n */\n\np,\npre {\n    margin: 1em 0;\n}\n\n/*\n * Corrects font family set oddly in IE6, S4/5, Chrome\n * en.wikipedia.org/wiki/User:Davidgothberg/Test59\n */\n\npre,\ncode,\nkbd,\nsamp {\n    font-family: monospace, serif;\n    _font-family: \'courier new\', monospace;\n    font-size: 1em;\n}\n\n/*\n * Improves readability of pre-formatted text in all browsers\n */\n\npre {\n    white-space: pre;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n}\n\n/*\n * 1. Addresses CSS quotes not supported in IE6/7\n * 2. Addresses quote property not supported in S4\n */\n\n/* 1 */\n\nq {\n    quotes: none;\n}\n\n/* 2 */\n\nq:before,\nq:after {\n    content: \'\';\n    content: none;\n}\n\nsmall {\n    font-size: 75%;\n}\n\n/*\n * Prevents sub and sup affecting line-height in all browsers\n * gist.github.com/413930\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n\n/* =============================================================================\n   Lists\n   ========================================================================== */\n\n/*\n * Addresses margins set differently in IE6/7\n */\n\ndl,\nmenu,\nol,\nul {\n    margin: 1em 0;\n}\n\ndd {\n    margin: 0 0 0 40px;\n}\n\n/*\n * Addresses paddings set differently in IE6/7\n */\n\nmenu,\nol,\nul {\n    padding: 0 0 0 40px;\n}\n\n/*\n * Corrects list images handled incorrectly in IE7\n */\n\nnav ul,\nnav ol {\n    list-style: none;\n    list-style-image: none;\n}\n\n\n/* =============================================================================\n   Embedded content\n   ========================================================================== */\n\n/*\n * 1. Removes border when inside \'a\' element in IE6/7/8/9, FF3\n * 2. Improves image quality when scaled in IE7\n *    code.flickr.com/blog/2008/11/12/on-ui-quality-the-little-things-client-side-image-resizing/\n */\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n/*\n * Corrects overflow displayed oddly in IE9\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n\n/* =============================================================================\n   Figures\n   ========================================================================== */\n\n/*\n * Addresses margin not present in IE6/7/8/9, S5, O11\n */\n\nfigure {\n    margin: 0;\n}\n\n\n/* =============================================================================\n   Forms\n   ========================================================================== */\n\n/*\n * Corrects margin displayed oddly in IE6/7\n */\n\nform {\n    margin: 0;\n}\n\n/*\n * Define consistent border, margin, and padding\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/*\n * 1. Corrects color not being inherited in IE6/7/8/9\n * 2. Corrects text not wrapping in FF3\n * 3. Corrects alignment displayed oddly in IE6/7\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n/*\n * 1. Corrects font size not being inherited in all browsers\n * 2. Addresses margins set differently in IE6/7, FF3+, S5, Chrome\n * 3. Improves appearance and consistency in all browsers\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n/*\n * Addresses FF3/4 setting line-height on \'input\' using !important in the UA stylesheet\n */\n\nbutton,\ninput {\n    line-height: normal; /* 1 */\n}\n\n/*\n * 1. Improves usability and consistency of cursor style between image-type \'input\' and others\n * 2. Corrects inability to style clickable \'input\' types in iOS\n * 3. Removes inner spacing in IE7 without affecting normal text inputs\n *    Known issue: inner spacing remains in IE6\n */\n\nbutton,\ninput[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n    cursor: pointer; /* 1 */\n    -webkit-appearance: button; /* 2 */\n    *overflow: visible;  /* 3 */\n}\n\n/*\n * Re-set default cursor for disabled elements\n */\n\nbutton[disabled],\ninput[disabled] {\n    cursor: default;\n}\n\n/*\n * 1. Addresses box sizing set to content-box in IE8/9\n * 2. Removes excess padding in IE8/9\n * 3. Removes excess padding in IE7\n      Known issue: excess padding remains in IE6\n */\n\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n/*\n * 1. Addresses appearance set to searchfield in S5, Chrome\n * 2. Addresses box-sizing set to border-box in S5, Chrome (include -moz to future-proof)\n */\n\ninput[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/*\n * Removes inner padding and search cancel button in S5, Chrome on OS X\n */\n\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n/*\n * Removes inner padding and border in FF3+\n * www.sitepen.com/blog/2008/05/14/the-devils-in-the-details-fixing-dojos-toolbar-buttons/\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/*\n * 1. Removes default vertical scrollbar in IE6/7/8/9\n * 2. Improves readability and alignment in all browsers\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n\n/* =============================================================================\n   Tables\n   ========================================================================== */\n\n/*\n * Remove most spacing between table cells\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n';