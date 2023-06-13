var _paq = (window._paq = window._paq || []);
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
  var u = "https://pagopa.matomo.cloud/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "2"]);
  var d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.async = true;
  g.src = "/assets/matomo.js";
  s.parentNode.insertBefore(g, s);
})();

document.addEventListener("DOMContentLoaded", function () {
  //drop old GA cookies
  var cookies = Cookies.get();
  var gaCookies = Object.keys(cookies).filter((k) => k.startsWith("_g"));
  for (var gc in gaCookies) {
    Cookies.remove(gaCookies[gc], { path: "", domain: ".pagopa.gov.it" });
  }
});
