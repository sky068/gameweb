window.__require=function t(e,n,r){function o(i,a){if(!n[i]){if(!e[i]){var s=i.split("/");if(s=s[s.length-1],!e[s]){var d="function"==typeof __require&&__require;if(!a&&d)return d(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+i+"'")}i=s}var h=n[i]={exports:{}};e[i][0].call(h.exports,function(t){return o(e[i][1][t]||t)},h,h.exports,t,e,n,r)}return n[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)o(r[i]);return o}({CardCtrl:[function(t,e){"use strict";cc._RF.push(e,"a997fQc/4VAqJ7PN9CR8eM6","CardCtrl"),cc.Class({extends:cc.Component,properties:{spSelected:cc.Node,touched:{default:!1,notify:function(){this.spSelected.active=this.touched}},selected:{default:!1,notify:function(){this.selected?this.node.y+=20:this.node.y-=20}}},onLoad:function(){},start:function(){}}),cc._RF.pop()},{}],DragSelect:[function(t,e){"use strict";function n(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function r(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}cc._RF.push(e,"df2dcXO08pNkJij4l8mxiJB","DragSelect"),cc.Class({extends:cc.Component,start:function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchEnd,this),this.cardsArr=this.node.getChildren();var t=this.cardsArr[0];this.CARD_DISTANCE=t.width*t.anchorX+this.node.getComponent(cc.Layout).spacingX,cc.log("CARD_DISTANCE: "+this.CARD_DISTANCE)},onTouchStart:function(t){var e=t.getLocation(),n=this._beginPos=this.node.convertToNodeSpaceAR(e);this._checkSelectCard(n,n,!0)},onTouchMove:function(t){var e=t.getLocation(),n=this.node.convertToNodeSpaceAR(e);this._checkSelectCard(n,n),this._checkSelectCardReverse(this._beginPos,n)},onTouchEnd:function(){this._onSelectCardEnd()},_onSelectCardEnd:function(){for(var t,e=n(this.cardsArr);!(t=e()).done;){var r=t.value.getComponent("CardCtrl");r.touched&&(r.selected=!r.selected),r.touched=!1}},_checkSelectCard:function(t,e,n){var r=this.cardsArr.length;if(n)for(var o=r-1;o>=0;o--){var c=this.cardsArr[o];if(c.getBoundingBox().contains(t))return void(c.getComponent("CardCtrl").touched=!0)}else for(var i=Math.max(1,Math.abs(t.x-e.x)),a=Math.max(1,Math.abs(t.y-e.y)),s=Math.min(t.x,e.x),d=Math.min(t.y,e.y),h=cc.rect(s,d,i,a),u=r-1;u>=0;u--){var l=this.cardsArr[u];if(l.getBoundingBox().contains(h))return void(l.getComponent("CardCtrl").touched=!0)}},_checkSelectCardReverse:function(t,e){for(var n=t.x<e.x?t:e,r=Math.abs(t.x-e.x),o=Math.abs(t.y-e.y),c=cc.rect(n.x,n.y,r,o),i=this.cardsArr.length,a=i-1;a>=0;a--){var s=this.cardsArr[a];cc.Intersection.rectRect(s.getBoundingBox(),c)?n.x-s.x>=this.CARD_DISTANCE&&a!=i-1&&(s.getComponent("CardCtrl").touched=!1):s.getComponent("CardCtrl").touched=!1}}}),cc._RF.pop()},{}],"use_v2.0.x_cc.Toggle_event":[function(t,e){"use strict";cc._RF.push(e,"9f315G37LxKCJr3eZJn+nru","use_v2.0.x_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_check=!0),cc._RF.pop()},{}]},{},["CardCtrl","DragSelect","use_v2.0.x_cc.Toggle_event"]);