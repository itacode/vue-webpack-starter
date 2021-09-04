/**
 * Library of helpers
 */

var libdan = (function libdan() {
  'use strict';

  var self = {};

  //	Get the right cross-browser event
  var getTransitionEvent = function getTransitionEvent() {
    var t,
      el = document.createElement('fakeelement'),
      transitions = {
        transition: 'transitionend',
        OTransition: 'oTransitionEnd',
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
      };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  };
  self.getTransitionEvent = getTransitionEvent;

  //	Get the right cross-browser event
  var getAnimationEvent = function getAnimationEvent() {
    var t,
      el = document.createElement('fakeelement'),
      animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'animationend',
        WebkitAnimation: 'webkitAnimationEnd',
      };

    for (t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  };
  self.getAnimationEvent = getAnimationEvent;

  // Throttle.
  // Example: $(window).scroll(throttle( callback, 250 ));
  var throttle = function throttle(func, limit) {
    var wait = false;

    return function () {
      if (!wait) {
        func.call();
        wait = true;
        setTimeout(function () {
          wait = false;
        }, limit);
      }
    };
  };
  self.throttle = throttle;

  // requestAnimationFrame throttle
  // var throttled = throttle(callback);
  // callback is the function to be throttled by requestAnimationFrame.
  // let you create a throttled function, which only invokes the passed function at most once per animation frame
  // throttled.cancel();
  // Cancel the trailing throttled invocation.
  // github.com/wuct/raf-throttle
  var rafThrottle = function rafThrottle(callback) {
    var requestId;

    function later(args) {
      return function () {
        requestId = null;
        callback.apply(undefined, args);
      };
    }

    function throttled() {
      var key,
        len = arguments.length,
        args = [];
      for (key = 0; key < len; key++) {
        args[key] = arguments[key];
      }
      if (requestId == null) {
        requestId = requestAnimationFrame(later(args));
      }
    }
    throttled.cancel = function () {
      return cancelAnimationFrame(requestId);
    };
    return throttled;
  };
  self.rafThrottle = rafThrottle;

  // Debounce.
  // Example: window.onresize = debounce(callback, 250);
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `execAsap` (true) is passed, trigger the function on the
  // leading edge, instead of the trailing.
  // John Hann http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced() {
      var obj = this,
        args = arguments;

      function delayed() {
        if (!execAsap) func.apply(obj, args);
        timeout = null;
      }

      if (timeout) clearTimeout(timeout);
      else if (execAsap) func.apply(obj, args);

      timeout = setTimeout(delayed, threshold || 100);
    };
  };
  self.debounce = debounce;

  // Ensures a given function can only be called once
  var once = function once(fn, context) {
    var result;

    return function () {
      if (fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  };
  self.once = once;

  // Shuffle an array
  var shuffleArray = function shuffleArray(a) {
    var i, temp, ran;

    for (i = a.length - 1; i > 0; i--) {
      temp = a[i];
      ran = Math.floor(Math.random() * (i + 1));
      a[i] = a[ran];
      a[ran] = temp;
    }
  };
  self.shuffleArray = shuffleArray;

  // Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!
  var getRandomIntInclusive = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  self.getRandomIntInclusive = getRandomIntInclusive;

  // Test a media query.
  // Example: if (isMedia("screen and (max-width:800px)"){}
  // Copyright 2011 Nicholas C. Zakas. All rights reserved.
  var isMedia = (function () {
    var div;

    return function (query) {
      //if the <div> doesn't exist, create it and make sure it's hidden
      if (!div) {
        div = document.createElement('div');
        div.id = 'ncz1';
        div.style.cssText = 'position:absolute;top:-1000px';
        document.body.insertBefore(div, document.body.firstChild);
      }

      div.innerHTML =
        '_<style media="' + query + '"> #ncz1 { width: 1px; }</style>';
      div.removeChild(div.firstChild);
      return div.offsetWidth == 1;
    };
  })();
  self.isMedia = isMedia;

  // Extend a JavaScript object with the key/value pairs of another.
  // Returns first object reference.
  var extend = function extend(obj, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
  };
  self.extend = extend;

  return self;
})();
