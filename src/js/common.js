/**
 * Smooth scroll to the anchor link.
 * Usage: $('.js_smooth_scroll').smoothScrollDP();
 */
;(function ($, window, document, undefined) {

  "use strict";

  $.fn.smoothScrollDP = function () {

    return this.each(function (e) {
      $(this).on("click", function (e) {
        var target = $(this.hash);
        if (history.pushState) {
          history.pushState(null, null, this.hash);
        } else {
          location.hash = this.hash;
        }
        target = target.length ? target : $('[name="' + this.hash.slice(1) + '"]');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          e.preventDefault();
        }
      });
    });
  };

})(jQuery, window, document);

/**
 * page top button
 */

$(function () {

  "use strict";

  var $top = $('#js_pagetop_btn'),
    $window = $(window),
    scrolled;

  var scrollHandler = function () {
    scrolled = $window.scrollTop();
    if (scrolled > 300) {
      $top.addClass("js_pagetop_btn_active");
    } else {
      $top.removeClass("js_pagetop_btn_active");
    }
  };

  if ($top.length) {
    $window.scroll(libdan.debounce(scrollHandler, 250));
    $top.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: '0px'
      }, 1000);
    });
    $window.scroll();
  }
});

/**
 * Ligthbox (blackbox)
 */
;(function ($, window, document, undefined) {

  "use strict";

  $.fn.blackboxDP = function (options) {

    return this.each(function () {

      var $wrap = !!options.overlayID ? $('#' + options.overlayID) : $(this.hash),
        $layer = $wrap.find('.js_layer'),
        $inner = $wrap.find('.blackbox_inner'),
        $trigger = $(this),
        $img,
        isLinkedImageMode = !!options.linkedImage || false;

      if (isLinkedImageMode) {
        $img = $wrap.find('#js_image');
      }

      $trigger.on("click", function (e) {
        var $this = $(this);
        e.preventDefault();

        // if true then it uses the href of a tag (trigger) to set the image src
        if (isLinkedImageMode) {
          $img.attr('src', $this.attr('href'));
        }
        $("body").css({
          "height": "100%",
          "overflow": "hidden"
        });
        $wrap.show();
        $layer.animate({
          opacity: 1
        });
        setTimeout(function () {
          $inner.addClass("js_blackbox_play");
        }, 10);
      });
      $wrap.on("click", ".js_close", function (e) {
        var $target = $(e.target);
        if ($target.hasClass("js_close")) {
          e.preventDefault();
          $("body").css({
            "height": "",
            "overflow": ""
          });
          $inner.removeClass("js_blackbox_play");
          $wrap.hide();
          $layer.css({
            opacity: 0
          });
        }
      });
    });
  };

})(jQuery, window, document);
