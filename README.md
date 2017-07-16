# polyfill2
A collection of nonstandard JS polyfills

## Objects

<dl>
<dt><a href="#Object">Object</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Set">Set</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="Object"></a>

## Object : <code>object</code>
**Kind**: global namespace  

* [Object](#Object) : <code>object</code>
    * [.copy](#Object.copy) ⇒
    * [.filter](#Object.filter) ⇒
    * [.map](#Object.map) ⇒

<a name="Object.copy"></a>

### Object.copy ⇒
Create a shallow copy of an object

**Kind**: static property of <code>[Object](#Object)</code>  
**Returns**: a copy of source  

| Param | Description |
| --- | --- |
| source | the object to copy |

<a name="Object.filter"></a>

### Object.filter ⇒
Create a shallow copy of an object, where some keys are filtered

**Kind**: static property of <code>[Object](#Object)</code>  
**Returns**: a filtered copy of source  

| Param | Type | Description |
| --- | --- | --- |
| source |  | the object to copy |
| filter | <code>function</code> | the filtering function, should return a boolean |
| _this |  | optional this argument to set in the filter |

<a name="Object.map"></a>

### Object.map ⇒
Create a shallow copy of an object, where every value is mapped by a mapping function

**Kind**: static property of <code>[Object](#Object)</code>  
**Returns**: a mapped copy of source  

| Param | Type | Description |
| --- | --- | --- |
| source |  | the object to map |
| map | <code>function</code> | the mapping function, should return a new value for each key-value pair |
| _this |  | optional this argument to set in the map |

<a name="Set"></a>

## Set : <code>object</code>
**Kind**: global namespace  

* [Set](#Set) : <code>object</code>
    * _instance_
        * [.complement](#Set+complement) ⇒
        * [.filter](#Set+filter) ⇒
        * [.intersection](#Set+intersection) ⇒
        * [.map](#Set+map) ⇒
        * [.union](#Set+union) ⇒
    * _static_
        * [.filter](#Set.filter) ⇒
        * [.map](#Set.map) ⇒

<a name="Set+complement"></a>

### set.complement ⇒
Create a complement of this set and another (this AND NOT set)

**Kind**: instance property of <code>[Set](#Set)</code>  
**Returns**: this  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>set</code> | the set to complement with |

<a name="Set+filter"></a>

### set.filter ⇒
Create a shallow copy of a Set, where some keys are filtered

**Kind**: instance property of <code>[Set](#Set)</code>  
**Returns**: a filtered copy of source  

| Param | Type | Description |
| --- | --- | --- |
| filter | <code>function</code> | the filtering function, should return a boolean |
| _this |  | optional this argument to set in the filter |

<a name="Set+intersection"></a>

### set.intersection ⇒
Create a union of this set and another (this AND set)

**Kind**: instance property of <code>[Set](#Set)</code>  
**Returns**: this  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>set</code> | the set to intersct with |

<a name="Set+map"></a>

### set.map ⇒
Create a shallow copy of a set, where every value is mapped by a mapping function

**Kind**: instance property of <code>[Set](#Set)</code>  
**Returns**: a mapped copy of source  

| Param | Type | Description |
| --- | --- | --- |
| map | <code>function</code> | the mapping function, should return a new value for each key-value pair |
| _this |  | optional this argument to set in the map |

<a name="Set+union"></a>

### set.union ⇒
Create a union of this set and another (this OR set)

**Kind**: instance property of <code>[Set](#Set)</code>  
**Returns**: this  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>set</code> | the set to union with |

<a name="Set.filter"></a>

### Set.filter ⇒
Create a shallow copy of a Set, where some keys are filtered

**Kind**: static property of <code>[Set](#Set)</code>  
**Returns**: a filtered copy of source  

| Param | Type | Description |
| --- | --- | --- |
| source |  | the set to copy |
| filter | <code>function</code> | the filtering function, should return a boolean |
| _this |  | optional this argument to set in the filter |

<a name="Set.map"></a>

### Set.map ⇒
Create a shallow copy of a set, where every value is mapped by a mapping function

**Kind**: static property of <code>[Set](#Set)</code>  
**Returns**: a mapped copy of source  

| Param | Type | Description |
| --- | --- | --- |
| source |  | the set to map |
| map | <code>function</code> | the mapping function, should return a new value for each key-value pair |
| _this |  | optional this argument to set in the map |

