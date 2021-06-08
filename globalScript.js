window.onload = function() {
    document.cookie = 'SameSite=None; Secure';
    }
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        function getPerfStats() {
        var timing = window.performance.timing;
        return {
          dns: timing.domainLookupEnd - timing.domainLookupStart,
          connect: timing.connectEnd - timing.connectStart,
          ttfb: timing.responseStart - timing.connectEnd,
          basePage: timing.responseEnd - timing.responseStart,
          frontEnd: timing.loadEventStart - timing.responseEnd
        };
      }
      var ntStats = getPerfStats();
        // _paq.push(['setSecureCookie', true]);
        var perfEntries = window.performance.getEntriesByType("navigation");
        var resEntries = window.performance.getEntriesByType("resource");
    var entry = perfEntries[0];
    var res = resEntries[0];
    var entryJson = entry.toJSON();
    console.log('entryType: ' + entryJson.entryType);
    console.log('initiatorType: ' + entryJson.initiatorType);
    console.log('connect: ' + entryJson.connectEnd - entryJson.connectStart);
    var entryRes = res.toJSON();
    var s = JSON.stringify(entryJson);
    var r = JSON.stringify(entryRes);
    console.log('S: ' + s);
    
    console.log('R: ' + r);
        // _paq.push(['setSecureCookie', location.protocol === 'https:']);
        _paq.push(['setDocumentTitle', document.title]);
        _paq.push(['setCustomVariable', 1, 'Network-DNS', ntStats.dns + ' ms', 'page']);
        _paq.push(['setCustomVariable', 2, 'Network-Connect', ntStats.connect + ' ms', 'page']);
        _paq.push(['setCustomVariable', 3, 'Network-TTFB', ntStats.ttfb + ' ms', 'page']);
        _paq.push(['setCustomVariable', 4, 'Network-BasePage', ntStats.basePage + ' ms', 'page']);
        _paq.push(['setCustomVariable', 5, 'Network-FrontEnd', ntStats.frontEnd + ' ms', 'page']);
        // _paq.push(['setCustomDimension', 4, window.performance.getEntriesByType("resource")]);
        // _paq.push(['setCustomDimension', 3, window.performance.getEntriesByType("navigation")]);
        _paq.push(['setCustomDimension', 5, s]);
        // _paq.push(['setCustomDimension', 4, r]);
        // _paq.push(['setCustomDimension', 3, s]);
        _paq.push(['setGenerationTimeMs', 0]);
        _paq.push(['trackPageView']);
        _paq.push(['trackAllContentImpressions']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="https://sachinhulawale.matomo.cloud/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '4']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.type='text/javascript'; g.async=true; g.src='//cdn.matomo.cloud/sachinhulawale.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
        })();

        console.log('Matomo ID is: ' + document.currentScript.getAttribute('matomoId'));