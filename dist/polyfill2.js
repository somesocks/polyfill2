!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var o=[].concat(n(r(2)),n(r(3)),n(r(8)));t.exports=function(t){for(var e=0;e<o.length;e++)o[e](t)}},function(t,e){"use strict";t.exports=[]},function(t,e,r){"use strict";t.exports=[r(4),r(5),r(6),r(7)]},function(t,e){"use strict";function r(){var t={};for(var e in this)Object.prototype.hasOwnProperty.call(this,e)&&(t[e]=this[e]);return t}function n(t){Object.copy&&!t||(Object.copy=function(){return r.call.apply(r,arguments)})}t.exports=n,n()},function(t,e){"use strict";function r(t,e){var r={};for(var n in this)if(Object.prototype.hasOwnProperty.call(this,n)){var o=this[n];t.call(e,o,n,this)&&(r[n]=this[n])}return r}function n(t){Object.filter&&!t||(Object.filter=function(){return r.call.apply(r,arguments)})}t.exports=n,n()},function(t,e){"use strict";function r(t,e){for(var r in this)Object.prototype.hasOwnProperty.call(this,r)&&t.call(e,this[r],r,this)}function n(t){Object.forEach&&!t||(Object.forEach=function(){return r.call.apply(r,arguments)})}t.exports=n,n()},function(t,e){"use strict";function r(t,e){var r={};for(var n in this)if(Object.prototype.hasOwnProperty.call(this,n)){var o=this[n];r[n]=t.call(e,o,n,this)}return r}function n(t){Object.map&&!t||(Object.map=function(){return r.call.apply(r,arguments)})}t.exports=n,n()},function(t,e,r){"use strict";t.exports=[r(9),r(10),r(11),r(12),r(13)]},function(t,e){"use strict";function r(t){var e=this,r=function(r){t.has(r)&&e.delete(r)};return this.forEach(r),this}function n(t){!Set||Set.prototype.complement&&!t||Object.defineProperty(Set.prototype,"complement",{value:r})}t.exports=n,n()},function(t,e){"use strict";function r(t,e){var r=new Set,n=function(n){t.call(e,n)&&r.add(n)};return this.forEach(n),r}function n(t){!Set||Set.filter&&!t||(Set.filter=function(){return r.call.apply(r,arguments)}),!Set||Set.prototype.filter&&!t||Object.defineProperty(Set.prototype,"filter",{value:r})}t.exports=n,n()},function(t,e){"use strict";function r(t){var e=this,r=function(r){t.has(r)||e.delete(r)};return this.forEach(r),this}function n(t){!Set||Set.prototype.intersection&&!t||Object.defineProperty(Set.prototype,"intersection",{value:r})}t.exports=n,n()},function(t,e){"use strict";function r(t,e){var r=new Set,n=function(n){r.add(t.call(e,n))};return this.forEach(n),r}function n(t){!Set||Set.map&&!t||(Set.filter=function(){return r.call.apply(r,arguments)}),!Set||Set.prototype.map&&!t||Object.defineProperty(Set.prototype,"map",{value:r})}t.exports=n,n()},function(t,e){"use strict";function r(t){var e=this,r=function(t){return e.add(t)};return t.forEach(r),this}function n(t){!Set||Set.prototype.union&&!t||Object.defineProperty(Set.prototype,"union",{value:r})}t.exports=n,n()}])});