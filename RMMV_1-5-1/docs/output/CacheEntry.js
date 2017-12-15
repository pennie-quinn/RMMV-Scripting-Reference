Ext.data.JsonP.CacheEntry({"tagname":"class","name":"CacheEntry","autodetected":{},"files":[{"filename":"rpg_core.js","href":"rpg_core.html#CacheEntry"}],"members":[{"name":"constructor","tagname":"method","owner":"CacheEntry","id":"method-constructor","meta":{}},{"name":"allocate","tagname":"method","owner":"CacheEntry","id":"method-allocate","meta":{"chainable":true}},{"name":"free","tagname":"method","owner":"CacheEntry","id":"method-free","meta":{}},{"name":"setTimeToLive","tagname":"method","owner":"CacheEntry","id":"method-setTimeToLive","meta":{"chainable":true}},{"name":"touch","tagname":"method","owner":"CacheEntry","id":"method-touch","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CacheEntry","short_doc":"The resource class. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/rpg_core.html#CacheEntry' target='_blank'>rpg_core.js</a></div></pre><div class='doc-contents'><p>The resource class. Allows to be collected as a garbage if not use for some time or ticks</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CacheEntry'>CacheEntry</span><br/><a href='source/rpg_core.html#CacheEntry-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CacheEntry-method-constructor' class='name expandable'>CacheEntry</a>( <span class='pre'>resource, key, item</span> ) : <a href=\"#!/api/CacheEntry\" rel=\"CacheEntry\" class=\"docClass\">CacheEntry</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resource</span> : ResourceManager<div class='sub-desc'><p>manager</p>\n</div></li><li><span class='pre'>key</span> : string<div class='sub-desc'><p>, url of the resource</p>\n</div></li><li><span class='pre'>item</span> : string<div class='sub-desc'><ul>\n<li>Bitmap, HTML5Audio, WebAudio - whatever you want to store in the cache</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CacheEntry\" rel=\"CacheEntry\" class=\"docClass\">CacheEntry</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-allocate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CacheEntry'>CacheEntry</span><br/><a href='source/rpg_core.html#CacheEntry-method-allocate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CacheEntry-method-allocate' class='name expandable'>allocate</a>( <span class='pre'></span> ) : <a href=\"#!/api/CacheEntry\" rel=\"CacheEntry\" class=\"docClass\">CacheEntry</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Allocates the resource ...</div><div class='long'><p>Allocates the resource</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CacheEntry\" rel=\"CacheEntry\" class=\"docClass\">CacheEntry</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-free' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CacheEntry'>CacheEntry</span><br/><a href='source/rpg_core.html#CacheEntry-method-free' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CacheEntry-method-free' class='name expandable'>free</a>( <span class='pre'>byTTL</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>frees the resource ...</div><div class='long'><p>frees the resource</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>byTTL</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setTimeToLive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CacheEntry'>CacheEntry</span><br/><a href='source/rpg_core.html#CacheEntry-method-setTimeToLive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CacheEntry-method-setTimeToLive' class='name expandable'>setTimeToLive</a>( <span class='pre'>ticks, time</span> ) : <a href=\"#!/api/CacheEntry\" rel=\"CacheEntry\" class=\"docClass\">CacheEntry</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets the time to live ...</div><div class='long'><p>Sets the time to live</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ticks</span> : number<div class='sub-desc'><p>TTL in ticks, 0 if not set</p>\n</div></li><li><span class='pre'>time</span> : number<div class='sub-desc'><p>TTL in seconds, 0 if not set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CacheEntry\" rel=\"CacheEntry\" class=\"docClass\">CacheEntry</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-touch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CacheEntry'>CacheEntry</span><br/><a href='source/rpg_core.html#CacheEntry-method-touch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CacheEntry-method-touch' class='name expandable'>touch</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>makes sure that resource wont freed by Time To Live\nif resource was already freed by TTL, put it in cache again ...</div><div class='long'><p>makes sure that resource wont freed by Time To Live\nif resource was already freed by TTL, put it in cache again</p>\n</div></div></div></div></div></div></div>","meta":{}});