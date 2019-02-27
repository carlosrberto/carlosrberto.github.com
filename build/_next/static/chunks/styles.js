(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./styles/global.sass":
/*!****************************!*\
  !*** ./styles/global.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"_2uUnJd8bQHRe2nQg8Od8n_","background":"CkOQ3O604NQv8JwdX4lV2","profilePicture":"_3bICw1v0R6CnYIKoj5CA7F","title":"_99mLLACzOQYuI4BvAUsDl","subTitle":"_2ZOf_FMqye2acYka8P4TAG","intro":"_2hY24MjD3Bez6LBC1haw8h","socialLinks":"rwtEf8SI5iVgvm1vnHM4H"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1551280762274");
          });
      }
    }
  

/***/ })

}]);
//# sourceMappingURL=styles.js.map