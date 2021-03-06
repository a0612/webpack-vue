"use strict";

/* eslint func-names: 0 wrap-iife: 0 */
(function (doc, win) {
  if (typeof doc === 'undefined' || typeof win === 'undefined') return;
  var docEl = doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  var recalc = function recalc() {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (clientWidth > 780) clientWidth = 780;
    if (clientWidth < 310) clientWidth = 310; // 以 iphone6/7 为基准

    docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
