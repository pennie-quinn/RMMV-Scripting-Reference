Ext.data.JsonP.TouchInput({"tagname":"class","name":"TouchInput","autodetected":{},"files":[{"filename":"rpg_core.js","href":"rpg_core.html#TouchInput"}],"members":[{"name":"date","tagname":"property","owner":"TouchInput","id":"static-property-date","meta":{"readonly":true,"static":true}},{"name":"keyRepeatInterval","tagname":"property","owner":"TouchInput","id":"static-property-keyRepeatInterval","meta":{"static":true}},{"name":"keyRepeatWait","tagname":"property","owner":"TouchInput","id":"static-property-keyRepeatWait","meta":{"static":true}},{"name":"wheelX","tagname":"property","owner":"TouchInput","id":"static-property-wheelX","meta":{"readonly":true,"static":true}},{"name":"wheelY","tagname":"property","owner":"TouchInput","id":"static-property-wheelY","meta":{"readonly":true,"static":true}},{"name":"x","tagname":"property","owner":"TouchInput","id":"static-property-x","meta":{"readonly":true,"static":true}},{"name":"y","tagname":"property","owner":"TouchInput","id":"static-property-y","meta":{"readonly":true,"static":true}},{"name":"_onCancel","tagname":"method","owner":"TouchInput","id":"static-method-_onCancel","meta":{"private":true,"static":true}},{"name":"_onLeftButtonDown","tagname":"method","owner":"TouchInput","id":"static-method-_onLeftButtonDown","meta":{"private":true,"static":true}},{"name":"_onMiddleButtonDown","tagname":"method","owner":"TouchInput","id":"static-method-_onMiddleButtonDown","meta":{"private":true,"static":true}},{"name":"_onMouseDown","tagname":"method","owner":"TouchInput","id":"static-method-_onMouseDown","meta":{"private":true,"static":true}},{"name":"_onMouseMove","tagname":"method","owner":"TouchInput","id":"static-method-_onMouseMove","meta":{"private":true,"static":true}},{"name":"_onMouseUp","tagname":"method","owner":"TouchInput","id":"static-method-_onMouseUp","meta":{"private":true,"static":true}},{"name":"_onMove","tagname":"method","owner":"TouchInput","id":"static-method-_onMove","meta":{"private":true,"static":true}},{"name":"_onPointerDown","tagname":"method","owner":"TouchInput","id":"static-method-_onPointerDown","meta":{"private":true,"static":true}},{"name":"_onRelease","tagname":"method","owner":"TouchInput","id":"static-method-_onRelease","meta":{"private":true,"static":true}},{"name":"_onRightButtonDown","tagname":"method","owner":"TouchInput","id":"static-method-_onRightButtonDown","meta":{"private":true,"static":true}},{"name":"_onTouchCancel","tagname":"method","owner":"TouchInput","id":"static-method-_onTouchCancel","meta":{"private":true,"static":true}},{"name":"_onTouchEnd","tagname":"method","owner":"TouchInput","id":"static-method-_onTouchEnd","meta":{"private":true,"static":true}},{"name":"_onTouchMove","tagname":"method","owner":"TouchInput","id":"static-method-_onTouchMove","meta":{"private":true,"static":true}},{"name":"_onTouchStart","tagname":"method","owner":"TouchInput","id":"static-method-_onTouchStart","meta":{"private":true,"static":true}},{"name":"_onTrigger","tagname":"method","owner":"TouchInput","id":"static-method-_onTrigger","meta":{"private":true,"static":true}},{"name":"_onWheel","tagname":"method","owner":"TouchInput","id":"static-method-_onWheel","meta":{"private":true,"static":true}},{"name":"_setupEventHandlers","tagname":"method","owner":"TouchInput","id":"static-method-_setupEventHandlers","meta":{"private":true,"static":true}},{"name":"clear","tagname":"method","owner":"TouchInput","id":"static-method-clear","meta":{"static":true}},{"name":"initialize","tagname":"method","owner":"TouchInput","id":"static-method-initialize","meta":{"static":true}},{"name":"isCancelled","tagname":"method","owner":"TouchInput","id":"static-method-isCancelled","meta":{"static":true}},{"name":"isLongPressed","tagname":"method","owner":"TouchInput","id":"static-method-isLongPressed","meta":{"static":true}},{"name":"isMoved","tagname":"method","owner":"TouchInput","id":"static-method-isMoved","meta":{"static":true}},{"name":"isPressed","tagname":"method","owner":"TouchInput","id":"static-method-isPressed","meta":{"static":true}},{"name":"isReleased","tagname":"method","owner":"TouchInput","id":"static-method-isReleased","meta":{"static":true}},{"name":"isRepeated","tagname":"method","owner":"TouchInput","id":"static-method-isRepeated","meta":{"static":true}},{"name":"isTriggered","tagname":"method","owner":"TouchInput","id":"static-method-isTriggered","meta":{"static":true}},{"name":"update","tagname":"method","owner":"TouchInput","id":"static-method-update","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-TouchInput","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/rpg_core.html#TouchInput' target='_blank'>rpg_core.js</a></div></pre><div class='doc-contents'><p>The static class that handles input data from the mouse and touchscreen.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-date' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-property-date' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-property-date' class='name expandable'>date</a> : Number<span class=\"signature\"><span class='readonly' >readonly</span><span class='static' >static</span></span></div><div class='description'><div class='short'><p>[read-only] The time of the last input in milliseconds.</p>\n</div><div class='long'><p>[read-only] The time of the last input in milliseconds.</p>\n</div></div></div><div id='static-property-keyRepeatInterval' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-property-keyRepeatInterval' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-property-keyRepeatInterval' class='name expandable'>keyRepeatInterval</a> : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The interval of the pseudo key repeat in frames. ...</div><div class='long'><p>The interval of the pseudo key repeat in frames.</p>\n<p>Defaults to: <code>6</code></p></div></div></div><div id='static-property-keyRepeatWait' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-property-keyRepeatWait' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-property-keyRepeatWait' class='name expandable'>keyRepeatWait</a> : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The wait time of the pseudo key repeat in frames. ...</div><div class='long'><p>The wait time of the pseudo key repeat in frames.</p>\n<p>Defaults to: <code>24</code></p></div></div></div><div id='static-property-wheelX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-property-wheelX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-property-wheelX' class='name expandable'>wheelX</a> : Number<span class=\"signature\"><span class='readonly' >readonly</span><span class='static' >static</span></span></div><div class='description'><div class='short'><p>[read-only] The horizontal scroll amount.</p>\n</div><div class='long'><p>[read-only] The horizontal scroll amount.</p>\n</div></div></div><div id='static-property-wheelY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-property-wheelY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-property-wheelY' class='name expandable'>wheelY</a> : Number<span class=\"signature\"><span class='readonly' >readonly</span><span class='static' >static</span></span></div><div class='description'><div class='short'><p>[read-only] The vertical scroll amount.</p>\n</div><div class='long'><p>[read-only] The vertical scroll amount.</p>\n</div></div></div><div id='static-property-x' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-property-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-property-x' class='name expandable'>x</a> : Number<span class=\"signature\"><span class='readonly' >readonly</span><span class='static' >static</span></span></div><div class='description'><div class='short'><p>[read-only] The x coordinate on the canvas area of the latest touch event.</p>\n</div><div class='long'><p>[read-only] The x coordinate on the canvas area of the latest touch event.</p>\n</div></div></div><div id='static-property-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-property-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-property-y' class='name expandable'>y</a> : Number<span class=\"signature\"><span class='readonly' >readonly</span><span class='static' >static</span></span></div><div class='description'><div class='short'><p>[read-only] The y coordinate on the canvas area of the latest touch event.</p>\n</div><div class='long'><p>[read-only] The y coordinate on the canvas area of the latest touch event.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-_onCancel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onCancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onCancel' class='name expandable'>_onCancel</a>( <span class='pre'>x, y</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onLeftButtonDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onLeftButtonDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onLeftButtonDown' class='name expandable'>_onLeftButtonDown</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : MouseEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onMiddleButtonDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onMiddleButtonDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onMiddleButtonDown' class='name expandable'>_onMiddleButtonDown</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : MouseEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onMouseDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onMouseDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onMouseDown' class='name expandable'>_onMouseDown</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : MouseEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onMouseMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onMouseMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onMouseMove' class='name expandable'>_onMouseMove</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : MouseEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onMouseUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onMouseUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onMouseUp' class='name expandable'>_onMouseUp</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : MouseEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onMove' class='name expandable'>_onMove</a>( <span class='pre'>x, y</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onPointerDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onPointerDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onPointerDown' class='name expandable'>_onPointerDown</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : PointerEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onRelease' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onRelease' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onRelease' class='name expandable'>_onRelease</a>( <span class='pre'>x, y</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onRightButtonDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onRightButtonDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onRightButtonDown' class='name expandable'>_onRightButtonDown</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : MouseEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onTouchCancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onTouchCancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onTouchCancel' class='name expandable'>_onTouchCancel</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : TouchEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onTouchEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onTouchEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onTouchEnd' class='name expandable'>_onTouchEnd</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : TouchEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onTouchMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onTouchMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onTouchMove' class='name expandable'>_onTouchMove</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : TouchEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onTouchStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onTouchStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onTouchStart' class='name expandable'>_onTouchStart</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : TouchEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onTrigger' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onTrigger' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onTrigger' class='name expandable'>_onTrigger</a>( <span class='pre'>x, y</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_onWheel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_onWheel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_onWheel' class='name expandable'>_onWheel</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : WheelEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-_setupEventHandlers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-_setupEventHandlers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-_setupEventHandlers' class='name expandable'>_setupEventHandlers</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='static-method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Clears all the touch data. ...</div><div class='long'><p>Clears all the touch data.</p>\n</div></div></div><div id='static-method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Initializes the touch system. ...</div><div class='long'><p>Initializes the touch system.</p>\n</div></div></div><div id='static-method-isCancelled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-isCancelled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-isCancelled' class='name expandable'>isCancelled</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the right mouse button is just pressed. ...</div><div class='long'><p>Checks whether the right mouse button is just pressed.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the right mouse button is just pressed</p>\n</div></li></ul></div></div></div><div id='static-method-isLongPressed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-isLongPressed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-isLongPressed' class='name expandable'>isLongPressed</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the left mouse button or touchscreen is kept depressed. ...</div><div class='long'><p>Checks whether the left mouse button or touchscreen is kept depressed.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the left mouse button or touchscreen is long-pressed</p>\n</div></li></ul></div></div></div><div id='static-method-isMoved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-isMoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-isMoved' class='name expandable'>isMoved</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the mouse or a finger on the touchscreen is moved. ...</div><div class='long'><p>Checks whether the mouse or a finger on the touchscreen is moved.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the mouse or a finger on the touchscreen is moved</p>\n</div></li></ul></div></div></div><div id='static-method-isPressed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-isPressed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-isPressed' class='name expandable'>isPressed</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the mouse button or touchscreen is currently pressed down. ...</div><div class='long'><p>Checks whether the mouse button or touchscreen is currently pressed down.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the mouse button or touchscreen is pressed</p>\n</div></li></ul></div></div></div><div id='static-method-isReleased' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-isReleased' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-isReleased' class='name expandable'>isReleased</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the left mouse button or touchscreen is released. ...</div><div class='long'><p>Checks whether the left mouse button or touchscreen is released.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the mouse button or touchscreen is released</p>\n</div></li></ul></div></div></div><div id='static-method-isRepeated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-isRepeated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-isRepeated' class='name expandable'>isRepeated</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the left mouse button or touchscreen is just pressed\nor a pseudo key repeat occurred. ...</div><div class='long'><p>Checks whether the left mouse button or touchscreen is just pressed\nor a pseudo key repeat occurred.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the mouse button or touchscreen is repeated</p>\n</div></li></ul></div></div></div><div id='static-method-isTriggered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-isTriggered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-isTriggered' class='name expandable'>isTriggered</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the left mouse button or touchscreen is just pressed. ...</div><div class='long'><p>Checks whether the left mouse button or touchscreen is just pressed.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the mouse button or touchscreen is triggered</p>\n</div></li></ul></div></div></div><div id='static-method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TouchInput'>TouchInput</span><br/><a href='source/rpg_core.html#TouchInput-static-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TouchInput-static-method-update' class='name expandable'>update</a>( <span class='pre'></span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Updates the touch data. ...</div><div class='long'><p>Updates the touch data.</p>\n</div></div></div></div></div></div></div>","meta":{}});