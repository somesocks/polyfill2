# polyfill2
A collection of nonstandard JS polyfills

## Members

<dl>
<dt><a href="#Object.copy
Create a shallow copy of an object">Object.copy
Create a shallow copy of an object</a> ⇒</dt>
<dd></dd>
<dt><a href="#Object.filter
Create a shallow copy of an object, where some keys are filtered">Object.filter
Create a shallow copy of an object, where some keys are filtered</a> ⇒</dt>
<dd></dd>
<dt><a href="#Object.forEach
Iterates over an object, and calls a function for each key-value pair in it">Object.forEach
Iterates over an object, and calls a function for each key-value pair in it</a> ⇒</dt>
<dd></dd>
<dt><a href="#Object.map
Create a shallow copy of an object, where every value is mapped by a mapping function">Object.map
Create a shallow copy of an object, where every value is mapped by a mapping function</a> ⇒</dt>
<dd></dd>
<dt><a href="#Set.filter
Create a shallow copy of a Set, where some keys are filtered">Set.filter
Create a shallow copy of a Set, where some keys are filtered</a> ⇒</dt>
<dd></dd>
<dt><a href="#Set+filter
Create a shallow copy of a Set, where some keys are filtered">Set#filter
Create a shallow copy of a Set, where some keys are filtered</a> ⇒</dt>
<dd></dd>
<dt><a href="#Set.map
Create a shallow copy of a set, where every value is mapped by a mapping function">Set.map
Create a shallow copy of a set, where every value is mapped by a mapping function</a> ⇒</dt>
<dd></dd>
<dt><a href="#Set+map
Create a shallow copy of a set, where every value is mapped by a mapping function">Set#map
Create a shallow copy of a set, where every value is mapped by a mapping function</a> ⇒</dt>
<dd></dd>
</dl>

<a name="Object.copy
Create a shallow copy of an object"></a>

## Object.copy
Create a shallow copy of an object ⇒
**Kind**: global variable  
**Returns**: a copy of source  

| Param | Description |
| --- | --- |
| source | the object to copy |

<a name="Object.filter
Create a shallow copy of an object, where some keys are filtered"></a>

## Object.filter
Create a shallow copy of an object, where some keys are filtered ⇒
**Kind**: global variable  
**Returns**: a filtered copy of source  

| Param | Type | Description |
| --- | --- | --- |
| source |  | the object to copy |
| filter | <code>function</code> | the filtering function, should return a boolean |
| _this |  | optional this argument to set in the filter |

<a name="Object.forEach
Iterates over an object, and calls a function for each key-value pair in it"></a>

## Object.forEach
Iterates over an object, and calls a function for each key-value pair in it ⇒
**Kind**: global variable  
**Returns**: a filtered copy of source  

| Param | Type | Description |
| --- | --- | --- |
| source |  | the object to iterate over |
| toCall | <code>function</code> | the callback function, called for each key-value pair |
| _this |  | optional this argument to set in the callback |

<a name="Object.map
Create a shallow copy of an object, where every value is mapped by a mapping function"></a>

## Object.map
Create a shallow copy of an object, where every value is mapped by a mapping function ⇒
**Kind**: global variable  
**Returns**: a mapped copy of source  

| Param | Type | Description |
| --- | --- | --- |
| source |  | the object to map |
| map | <code>function</code> | the mapping function, should return a new value for each key-value pair |
| _this |  | optional this argument to set in the map |

<a name="Set.filter
Create a shallow copy of a Set, where some keys are filtered"></a>

## Set.filter
Create a shallow copy of a Set, where some keys are filtered ⇒
**Kind**: global variable  
**Returns**: a filtered copy of source  

| Param | Type | Description |
| --- | --- | --- |
| source |  | the set to copy |
| filter | <code>function</code> | the filtering function, should return a boolean |
| _this |  | optional this argument to set in the filter |

<a name="Set+filter
Create a shallow copy of a Set, where some keys are filtered"></a>

## Set#filter
Create a shallow copy of a Set, where some keys are filtered ⇒
**Kind**: global variable  
**Returns**: a filtered copy of source  

| Param | Type | Description |
| --- | --- | --- |
| filter | <code>function</code> | the filtering function, should return a boolean |
| _this |  | optional this argument to set in the filter |

<a name="Set.map
Create a shallow copy of a set, where every value is mapped by a mapping function"></a>

## Set.map
Create a shallow copy of a set, where every value is mapped by a mapping function ⇒
**Kind**: global variable  
**Returns**: a mapped copy of source  

| Param | Type | Description |
| --- | --- | --- |
| source |  | the set to map |
| map | <code>function</code> | the mapping function, should return a new value for each key-value pair |
| _this |  | optional this argument to set in the map |

<a name="Set+map
Create a shallow copy of a set, where every value is mapped by a mapping function"></a>

## Set#map
Create a shallow copy of a set, where every value is mapped by a mapping function ⇒
**Kind**: global variable  
**Returns**: a mapped copy of source  

| Param | Type | Description |
| --- | --- | --- |
| map | <code>function</code> | the mapping function, should return a new value for each key-value pair |
| _this |  | optional this argument to set in the map |

